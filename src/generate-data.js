import { faker } from '@faker-js/faker';

const ageCertifications = [
  'G',
  'PG',
  'PG-13',
  'R',
  'NC-17',
  'U',
  'U/A',
  'A',
  'S',
  'AL',
  '6',
  '9',
  '12',
  '12A',
  '15',
  '18',
  '18R',
  'R18',
  'R21',
  'M',
  'MA15+',
  'R16',
  'R18+',
  'X18',
  'T',
  'E',
  'E10+',
  'EC',
  'C',
  'CA',
  'GP',
  'M/PG',
  'TV-Y',
  'TV-Y7',
  'TV-G',
  'TV-PG',
  'TV-14',
  'TV-MA',
];
const roles = [
  'Director',
  'Producer',
  'Screenwriter',
  'Actor',
  'Actress',
  'Cinematographer',
  'Film Editor',
  'Production Designer',
  'Costume Designer',
  'Music Composer',
];
const genres = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller', 'Western'];
const countries = ['USA', 'GBR', 'FRA', 'IND', 'JPN', 'AUS'];

const generateData = () => {
  const titles = [];
  const credits = [];

  for (let i = 1; i <= 100; i++) {
    const isMovie = Math.random() < 0.5;
    const title = {
      id: i,
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      release_year: 1900 + faker.number.int(120),
      age_certification: ageCertifications[Math.floor(Math.random() * ageCertifications.length)],
      runtime: 80 + faker.number.int(100),
      genres: Array.from({ length: 3 }, () => genres[Math.floor(Math.random() * genres.length)]).join(', '),
      production_country: faker.helpers.arrayElement(countries),
      seasons: isMovie ? '' : faker.number.int(10) + 1,
    };

    titles.push(title);

    for (let j = 1; j <= 10; j++) {
      credits.push({
        id: (i - 1) * 10 + j,
        title_id: i,
        real_name: faker.person.fullName(),
        character_name: faker.person.fullName(),
        role: faker.helpers.arrayElement(roles),
      });
    }
  }

  return { titles, credits };
};

export { generateData };
