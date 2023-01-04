import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../client";



//POST api/product

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    
    {
        if(req.method !=='POST') {
        
            return res.status(405).json({message: "Method Not Allowed"})
        }

      const productData = JSON.parse(req.body)
      const savedProduct = await prisma.product.create({
        data: productData
      })

      res.json(savedProduct)
 } 
}