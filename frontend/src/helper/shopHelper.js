export const genreFunction = (genres) => {
  let genreArray = [];
  if (genres) {
    for (const genre of genres) {
      for (let val of genre.genres) {
        genreArray.push(val);
      }
    }
  }

  // get count of every genre
  const genreOccurrence = {};

  for (let i = 0; i < genreArray.length; i++) {
    const current = genreArray[i];
    genreOccurrence[current] = (genreOccurrence[current] || 0) + 1;
  }
  // console.log(genreOccurrence);
  // sort
  const genreKeys = Object.keys(genreOccurrence).sort();
  const genreObj = {};
  genreKeys.forEach((key) => {
    genreObj[key] = genreOccurrence[key];
  });

  return genreObj;
};

export const formatFunction = (formats) => {
  let formatArray = [];
  if (formats) {
    for (const format of formats) {
      for (let val of format.format) {
        formatArray.push(val);
      }
    }
  }

  const formatOccurrence = {};

  for (let i = 0; i < formatArray.length; i++) {
    const current = formatArray[i];
    formatOccurrence[current] = (formatOccurrence[current] || 0) + 1;
  }

  return formatOccurrence;
};

export const makeUrl = (genre, author, format) => {
  const searchParams = new URLSearchParams();

  // Add genre parameter
  // if (genre) {
  //   const genreValues = Array.isArray(genre) ? genre.join(',') : genre;
  //   searchParams.append('genre', genreValues);
  // }

  // Add author parameter
  if (author) {
    searchParams.append('author', author);
  }

  // Add format parameter
  if (format) {
    searchParams.append('format', format);
  }

  // Construct the final URL with search parameters
  const baseUrl = '/shop/';
  const search = searchParams.toString();
  const url = search ? `${baseUrl}?${search}` : baseUrl;

  return url;
}
