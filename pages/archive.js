import styled from "styled-components";
import Layout from "../Components/Layout/Layout";
import InnerLayout from "../Components/Layout/PageInnerLayout";
import comics from "../data/comics";
import Head from "next/head";

const StEpisodes = styled("div")`
  // background-color: #fabdad;
`;

const content = (
  <div>
    <StEpisodes>
      {comics.map((season, index) => (
        <div>
          <h2 key={index}>{season.name}</h2>
          {season.episodes.map((episode, index) => (
            <h3 key={index}>{episode.name}</h3>
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
