import styled from "styled-components";
import Layout from "../Components/Layout/Layout";
import InnerLayout from "../Components/Layout/PageInnerLayout";
import comics from "../data/comics";
import Head from "next/head";
import Link from "next/link";

const StEpisodes = styled("div")`
  // background-color: #fabdad;
`;

const StLink = styled(Link)`
  color: orange;
  text-decoration: none;
`;

const content = (
  <div>
    <StEpisodes>
      {comics.map((season, seasonIndex) => (
        <div>
          <h2 key={seasonIndex}>{season.name}</h2>
          <p>{season.description}</p>
          {season.episodes.map((episode, episodeIndex) => (
            <div key={episodeIndex}>
              <StLink
                href={`/season/${seasonIndex + 1}/episode/${
                  episodeIndex + 1
                }/page/${1}`}
              >
                <h3>{episode.name}</h3>
              </StLink>
              {/*<p>Description</p>*/}
            </div>
          ))}
        </div>
      ))}
    </StEpisodes>
  </div>
);

const ArchivePage = () => {
  {
    console.log(content);
  }
  return (
    <Layout>
      <Head>
        <title>Home Queer Home: Archive</title>
      </Head>
      <InnerLayout title="Archive" three={content} />
    </Layout>
  );
};

export default ArchivePage;
