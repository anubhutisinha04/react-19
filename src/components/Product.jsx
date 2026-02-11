const Product = ({ product }) => {


    return (
         <div className="card">
            <img src={product.image} alt={`picture of a ${product.name.toLowerCase()}`} height={120} width={120}/>
            <span>{product.code}</span>
            <span>{product.name}</span>
            <span>${product.price}</span>
        </div>
       );
    
}

export default Product;