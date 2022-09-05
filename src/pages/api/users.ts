import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const users = async (req: NextApiRequest, res: NextApiResponse) => {
    const users = await prisma.users.findFirst();
    res.status(200).json(users);
  };
  
  export default users;
  