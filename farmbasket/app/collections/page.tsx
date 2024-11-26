"use client"
import { useEffect, useState } from "react";
import { fetchProduct } from "../lib/data";
import { FaCartPlus, FaStar } from "react-icons/fa6";

export interface Product {
    productid : number
    userid : number
    name : string
    description : string
    quantity : number
    price : number
    type : string
    image : string
    shop : number
}

export default function collections(){
    const [type,setType] = useState('')
    const [products, setProducts] = useState<Product[]>([])
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            try{
            const result = await fetchProduct()
            setProducts(result)
        }catch (error) {
            setError(`Error fetching products: ${error}`)
        }finally{
            setLoading(false)
        }
    }
        fetchData()
    }, [])

     const category = type === ''? products : products.filter((product:Product)=> product.type === type)

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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="btn btn-outline btn-primary loading">Loading...</div>
            </div>
        );
    }
    

    return (
        <div className="conatiner my-auto w-12/12 mt-20  clear-both table">
            <div className="flex-1 p-4 border-r border-gray-400 w-2/12 inline-block top-0 float-left">
            <form>
                <input placeholder="search category..." />
            </form>
            {products.map((item : Product)=> (
                <div key={item.productid} className="flex flex-col gap-y-4">
                <ul>
                    <li className="p-4">
                        <button onClick={()=>setType(item.type)}>{item.type}</button>
                    </li>
                </ul>
            </div>
            ))}                
            </div>
            <div className="flex-1 p-4 w-10/12 ml h-full inline-block float-right sticky top-0 ">
                <form className="ml-96 ">
                    <input placeholder="search product..." />
                </form>
                <div className="flex flex-wrap gap-16 ">
                    {category.map((product : Product)=>
                    <div key={product.productid}>
                        <button className='h-86 hover:shadow-xl hover:shadow-black bg-white '>
                            <div className='flex flex-col relative w-64 h-80 '>
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
                        <button onClick={(e) => handleAddToCart(e,product.productid)} className=' absolute border-2 p-2 mt-72 -ml-10 border-black rounded-3xl'>
                            <p className='flex w-4   h-4'><FaCartPlus/></p>
                        </button>
                    </div>
                        )}
                </div>
            </div>
        </div>
    )
}