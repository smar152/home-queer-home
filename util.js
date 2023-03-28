export function getMetaTags({
  title,
  description,
  imageUrl,
  url = "https://homequeerhome.com/",
}) {
  return (
    <>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://homequeerhome.com${imageUrl}`}
      />
    </>
  );
}
