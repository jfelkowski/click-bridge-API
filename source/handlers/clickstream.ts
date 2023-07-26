import prisma from "../db";

// GET /api/search/:article

export const getSearchResults = async (req, res, next) => {
  try { 
    const searchResults = await prisma.clickstream.findMany({
      where: { article: 'Albert Einstein' },
      select: {
        article: true,
        referral_article: true,
        count: true,
        type: true,
      },
      // orderBy ? { count: desc }
    });

    res.json({ message: searchResults });
  } catch (e) {
    e.type = 'input';
    next(e);
  }
};
