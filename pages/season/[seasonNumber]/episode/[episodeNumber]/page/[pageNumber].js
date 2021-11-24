import ComicPage from "../../../../../../Components/ComicPage";
import Layout from "../../../../../../Components/Layout";
import seasons from "../../../../../../data/comics";

const PagePage = ({ page, error }) => {
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
  const pageNumber = Number(urlPageNumber) - 1;
  const episodeNumber = Number(urlEpisodeNumber) - 1;
  const seasonNumber = Number(urlSeasonNumber) - 1;

  const season = seasons?.[seasonNumber];
  const episode = season?.episodes?.[episodeNumber];
  const page = episode?.pages?.[pageNumber];

  const previous = {
    seasonNumber,
    episodeNumber,
    pageNumber,
  };
  const next = {
    seasonNumber,
    episodeNumber,
    pageNumber,
  };

  if (pageNumber < episode.pages.length - 1) {
    next.pageNumber = pageNumber + 1;
  } else if (episodeNumber < season.episodes.length - 1) {
    next.episodeNumber = episodeNumber + 1;
    next.pageNumber = 0;
  } else if (seasonNumber < seasons.length) {
    next.seasonNumber = seasonNumber + 1;
    next.episodeNumber = 0;
    next.pageNumber = 0;
  }

  if (pageNumber > 0) {
    previous.pageNumber = pageNumber - 1;
  } else if (episodeNumber > 0) {
    const previousEpisodeNumber = episodeNumber - 1;
    const previousEpisode = season.episodes[previousEpisodeNumber];
    previous.episodeNumber = previousEpisodeNumber;
    previous.pageNumber = previousEpisode.pages.length - 1;
  } else if (seasonNumber > 0) {
    const previousSeasonNumber = seasonNumber - 1;
    const previousSeason = seasons[previousSeasonNumber];
    const previousEpisodeNumber = previousSeason.episodes.length - 1;
    const previousEpisode = previousSeason.episodes[previousEpisodeNumber];
    previous.seasonNumber = previousSeasonNumber;
    previous.episodeNumber = previousEpisodeNumber;
    previous.pageNumber = previousEpisode.pages.length - 1;
  }
  updateIndicesForBrowser(previous);
  updateIndicesForBrowser(next);
  let error = "";
  if (!page) {
    error = `can't find season ${seasonNumber} episode ${episodeNumber} page ${pageNumber}`;
  } else {
    if (typeof page.blogPost !== "string") {
      delete page.blogPost;
    }
  }
  return {
    props: {
      page: page
        ? { ...page, pageNumber, episodeNumber, seasonNumber, previous, next }
        : null,
      error,
    },
  };
};
