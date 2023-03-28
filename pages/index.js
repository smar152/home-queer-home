import Head from "next/head";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import styled from "styled-components";
import { getLastComicPageNumbers } from "../data/comics";

const ComingSoonContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoColumn = styled("div")`
  display: flex;
  flex-direction: column;
  height: 70vh;
  img {
    height: 100%;
  }
`;

const CopyColumn = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  justify-content: flex-start;
  background-color: #ffc852;
`;

const Credits = styled("p")`
  font-weight: 400;
  font-size: 3rem;
  margin-bottom: 0;
`;

const ComingSoon = styled("p")`
  font-weight: 600;
  font-size: 4rem;
  margin-top: 0;
  margin-bottom: 80px;
  color: white;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Queer Home - A webcomic by Smar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ComingSoonContainer>
        <LogoColumn>
          <img src="/img/logo/HQHlogo.svg" alt="Home Queer Home - logo" />
        </LogoColumn>
        <CopyColumn>
          <Credits>
            a webcomic by&nbsp;
            <a href="http://www.smarmakescomics.com" target="blank">
              smar
            </a>
          </Credits>
          <ComingSoon>coming soon</ComingSoon>
        </CopyColumn>
      </ComingSoonContainer>
    </div>
  );
}

export function getStaticProps() {
  const lastComicPage = getLastComicPageNumbers();
  const url = `/season/${lastComicPage.lastComicSeasonNumber + 1}/episode/${
    lastComicPage.lastComicEpisodeNumber + 1
  }/page/${lastComicPage.lastComicPageNumber + 1}`;

  return {
    redirect: {
      destination: url,
      permanent: true,
    },
  };
}
