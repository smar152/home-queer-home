import chaptersMap from "../../data/chapters";
import pagesMap from "../../data/pages";

export default function Test() {
  const chapterKeys = Object.keys(chaptersMap);
  return (
    <div>
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
          <div key={chapterKey}>
            <h3>{title}</h3>
            <div>
              <div>
                <strong>Previous Chapter:</strong>{" "}
                {previousChapterKey ? previousChapterKey : "No Previous"}
              </div>
              <div>
                <strong>Next Chapter:</strong>{" "}
                {nextChapterKey ? nextChapterKey : "No next"}
              </div>
            </div>
            <div>
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
                  <div key={pageKey}>
                    <h4>
                      {title} -{" "}
                      {dateObj.toLocaleDateString("en-UK", {
                        dateStyle: "long",
                      })}
                    </h4>
                    <div>
                      <div>
                        <strong>Previous Page:</strong>{" "}
                        {previousPageKey ? previousPageKey : "No Previous"}
                      </div>
                      <div>
                        <strong>Next Page:</strong>{" "}
                        {nextPageKey ? nextPageKey : "No next"}
                      </div>
                    </div>
                    <div title={hoverTitle}>
                      {images.map((image) => {
                        const { url, alt } = image;
                        return <img src={url} key={url} alt={alt} />;
                      })}
                    </div>
                    <div>{blogPost}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
