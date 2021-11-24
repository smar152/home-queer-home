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
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
`;
const StPageImages = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 840px;
  margin-top: 10px;
`;
const StImageContainer = styled("div")`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StPageTitle = styled("div")``;

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
              <strong>Previous Page:</strong>{" "}
            </a>
          </Link>
          {/* {previousPageKey ? previousPageKey : "No Previous"} */}
        </div>
        <div>
          <Link
            href={`/season/${next.seasonNumber}/episode/${next.episodeNumber}/page/${next.pageNumber}`}
          >
            <a>
              <strong>Next Page:</strong>
            </a>
          </Link>
          {/* {nextPageKey ? nextPageKey : "No next"} */}
        </div>
      </StPagePagination>
      <StPageImages title={hoverTitle}>
        {images.map((image) => {
          const { url, alt } = image;
          return (
            <StImageContainer>
              <img
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
      {/* <BiggerNavigation previousChapterKey nextChapterKey /> */}
      {/* <ChapterTitle>{title}</ChapterTitle> */}
      <StPageTitle>
        {title} -{" "}
        {dateObj.toLocaleDateString("en-UK", {
          dateStyle: "long",
        })}
      </StPageTitle>
      <StPagePost dangerouslySetInnerHTML={{ __html: blogPost }} />
    </StComicPage>
  );
};

export default ComicPage;
