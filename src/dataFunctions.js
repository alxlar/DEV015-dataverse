export function filterDataYear(data, filterValue) {
  if (filterValue === 'all') return data;

  const filteredData = data.reduce((accumulator, currentItem) => {
    const year = currentItem.facts.year;

    if (
      (filterValue === '2005-2010' && year >= 2005 && year <= 2010) ||
      (filterValue === '2010-2015' && year > 2010 && year <= 2015) ||
      (filterValue === '2015-2020' && year > 2015 && year <= 2020) ||
      (filterValue === '2020-2023' && year > 2020 && year <= 2023)
    ) {
      accumulator.push(currentItem);
    }

    return accumulator;
  }, []); 
  return filteredData;
}


export function filterDataRating(data, filterValue) {
  if (filterValue === 'all') return data;

  return data.filter(item => {
    const ratingStr = item.facts.rating.split('/')[0];
    const rating = parseFloat(ratingStr);

    if (filterValue === '1-4') return rating >= 1 && rating <= 4;
    if (filterValue === '4-7') return rating > 4 && rating <= 7;
    if (filterValue === '7-10') return rating > 7 && rating <= 10;

  });

}

export function sortData(data, sortValue) {
  // Clonar el array para evitar mutaciones inesperadas
  const clonedData = data.map(item => ({ ...item }));

  if (sortValue === 'asc') {
    return clonedData.sort((a, b) => a.facts.year - b.facts.year);
  } else if (sortValue === 'desc') {
    return clonedData.sort((a, b) => b.facts.year - a.facts.year);
  }

  return clonedData;
}

