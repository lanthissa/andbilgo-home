import { prisma } from "../db/client";
import { createRouter } from "./context";

export const userRouter = createRouter()
    .query('first', {
        async resolve() {
            return prisma.users.findFirst()
        }
    })