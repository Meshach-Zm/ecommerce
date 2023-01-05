import styles from '../styles/Home.module.css'
import Image from 'next/image'



const Products = ({productData}) => {
    

  return (
    <>
     <div key={productData.id}>  
              <Image src={productData?.image} width={250} height={300} alt="product Data" />
              <h3>{productData.name}</h3>
              <p>{productData.description}</p>
              <h4 >Prices</h4> <hr className={styles.hr}/>
              <div className={styles.prices}>
                <p>K{productData.prices.shoprite} Shoprite</p>
                <p>K{productData.prices.game} Game</p>
                <p>K{productData.prices.picknpay} PickNPay</p> 
                <p>K{productData.prices.vml} VML</p>
              </div>
          </div>
          <button type="submit" onSubmit={contactData} className="">Buy</button>
     </>
  )
 }

 export const contactData = () => {
  return "contact details"
 }

export default Products
