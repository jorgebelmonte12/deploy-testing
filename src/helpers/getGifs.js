export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=wPJOdvwd1FfrYGdn20yHPOmj23TSmSgV&q=${category}&limit=10`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  if (gifs.length === 0) {
    return [{
      id: "sdf",
      title: "sdfsdfsdf",
      url: "sdfsdfsdfd",
    }];
  }
  return gifs;
};
