import type { NextApiRequest, NextApiResponse } from "next";

import prisma from '../../client'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const productId = req.query.id
     
    if(req.method === 'DELETE') {
        handleDELETE(req, res)
    } 
    else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}

//  Delete /api/product/:id
 async function handleDELETE(req: NextApiRequest, res: NextApiResponse){
  const product = await prisma.product.delete({
    where: {id: String(req)}
  })
  res.json(product)
 }
