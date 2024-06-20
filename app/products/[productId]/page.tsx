// import React from 'react'
// import {products} from '@/utils/constants'
// import Link from 'next/link'
// function Products() {
//   return (
//     <div>
//          {products.map((product) => (
//             <Link href={`/products/${product.id}`} key={product.id} >
//                 <div  className='border m-2'>
//                <h1 className='font-bold text-3xl'>{product.name}</h1>
//                <h2>{product.price}</h2>
//             </div>
  
            
//          ))}</div>
//   )
// }

// export default Products


// "use client"
// import {useParams} from 'next/navigation'
// interface paramsType {params:{productId:string}}

import React from 'react'
import { products } from '@/utils/constants'

type paramsType={params:{productId:string}}



function ProductId({params}:paramsType) {
    // const {productId}=useParams();
    // console.log(params.productId);
    console.log(params);
    const id:number = parseInt(params.productId)
    let product=products[id]
  return (
    <div>
      {/* ProductId {params.productId} */}
      <h1>Product {product.name}</h1>
      <h2> Price {product.price}</h2>
      
      </div>
  )
}

export default ProductId