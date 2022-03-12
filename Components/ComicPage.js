import styled from "styled-components";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useRouter } from "next/router";

const StComicPage = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 40px);
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
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data.
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    const threshold = 0.3;
    const isPrevious = mx / window.innerWidth > threshold;
    const isNext = mx / window.innerWidth < -threshold;
    let url;
    if (isPrevious) {
      url = getPageUrl(previous);
    } else if (isNext) {
      url = getPageUrl(next);
    }
    api.start({ x: down ? mx : 0 });
    if (url) {
      router.push(url);
    }
  });

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
          <StPageImages title={hoverTitle} data-id="page-images">
            {images.map((image) => {
              const { url, alt } = image;
              return (
                <StImageContainer>
                  <animated.div
                    {...bind()}
                    style={{ x, y, touchAction: "none" }}
                  >
                    <StImg
                      src={url}
                      key={url}
                      alt={alt}
                      // width="840px"
                      // height="1188px"
                    />
                  </animated.div>
                </StImageContainer>
              );
              //return <img src={url} key={url} alt={alt} />;
            })}
          </StPageImages>
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
