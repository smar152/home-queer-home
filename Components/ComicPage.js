import styled from "styled-components";
import Link from "next/link";

import { useSpring, animated } from "@react-spring/web";
import { createUseGesture, dragAction, pinchAction } from "@use-gesture/react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { device } from "../data/device";

const StComicPage = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 40px);
  overflow: hidden;
`;

const StPagePagination = styled("div")`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  padding: 10px;
  z-index: 1;
  background-color: white;
  color: darkorange;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  a {
    text-decoration: none;
    color: orange;
  }
`;

const StPageImages = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StImageContainer = styled("div")`
  padding-top: 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StImg = styled("img")`
  width: 100%;
  cursor: pointer;
`;

const StImgLink = styled("a")`
  display: block;
  position: sticky;
  overflow: hidden;
  z-index: 1;
  @media ${device.laptop} {
    position: relative;
    z-index: 0;
  }
`;

const StPostContainer = styled("div")`
  padding-top: 80px;
  padding-bottom: 40px;
`;

const StPageDate = styled("div")`
  font-weight: 400;
  font-size: 14px;
  text-align: right;
`;

const StPageTite = styled("h2")``;

const StPostContent = styled("div")``;

function getPageUrl({ pageNumber, episodeNumber, seasonNumber }) {
  return `/season/${seasonNumber}/episode/${episodeNumber}/page/${pageNumber}`;
}

const ComicPage = (props) => {
  const { page, error } = props;
  const {
    title,
    date,
    images,
    hoverTitle,
    blogPost,
    pageNumber,
    episodeNumber,
    seasonNumber,
    previous,
    next,
  } = page || {};
  const dateObj = new Date(`${date} 12:00:00`);
  const router = useRouter();
  // const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  // const config = {
  //   // global options such as `target`
  //   ...genericOptions,
  //   // gesture specific options
  //   drag: dragOptions,
  //   wheel: wheelOptions,
  //   pinch: pinchOptions,
  //   scroll: scrollOptions,
  //   hover: hoverOptions,
  // };

  const useGesture = createUseGesture([dragAction, pinchAction]);

  useEffect(() => {
    const handler = (e) => e.preventDefault();
    document.addEventListener("gesturestart", handler);
    document.addEventListener("gesturechange", handler);
    document.addEventListener("gestureend", handler);
    return () => {
      document.removeEventListener("gesturestart", handler);
      document.removeEventListener("gesturechange", handler);
      document.removeEventListener("gestureend", handler);
    };
  }, []);

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));
  const ref = useRef(null);

  useGesture(
    {
      // onHover: ({ active, event }) => console.log('hover', event, active),
      // onMove: ({ event }) => console.log('move', event),
      onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
        if (pinching) return cancel();
        api.start({ x, y });
      },
      onPinch: ({
        origin: [ox, oy],
        first,
        movement: [ms],
        offset: [s, a],
        memo,
      }) => {
        if (first) {
          const { width, height, x, y } = ref.current.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({ scale: s, rotateZ: a, x, y });
        return memo;
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
    }
  );

  // Set the drag hook and define component movement based on gesture data.
  // const bind = useDrag(({ down, movement: [mx, my] }) => {
  //   const threshold = 0.3;
  //   const isPrevious = mx / window.innerWidth > threshold;
  //   const isNext = mx / window.innerWidth < -threshold;
  //   let url;
  //   if (isPrevious) {
  //     url = getPageUrl(previous);
  //   } else if (isNext) {
  //     url = getPageUrl(next);
  //   }
  //   api.start({ x: down ? mx : 0 });
  //   if (url) {
  //     router.push(url);
  //   }
  // });

  return (
    <StComicPage data-id="comic-page">
      <StPagePagination data-id="page-pagination">
        <div>
          <Link href={getPageUrl(previous)}>
            <a>
              <strong>{"<"}</strong>
            </a>
          </Link>
        </div>
        <div>
          Season {seasonNumber + 1} Episode {episodeNumber + 1}
        </div>
        <div>
          <Link href={getPageUrl(next)}>
            <a>
              <strong>{">"}</strong>
            </a>
          </Link>
        </div>
      </StPagePagination>
      <Link href={getPageUrl(next)}>
        <StImgLink data-id="page-image-link">
          <animated.div
            ref={ref}
            style={{
              ...style,
              willChange: "transform",
              touchAction: "none",
              userSelect: "none",
              overflow: "hidden",
            }}
          >
            <StPageImages title={hoverTitle} data-id="page-images">
              {images.map((image) => {
                const { url, alt } = image;
                return (
                  <StImageContainer>
                    <StImg
                      src={url}
                      key={url}
                      alt={alt}
                      // width="840px"
                      // height="1188px"
                    />
                  </StImageContainer>
                );
                //return <img src={url} key={url} alt={alt} />;
              })}
            </StPageImages>
          </animated.div>
        </StImgLink>
      </Link>
      {/* <BiggerNavigation previousChapterKey nextChapterKey /> */}
      {/* <ChapterTitle>{title}</ChapterTitle> */}
      <StPostContainer data-id="post-container">
        <StPageDate>
          {dateObj.toLocaleDateString("en-UK", {
            dateStyle: "long",
          })}
          <hr />
        </StPageDate>
        <StPageTite>{title}</StPageTite>
        <StPostContent dangerouslySetInnerHTML={{ __html: blogPost }} />
      </StPostContainer>
    </StComicPage>
  );
};

export default ComicPage;
