import  Router  from "next/router";


export  type ProductProps   = {
    
    id: string;
    name: string;
    image: string;
    description: string;
    price: string;
    category: string;
    
}

 const ProductList: React.FC<{products: ProductProps}> = ({ products }) => {

    return (
      <div>
        <div onClick={() => Router.push('/p/[]', `/p/${products.id}`)}></div>
        <h3>  {products.name}</h3>
             
      </div>  
    )
 }
 export default ProductList