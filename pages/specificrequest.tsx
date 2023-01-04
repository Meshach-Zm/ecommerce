import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'



const Request = () => {
  return (
   <>
   <Header />
   <div className={styles.requestcontainer}>
   <p className={styles.request}><Link href="/" className={styles.nav}><span>Home</span></Link> </p> 
    <p>Request for specific product not listed</p>
    <form action="" method="get">
     <input type="textarea" onSubmit={typeCheck} />
     <button>submit</button>
    </form>
   </div>
   </>
  )
}
export const typeCheck = () => {
  return "typeCheck here"
}

const requestedData = () => {
  return 
}

export default Request