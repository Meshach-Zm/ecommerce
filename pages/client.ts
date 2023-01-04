// Instantiate single PrismaClient

import { PrismaClient } from '@prisma/client'

let prisma = new PrismaClient({
    rejectOnNotFound: {
        findUnique: true,
      },
})

export default prisma