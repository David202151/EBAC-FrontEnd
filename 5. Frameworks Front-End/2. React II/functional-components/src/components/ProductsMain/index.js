import Product from "./Product";
import Image from "../../assets/pikachu.png";
const ProductsMain = () =>{
    return(
    <main>
        <h2>Products</h2>
        <p>Welcome to our products page!</p>
        <Product name="Product 1" description="This is the first product." />
        <Product name="Product 2" description="This is the second product." image = {Image} />
    </main>
    ); 
}


export default ProductsMain; 