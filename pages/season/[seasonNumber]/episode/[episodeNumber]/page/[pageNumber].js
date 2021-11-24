import ComicPage from "../../../../../../Components/ComicPage";
import Layout from "../../../../../../Components/Layout";
import pagesMap from "../../../../../../data/comics";

const PagePage = ({ page, error }) => {
  return (
    <Layout>
      <ComicPage page={page} error={error} />
    </Layout>
  );
};

export default PagePage;

export const getServerSideProps = async ({ params, res }) => {
  const { pageNumber, episodeNumber, seasonNumber } = params;
  const season = pagesMap?.[seasonNumber - 1];
  const episode = season?.episodes?.[episodeNumber - 1];
  const page = episode?.pages?.[pageNumber - 1];

  const nextPageNumber = Number(pageNumber) + 1;

  const previous = { pageNumber, episodeNumber, seasonNumber };
  const next = { pageNumber: nextPageNumber, episodeNumber, seasonNumber };
  console.log(seasonNumber, episodeNumber, pageNumber, season, episode, page);
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
