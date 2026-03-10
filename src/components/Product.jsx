import { useLocation } from "react-router";

const Product = () => {
    const {state}=useLocation()

    return ( 
        <div>
            <div className="w-80 p-5">
                <img src={state?.product?.image} />
            </div>
            <div>
                <span className="p-5 bg-amber-500">{state?.product.price}</span>
                <p className="w-2xl ">{state?.product.description}</p>
            </div>
        </div>
     );
}
 
export default Product;