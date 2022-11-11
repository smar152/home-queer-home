import styled from "styled-components";
import Image from "./Image";
import ChevronDoubleLeft from "./Icons/ChevronDoubleLeft";
import ChevronDoubleRight from "./Icons/ChevronDoubleRight";
import ChevronRight from "./Icons/ChevronRight";
import ChevronLeft from "./Icons/ChevronLeft";
import { getLastComicPageNumbers } from "./../data/comics";

const StComicPage = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 40px);
  font-size: 1.1rem;
`;

const StPagePagination = styled("div")`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 1;
  color: darkorange;

  a {
    text-decoration: none;
    color: orange;
  }
`;

const StSeason = styled.div`
  display: inline-flex;
  font-weight: 400;
  color: orange;
  padding: 10px 15px 5px 15px;
  outline: solid 2px orange;
  outline-offset: -1px;
  position: relative;
  top: -2px;
  border-radius: 0px 0px 20px 20px;
  transition: background-color 400ms ease 0s;
  background-color: rgba(255, 255, 255, 0.97);

  :hover {
    background-color: rgba(255, 165, 0, 0.97);
    color: white;
  }
`;
const StPaginationIcon = styled(StSeason)`
  font-size: 2rem;
  svg {
    height: 1.3rem;
  }
`;

const StPage = styled("span")`
  padding: 10px 15px 5px 15px;
  border: solid 2px orange;
  border-radius: 0px 0px 20px 20px;
  background-color: orange;
  color: white;
`;

const StPageImages = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media (max-width: 768px) {
    padding-left: 35px;
    padding-right: 35px;
  }
`;

const StPageDate = styled("div")`
  font-weight: 400;
  font-size: 14px;
  text-align: right;
`;

const StPageTite = styled("h2")``;

const StPostContent = styled("div")`
`;

const ComicPage = (props) => {
  const lastComicPage = getLastComicPageNumbers();

  const url = `/season/${lastComicPage.lastComicSeasonNumber + 1}/episode/${
    lastComicPage.lastComicEpisodeNumber + 1
  }/page/${lastComicPage.lastComicPageNumber + 1}`;
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
          <StLink key="firstPageLink" href={`/season/1/episode/1/page/1`}>
            <StPaginationIcon>
              <ChevronDoubleLeft />
            </StPaginationIcon>
          </StLink>
          <StLink
            key="prevPageLink"
            href={`/season/${previous.seasonNumber}/episode/${previous.episodeNumber}/page/${previous.pageNumber}`}
          >
            <StPaginationIcon>
              <ChevronLeft />
            </StPaginationIcon>
          </StLink>
        </div>
        <div>
          <StLink
            key="seasonLink"
            href={`/season/${seasonNumber + 1}/episode/${1}/page/${1}`}
          >
            <StSeason>season {seasonNumber + 1}</StSeason>
          </StLink>
          <StLink
            key="seasonLink"
            href={`/season/${seasonNumber + 1}/episode/${
              episodeNumber + 1
            }/page/${1}`}
          >
            <StSeason>episode {episodeNumber + 1}</StSeason>
          </StLink>
          <StPage>page {pageNumber + 1}</StPage>
        </div>
        <div>
          <StLink
            key="nextPageLink"
            href={`/season/${next.seasonNumber}/episode/${next.episodeNumber}/page/${next.pageNumber}`}
          >
            <StPaginationIcon>
              <ChevronRight />
            </StPaginationIcon>
          </StLink>
          <StLink key="nextPageLink" href={`${url}`}>
            <StPaginationIcon>
              <ChevronDoubleRight />
            </StPaginationIcon>
          </StLink>
        </div>
      </StPagePagination>
      <StLink
        href={`/season/${next.seasonNumber}/episode/${next.episodeNumber}/page/${next.pageNumber}`}
      >
        <StImgLink data-id="page-image-link">
          <StPageImages title={hoverTitle} data-id="page-images">
            {images.map((image) => {
              const { url, alt } = image;
              return <Image key={url} src={url} alt={alt} />;
              //return <img src={url} key={url} alt={alt} />;
            })}
          </StPageImages>
        </StImgLink>
      </StLink>
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
