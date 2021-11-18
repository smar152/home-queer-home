import Header from "../../Components/Header";
import chaptersMap from "../../data/chapters";
import pagesMap from "../../data/pages";
import Image from "next/dist/client/image";
import styled from "styled-components";
import BiggerNavigation from "../../Components/BiggerNavigation";

const PageContainer = styled("div")`
  /* display: flex; */
`;

const ChapterContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: min-content;
  margin: 0px auto;
`;

const ChapterTitle = styled("h3")``;

const ComicPageContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled("div")``;

const PagePagination = styled("div")`
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

const PageImages = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 840px;
  margin-top: 10px;
`;
const ImageContainer = styled("div")`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const PagePost = styled("div")``;

export default function Test() {
  const chapterKeys = Object.keys(chaptersMap);
  return (
    <div className="container">
      <Header />
      {chapterKeys.map((chapterKey, chapterIndex) => {
        const chapter = chaptersMap[chapterKey];
        const { title, pages } = chapter;
        const previousChapterKey =
          chapterIndex > 0 ? chapterKeys[chapterIndex - 1] : null;
        const nextChapterKey =
          chapterIndex < chapterKeys.length - 1
            ? chapterKeys[chapterIndex + 1]
            : null;
        return (
          <PageContainer>
            <ChapterContainer key={chapterKey}>
              <ComicPageContainer>
                {pages.map((pageKey, pageIndex) => {
                  const page = pagesMap[pageKey];
                  const { title, date, images, hoverTitle, blogPost } =
                    page || {};
                  if (!page) {
                    console.error(
                      "exeis kanei malakia -- na einai swsta ta page keys."
                    );
                  }
                  const previousPageKey =
                    pageIndex > 0 ? pages[pageIndex - 1] : null;
                  const nextPageKey =
                    pageIndex < pages.length - 1 ? pages[pageIndex + 1] : null;
                  const dateObj = new Date(`${date} 12:00:00`); // to avoid showing different days
                  return (
                    <PageContainer key={pageKey}>
                      <PagePagination>
                        <div>
                          <strong>Previous Page:</strong>{" "}
                          {previousPageKey ? previousPageKey : "No Previous"}
                        </div>
                        <div>
                          <strong>Next Page:</strong>{" "}
                          {nextPageKey ? nextPageKey : "No next"}
                        </div>
                      </PagePagination>
                      <PageImages title={hoverTitle}>
                        {images.map((image) => {
                          const { url, alt } = image;
                          return (
                            <ImageContainer>
                              <Image
                                src={url}
                                key={url}
                                alt={alt}
                                width="840px"
                                height="1188px"
                              />
                            </ImageContainer>
                          );
                          //return <img src={url} key={url} alt={alt} />;
                        })}
                      </PageImages>
                      <BiggerNavigation previousChapterKey nextChapterKey />
                      <ChapterTitle>{title}</ChapterTitle>
                      <PageTitle>
                        {title} -{" "}
                        {dateObj.toLocaleDateString("en-UK", {
                          dateStyle: "long",
                        })}
                      </PageTitle>
                      <PagePost>{blogPost}</PagePost>
                    </PageContainer>
                  );
                })}
              </ComicPageContainer>
            </ChapterContainer>
          </PageContainer>
        );
      })}
    </div>
  );
}
