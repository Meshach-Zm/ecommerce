
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import makeSerializable  from '../components/utils'
import styles from '../styles/Home.module.css'
import prisma from '../components/client'
import Products from './productList'

// Get Data from database
export const getServerSideProps = async () => {

  prisma.$connect()
  const productData: any = await prisma.product.findMany()

  const allproducts = makeSerializable(productData)
 console.log("Data has been successfully fetched!")
 prisma.$disconnect()

  return {
    props: {allproducts}

  }

  
}

const Home  = ({allproducts}) => {
  

  return (
   
   <div className={styles.container}>
     <Head>
      <title>eMukuba Delivery</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <p className={styles.nav}>
          <Link href="/specificrequest" className={styles.nav}> specify request</Link>
        </p>

        <div className={styles.grid}>
          {
             allproducts && allproducts? allproducts: allproducts.map((item: any) => {
           return( 
                  <div className={styles.card} key={item.id}>
                  <Products productData={item}    />
                  </div>
              )})
          }

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>

     </div>
    
   )
}

export default Home
