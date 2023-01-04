
// import { useEffect, useState } from 'react'
// import { prisma } from './prisma'


// const [data, setData] = useState([])

// useEffect(() => {
  

//   async function main() {
//     // Connect the client
//     await prisma.$connect()
//     const allproducts: any = await prisma.product.findMany()
//     console.log(allproducts)
//     setData(allproducts)
//   }
  
//   main()
//     .then(async () => {
//       await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//       console.error(e)
//       await prisma.$disconnect()
//       process.exit(1)
//     })

// }, [])