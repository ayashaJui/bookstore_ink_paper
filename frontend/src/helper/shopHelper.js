export const genreFunction = (genres) => {
  let genreArray = [];
  for (let genre of genres) {
    for (let val of genre.genres) {
      genreArray.push(val);
    }
  }

  // get count of every genre
  const genreOccurrence = {};
  for (let i = 0; i < genreArray.length; i++) {
    const current = genreArray[i];
    genreOccurrence[current] = (genreOccurrence[current] || 0) + 1;
  }

  // sort
  const genreKeys = Object.keys(genreOccurrence).sort();
  const genreObj = {};
  genreKeys.forEach((key) => {
    genreObj[key] = genreOccurrence[key];
  });

  return genreObj;
};
