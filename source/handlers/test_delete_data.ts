import prisma from "../db";

export const testDeleteDataHandler = async (req, res, next) => {
  try {
    const testDeleteData = await prisma.clickstream.deleteMany({
      where: { count: 7894 },
    });
    res.json({ message: testDeleteData });
  } catch (e) {
    next(e);
  }  
};
