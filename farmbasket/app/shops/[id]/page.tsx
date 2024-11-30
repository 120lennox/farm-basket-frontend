"use client"
import { PageProps } from "@/.next/types/app/page";
import { fetchShopid } from "@/app/lib/data";
import { fetchShopProducts } from "@/app/lib/data";
import { Product } from "@/app/collections/page";
import { FaCartPlus, FaStar } from "react-icons/fa6";
import { useState } from "react";

// Define the Shop interface to match the structure of your API response
export interface Shop {
    shopid: string;
    name: string;
    description: string;
    // Add any other properties that might exist in your shop object
  }

const shopStore = async({params}: PageProps)=>{
    const [error,setError] = useState('')
    const {id} = await params
    const shopid = await fetchShopid(id);
    const shopProduct = await fetchShopProducts(id)
    console.log(shopProduct)

    const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>,productId : number) =>{
        e.preventDefault();
        try {
            const response = await fetch("https://farm-basket3.onrender.com/cart/add", {
                method: "POST",
                headers: {"Content-Type": "apllication/json" },
                body: JSON.stringify({productId})
            })
            const data = await response.json()

            if (!response.ok) {
                setError(`Error adding product to cart: ${data.message} || unknown error`)
            }
        }catch (error) {
            setError(`Unable to add product to cart: ${error}`)
        }

    }
    
    return(
        <div>
            <div>
                <div key={shopid.shopid}>
                    <div className="mt-10 flex flex-wrap justify-center">
                        <div style={{backgroundImage:`url(${shopid.image})`,backgroundSize:'cover',backgroundPosition:'center',
                            height: '200px',
                            width : '100%'
                        }} className="flex flex-col justify-center items-center" >
                            <h1 className="text-2xl t">{shopid.name}</h1>
                            <h2 className="text-xl mt-4">{shopid.description}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="flex flex-wrap gap-16 mt-20 ">
                {shopProduct.map((product: Product)=> (
                <div key={product.productid} className="flex flex-wrap ">
                        <button className='h-86 hover:shadow-xl hover:shadow-black bg-white ml-16'>
                            <div className='flex flex-col relative w-64 h-80'>
                                <img src={product.image} alt={product.name} className='-mt-1 w-64 flex h-64'/>
                                <div className='flex flex-col mt-2'>
                                    <p className='text-sm first-letter:uppercase lowercase bg-gray-200 w-full'>{product.name}</p>
                                </div>
                                <div className='flex '>
                                    <p>{product.price}</p>
                                </div>
                                <div  className='flex gap-x-1'>
                                    <p><FaStar className="text-yellow-400"/></p>
                                </div>
                            </div>
                        </button>
                        <button  onClick={(e) => handleAddToCart(e,product.productid)} className='  border-2 p-2 mt-72 -ml-10 border-black rounded-3xl'>
                            <p className='flex w-4  h-4'><FaCartPlus/></p>
                        </button>
                 </div>
                ))}
               
            </div>
        </div>
    ) 

              
}

export default shopStore;