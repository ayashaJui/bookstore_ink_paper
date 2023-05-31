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
