import react, { useEffect, useCallback, useState, setState } from "react";
import { useRouter } from "next/router";
import ComicPage from "../../../../../../Components/ComicPage";
import Layout from "../../../../../../Components/Layout/Layout";
import comics from "../../../../../../data/comics";

const PagePage = ({ page, error }) => {
  const router = useRouter();

  const handleUserKeyPress = (event) => {
    const { keyCode } = event;
    const pageKeyMap = {
      37: page.previous,
      39: page.next,
    };
    const newPage = pageKeyMap[keyCode];
    if (newPage) {
      const { seasonNumber, episodeNumber, pageNumber } = newPage;
      const url = `/season/${seasonNumber}/episode/${episodeNumber}/page/${pageNumber}`;
      router.push(url);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <Layout>
      <ComicPage page={page} error={error} />
    </Layout>
  );
};

export default PagePage;

function updateIndicesForBrowser(obj) {
  Object.keys(obj).forEach((key) => {
    obj[key] += 1;
  });
}

export const getServerSideProps = async ({ params, res }) => {
  const {
    pageNumber: urlPageNumber,
    episodeNumber: urlEpisodeNumber,
    seasonNumber: urlSeasonNumber,
  } = params;
  const currentPageNumber = Number(urlPageNumber) - 1;
  const currentEpisodeNumber = Number(urlEpisodeNumber) - 1;
  const currentSeasonNumber = Number(urlSeasonNumber) - 1;

  const currentSeason = comics?.[currentSeasonNumber];
  const currentEpisode = currentSeason?.episodes?.[currentEpisodeNumber];
  const currentPage = currentEpisode?.pages?.[currentPageNumber];

  const previous = {
    seasonNumber: currentSeasonNumber,
    episodeNumber: currentEpisodeNumber,
    pageNumber: currentPageNumber,
  };
  const next = {
    seasonNumber: currentSeasonNumber,
    episodeNumber: currentEpisodeNumber,
    pageNumber: currentPageNumber,
  };

  if (currentPageNumber < currentEpisode.pages.length - 1) {
    next.pageNumber = currentPageNumber + 1;
  } else if (currentEpisodeNumber < currentSeason.episodes.length - 1) {
    next.episodeNumber = currentEpisodeNumber + 1;
    next.pageNumber = 0;
  } else if (currentSeasonNumber + 1 < comics.length) {
    next.seasonNumber = currentSeasonNumber + 1;
    next.episodeNumber = 0;
    next.pageNumber = 0;
  } else if (currentSeasonNumber + 1 === comics.length) {
    next.seasonNumber = currentSeasonNumber;
    next.episodeNumber = currentEpisodeNumber;
    next.pageNumber = currentPageNumber;
  }

  if (currentPageNumber > 0) {
    previous.pageNumber = currentPageNumber - 1;
  } else if (currentEpisodeNumber > 0) {
    const previousEpisodeNumber = currentEpisodeNumber - 1;
    const previousEpisode = currentSeason.episodes[previousEpisodeNumber];
    previous.episodeNumber = previousEpisodeNumber;
    previous.pageNumber = previousEpisode.pages.length - 1;
  } else if (currentSeasonNumber > 0) {
    const previousSeasonNumber = currentSeasonNumber - 1;
    const previousSeason = comics[previousSeasonNumber];
    const previousEpisodeNumber = previousSeason.episodes.length - 1;
    const previousEpisode = previousSeason.episodes[previousEpisodeNumber];
    previous.seasonNumber = previousSeasonNumber;
    previous.episodeNumber = previousEpisodeNumber;
    previous.pageNumber = previousEpisode.pages.length - 1;
  }
  updateIndicesForBrowser(previous);
  updateIndicesForBrowser(next);
  let error = "";
  //This doesn't ever show up
  if (!currentPage) {
    error = `can't find season ${currentSeasonNumber} episode ${currentEpisodeNumber} page ${currentPageNumber}`;
  } else {
    if (typeof currentPage.blogPost !== "string") {
      delete currentPage.blogPost;
    }
  }
  return {
    props: {
      page: currentPage
        ? {
            ...currentPage,
            pageNumber: currentPageNumber,
            episodeNumber: currentEpisodeNumber,
            seasonNumber: currentSeasonNumber,
            previous,
            next,
          }
        : null,
      error,
    },
  };
};
