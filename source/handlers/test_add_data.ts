import prisma from "../db";

export const testAddDataHandler = async (req, res, next) => {
  try {
    const testAddData = await prisma.clickstream.create({
      data: {
        article: 'Albert Einstein',
        referral_article: 'Theory of Relativity',
        count: 7894,
        type: 'link',
        year: '2023',
        month: '03',
     },
    });
    res.json({data: testAddData});
  } catch (e) {
    next(e);
  }  
};