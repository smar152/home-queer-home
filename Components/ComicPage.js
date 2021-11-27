import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StComicPage = styled("div")`
  display: flex;
  flex-direction: column;
`;
const StPagePagination = styled("div")`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 50px;
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
  margin-top: 10px;
`;
const StImageContainer = styled("div")`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StPageDate = styled("div")`
  margin-top: 80px;
  font-weight: 400;
  font-size: 14px;
  text-align: right;
`;

const StPageTite = styled("h2")``;

const StPagePost = styled("div")``;

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
  return (
    <StComicPage>
      <StPagePagination>
        <div>
          <Link
            href={`/season/${previous.seasonNumber}/episode/${previous.episodeNumber}/page/${previous.pageNumber}`}
          >
            <a>
              <strong>{"<"} previous page</strong>
            </a>
          </Link>
          {/* {previousPageKey ? previousPageKey : "No Previous"} */}
        </div>
        <div>
          Season {seasonNumber + 1} Episode {episodeNumber + 1}
        </div>
        <div>
          <Link
            href={`/season/${next.seasonNumber}/episode/${next.episodeNumber}/page/${next.pageNumber}`}
          >
            <a>
              <strong>next page {">"}</strong>
            </a>
          </Link>
        </div>
      </StPagePagination>
      <Link
        href={`/season/${next.seasonNumber}/episode/${next.episodeNumber}/page/${next.pageNumber}`}
      >
        <a>
          <StPageImages title={hoverTitle}>
            {images.map((image) => {
              const { url, alt } = image;
              return (
                <StImageContainer>
                  <Image
                    src={url}
                    key={url}
                    alt={alt}
                    width="840px"
                    height="1188px"
                  />
                </StImageContainer>
              );
              //return <img src={url} key={url} alt={alt} />;
            })}
          </StPageImages>
        </a>
      </Link>
      {/* <BiggerNavigation previousChapterKey nextChapterKey /> */}
      {/* <ChapterTitle>{title}</ChapterTitle> */}
      <StPageDate>
        {dateObj.toLocaleDateString("en-UK", {
          dateStyle: "long",
        })}
        <hr />
      </StPageDate>
      <StPageTite>{title}</StPageTite>
      <StPagePost dangerouslySetInnerHTML={{ __html: blogPost }} />
    </StComicPage>
  );
};

export default ComicPage;
