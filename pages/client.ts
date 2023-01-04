// Instantiate single PrismaClient

import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
    rejectOnNotFound: {
        findUnique: true,
      },
})

export default const successExport = () => {
return null
}
