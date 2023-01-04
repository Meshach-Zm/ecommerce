import styles from '../styles/Home.module.css'


const Products = ({productData}) => {
    

  return (
    <>
     <div>  
           <img src={productData && productData.image? productData.image: productData.image} alt="product Data" />
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
