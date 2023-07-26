import prisma from "../source/db";

const year = '2023';
const month = '06';

const albertData = [
  {
    article: 'Albert Einstein',
    referral_article: 'Einstein family',
    count: 27301,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Mileva Marić',
    count: 14139,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Hans Albert Einstein',
    count: 14122,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Elsa Einstein',
    count: 12062,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Theory of relativity',
    count: 8127,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Mass-energy equivalence',
    count: 7643,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Kingdom of Württemberg',
    count: 3922,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Photoelectric effect',
    count: 2392,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Ulm',
    count: 2313,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Quantum mechanics',
    count: 2010,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'General relativity',
    count: 1921,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Nobel Prize in Physics',
    count: 1853,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Einsteinium',
    count: 1852,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Theoretical physics',
    count: 1846,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'German nuclear weapons program',
    count: 1675,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'University of Zurich',
    count: 1647,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'ETH Zurich',
    count: 1646,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Brain of Albert Einstein',
    count: 1593,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Annus mirabilis papers',
    count: 1575,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Modern physics',
    count: 1372,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Ashkenazi Jews',
    count: 1346,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Brownian motion',
    count: 1345,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Special relativity',
    count: 1339,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Alfred Kleiner',
    count: 1286,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Albert Einstein in popular culture',
    count: 1130,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'J. Robert Oppenheimer',
    count: 1060,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Statelessness',
    count: 1026,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Princeton, New Jersey',
    count: 1017,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Manhattan Project',
    count: 953,
    type: 'link',
    year: year,
    month: month
  },
  {
    article: 'Albert Einstein',
    referral_article: 'Time 100: The Most Important People of the Century',
    count: 950,
    type: 'link',
    year: year,
    month: month
  },
];

async function seedAlbert() {
  await prisma.clickstream.createMany({
    data: albertData,
  });
  console.log('Added Albert Einstein seed data');
};

seedAlbert();
