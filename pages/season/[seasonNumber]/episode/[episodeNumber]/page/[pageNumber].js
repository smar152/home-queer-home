import pagesMap from "../../../../../../data/comics";

const Page = ({ page, error }) => {
  console.log(page, error);
  return (
    <div>
      <div>
        Page
        <div dangerouslySetInnerHTML={{ __html: page.blogPost }}></div>
      </div>
    </div>
  );
};

export default Page;

export const getServerSideProps = async ({ params, res }) => {
  const { pageNumber, episodeNumber, seasonNumber } = params;
  const season = pagesMap?.[seasonNumber];
  const episode = season?.episodes?.[episodeNumber];
  const page = episode?.pages?.[pageNumber] || "";
  console.log(seasonNumber, episodeNumber, pageNumber, season, episode, page);
  let error = "";
  if (!page) {
    error = `can't find season ${seasonNumber} episode ${episodeNumber} page ${pageNumber}`;
  } else {
    if (typeof page.blogPost !== "string") {
      delete page.blogPost;
    }
  }
  return { props: { page, error } };
};
