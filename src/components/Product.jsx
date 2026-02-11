const Product = () => {

    const products = [
        {
        code: '0001',
        name: 'Pineapple',
        price: 12,
        image: '/pineapple.jpg'
        },
        {
        code: '0002',
        name: 'Pear',
        price: 10,
        image: '/pear.jpg'
        }
        ,
        {        
        code: '0003',
        name: 'Strawberry',
        price: 16,
        image: '/strawberry.jpg'
        }


]

    return products.map((product) => (
         <div className="card" key={product.code}>
            <img src={product.image} alt={`picture of a ${product.name.toLowerCase()}`} height={120} width={120}/>
            <span>{product.code}</span>
            <span>{product.name}</span>
            <span>${product.price}</span>
        </div>
       ));
    
}

export default Product;