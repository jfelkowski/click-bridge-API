import prisma from "../db";

// GET /api/search

export const getSearchResults = async (req, res, next) => {
  
  try { 
    await res.json({message: 'SUCCESS!!!'});
  } catch (e) {
    e.type = 'input';
    next(e);
  }
};
