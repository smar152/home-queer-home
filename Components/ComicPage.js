import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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

const StSeason = styled("span")`
  font-weight: 400;
`;
const StEpisode = styled("span")`
  font-weight: 600;
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

const StLink = styled("a")`
  cursor: pointer;
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
    <StComicPage data-id="comic-page">
      <StPagePagination data-id="page-pagination">
        <div>
          <StLink
            key="prevPageLink"
            href={`/season/${previous.seasonNumber}/episode/${previous.episodeNumber}/page/${previous.pageNumber}`}
          >
            <a>
              <strong>{"<"}</strong>
            </a>
          </StLink>
        </div>
        <div>
          <StLink
            key="seasonLink"
            href={`/season/${seasonNumber + 1}/episode/${1}/page/${1}`}
          >
            <StSeason>season {seasonNumber + 1} | </StSeason>
          </StLink>
          <StLink
            key="seasonLink"
            href={`/season/${seasonNumber + 1}/episode/${
              episodeNumber + 1
            }/page/${1}`}
          >
            <StEpisode>episode {episodeNumber + 1} </StEpisode>
          </StLink>
          | page {pageNumber + 1}
        </div>
        <div>
          <Link
            key="nextPageLink"
            href={`/season/${next.seasonNumber}/episode/${next.episodeNumber}/page/${next.pageNumber}`}
          >
            <a>
              <strong>{">"}</strong>
            </a>
          </Link>
        </div>
      </StPagePagination>
      <Link
        href={`/season/${next.seasonNumber}/episode/${next.episodeNumber}/page/${next.pageNumber}`}
      >
        <StImgLink data-id="page-image-link">
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
