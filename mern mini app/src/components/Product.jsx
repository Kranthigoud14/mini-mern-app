function Product(props){
//{props: {productObj:{}}   
const {productObj}=props; 
 //state
    //return react element
    return(
        <div className="shadow-2xl  p-10 gap-6 border-2 rounded-3xl  border-amber-100 bg-amber-100">
            <h2 className="text-2xl text-amber-500  p-6 ">{productObj.title}</h2>
            <p className="font-bold">{productObj.price}</p>
            <p className="font-mono">{productObj.description}</p>
        </div>
    )
}
export default Product;