import Head from "next/head";
import comics, { getLastComicPageNumbers } from "../data/comics";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getMetaTags } from "../util";

export default function Home({ data, redirectUrl }) {
  const { push } = useRouter();
  const imageUrl = data?.images?.[0]?.url;
  useEffect(() => {
    push(redirectUrl);
  }, []);
  return (
    <Head>
      <title></title>
      <link rel="icon" href="/favicon.ico" />
      {getMetaTags({
        title: "Home Queer Home",
        description: "A webcomic by Smar",
        imageUrl,
      })}
    </Head>
  );
}

export function getStaticProps() {
  const { lastComicSeasonNumber, lastComicEpisodeNumber, lastComicPageNumber } =
    getLastComicPageNumbers();
  const redirectUrl = `/season/${lastComicSeasonNumber + 1}/episode/${
    lastComicEpisodeNumber + 1
  }/page/${lastComicPageNumber + 1}`;

  return {
    props: {
      redirectUrl,
      data: comics?.[lastComicSeasonNumber]?.episodes?.[lastComicEpisodeNumber]
        ?.pages?.[lastComicPageNumber],
    },
  };
}
