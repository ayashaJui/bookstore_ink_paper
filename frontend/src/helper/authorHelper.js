export const formattedDate = (dateValue) => new Date(dateValue).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })