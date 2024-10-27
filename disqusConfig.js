const disqusConfig = (comic) => ({
  shortname: "homequeerhome",
  config: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/season/${comic.season}/episode/${comic.episode}/page/${comic.page}`,
    identifier: comic.id,
    title: comic.title,
  },
});

export default disqusConfig;
