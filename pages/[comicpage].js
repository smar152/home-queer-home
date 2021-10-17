import * as React from "react";
import pagesMap from "../data/pages";
import { useRouter } from "next/router";

export default function ComicPage({ pageKey }) {
  const page = pagesMap[pageKey];
  console.log("pageKey: ", pageKey);
  console.log("pagesMap: ", pagesMap);
  console.log("pagesMap[pageKey]: ", pagesMap[pageKey]);
  const { title, date, images, hoverTitle, blogPost } = page || {};
  if (!page) {
    console.error("exeis kanei malakia -- na einai swsta ta page keys.");
    // const previousPageKey = pageIndex > 0 ? pages[pageIndex - 1] : null;
    // const nextPageKey =
    //   pageIndex < pages.length - 1 ? pages[pageIndex + 1] : null;
    // const dateObj = new Date(`${date} 12:00:00`); // to avoid showing different days
  }
  return (
    <>
      <div>
        <div key={pageKey}>
          <h4>
            {title} -{" "}
            {/* {dateObj.toLocaleDateString("en-UK", {
              dateStyle: "long",
            })} */}
          </h4>
          {/* <div>
            <div>
              <strong>Previous Page:</strong>{" "}
              {previousPageKey ? previousPageKey : "No Previous"}
            </div>
            <div>
              <strong>Next Page:</strong>{" "}
              {nextPageKey ? nextPageKey : "No next"}
            </div>
          </div> */}
          <div title={hoverTitle}>
            {/* {images.map((image) => {
              const { url, alt } = image;
              return <img src={url} key={url} alt={alt} />;
            })} */}
          </div>
          <div>{blogPost}</div>
        </div>
        );
      </div>
    </>
  );
}
