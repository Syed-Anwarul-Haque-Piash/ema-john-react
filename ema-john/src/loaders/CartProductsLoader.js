import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader=async()=>{
    const loadedProducts=await fetch('products.json')
    const products=await loadedProducts.json();

    const storedCart=getShoppingCart();
    const savedCart=[];
    console.log(storedCart)
    for(const id in storedCart){
        const addedProduct=products.find(pd=>pd.id===id);
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct);
        }
    }
    console.log(products);
    return savedCart;
}
export default CartProductsLoader;