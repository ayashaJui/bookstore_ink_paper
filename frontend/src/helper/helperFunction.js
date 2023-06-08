export const makeGenreArray = (genres) => {
  let genreArray = [];
  if (genres) {
    for (const genre of genres) {
      for (let val of genre.genres) {
        genreArray.push(val);
      }
    }
  }

  return genreArray;
};

export const makeFormatArray = (formats) => {
  let formatArray = [];
  if (formats) {
    for (const format of formats) {
      for (let val of format.format) {
        formatArray.push(val);
      }
    }
  }

  return formatArray;
};

export const makeTagArray = (tags) => {
  let tempArray = [];

  if (tags) {
    for (const tag of tags) {
      for (const val of tag.tags) {
        tempArray.push(val);
      }
    }
  }

  return tempArray;
};

export const makeCategoryArray = (categories) => {
  let tempArray = [];

  if (categories) {
    for (const category of categories) {
      for (const val of category.categories) {
        tempArray.push(val);
      }
    }
  }

  return tempArray;
};

export const countOccurances = (tempArray) => {
  const countOccurrence = {};

  for (let i = 0; i < tempArray.length; i++) {
    const current = tempArray[i];
    countOccurrence[current] = (countOccurrence[current] || 0) + 1;
  }
  // console.log(countOccurrence);
  return countOccurrence;
  // sort
};

export const sortObject = (countOccurrenceObject) => {
  const makeKeys = Object.keys(countOccurrenceObject).sort();
  const makeObj = {};
  makeKeys.forEach((key) => {
    makeObj[key] = countOccurrenceObject[key];
  });

  // console.log(makeObj);
  return makeObj;
};

export const makeObjectArray = (obj) => {
  const arr = Object.entries(obj).map(([key, value]) => ({ key, value }));
  return arr;
};

export const makeOfferPrice = (offerPercent, price) => {
  return price - price * (Number(offerPercent) / 100);
};

export const formattedDate = (dateValue) =>
  new Date(dateValue).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
