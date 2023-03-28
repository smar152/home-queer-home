import { getLastComicPageNumbers } from "../data/comics";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home({ redirectUrl }) {
  const { push } = useRouter();
  useEffect(() => {
    push(redirectUrl);
  }, []);
  return null;
}

export function getStaticProps() {
  const lastComicPage = getLastComicPageNumbers();
  const redirectUrl = `/season/${
    lastComicPage.lastComicSeasonNumber + 1
  }/episode/${lastComicPage.lastComicEpisodeNumber + 1}/page/${
    lastComicPage.lastComicPageNumber + 1
  }`;

  return {
    props: {
      redirectUrl,
    },
  };
}
