import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const productData: any = [
    {
        name:"Zamgold cooking oil",
        image:"/images/Ekhaya-Zamgold-cooking-oil.png",
        description: "5L",
        prices:  {
             shoprite:"95", picknpay:"87", game:"92",vml:"95"
        },
        
        category: "gloceries"
    },
    {
        name:"Chicken eggs",
        image:"/images/egg-tray.png",
        description: "Tray. 30 eggs",
        category: "gloceries",
        prices: {
            shoprite:"95", picknpay:"87", game:"92",vml:"95"
       },
        
    },
    {
        name:"Dlite rice",
        image:"/images/deliterice.webp",
        description: "white rice. 2kg",
        category: "gloceries",
        prices:  {
            shoprite:"95", picknpay:"87", game:"92",vml:"95"
       },
    },
    {
        name:"Buya Bamba potatoes",
        image:"/images/buyabambapotato.jpg",
        description: "Fresh. 10kg",
        category: "gloceries",
        prices:  {
            shoprite:"95", picknpay:"87", game:"92",vml:"95"
       },
        
    },
    {
        name:"white spoon suger",
        image:"/images/whitespoon-sugar.jpg",
        description: "2kg",
        category: "gloceries",

        prices: {
            shoprite:"95", picknpay:"87", game:"92",vml:"95"
           }
       
    },
    {
        name:"Mother's Pride Mealie meal",
        image:"/images/Mothers_Pride_Super_Breakfast_25kg_Net__fwdyag.webp",
        description: "10kg",
        category: "gloceries",
        prices:  {
            shoprite:"95", picknpay:"87", game:"92",vml:"95"
           }  
    }

]

async function main() {

    console.log(`Start Seeding...`)

    for (const p of productData) {
            
            await prisma.product.create({
            data:p,
        })
        console.log(`Created product with id: ${p.id}`)
    }
    console.log(`Seeding Finished.`)
}

main()
.catch( e => {
    console.log(e)
    process.exit(1)
})
.finally(() => {
prisma.$disconnect()
})