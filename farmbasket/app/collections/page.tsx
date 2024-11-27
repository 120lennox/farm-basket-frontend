"use client"
import React, { useEffect, useState } from "react";
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

async function fetchProducts(): Promise<Product[]> {
    try {
         const result = await fetch('https://farm-basket3.onrender.com/products')
         const data: Product[] = await result.json()

         return data;
    }catch (error) {
        throw new Error(`Failed to fetch products: ${error}`)
    }
}

async function fetchProductsByCategory(type:string): Promise<Product[]> {
    try {
        const result = await fetch(`https://farm-basket3.onrender.com/products/search?type=${type}`)
        const data: Product[] = await result.json()

        return data
    }catch (error) {
        throw new Error("Failed to fetch products")
    }
}

async function fetchProductsByName(name: string): Promise<Product[]> {
    try {
        const result = await fetch (`https://farm-basket3.onrender.com/products/name?name=${name}`)
        const data : Product[] = await result.json()

        return data
    }catch (error) {
        throw new Error("Failed to fetch products")
    }
}

export default function collections(){
    const [type,setType] = useState('')
    const [products, setProducts] = useState<Product[]>([])
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchName,setSearchName] = useState('')

    const categories = ['Fruits','Pestcides','Vegetables','Seed,Grains & Nuts','Flour,Pasta and Rice','Cereals','FARM MACHINERY']

    useEffect(() => {
        const fetchData = async () => {
            try{
            const result = await fetchProducts()
            setProducts(result)
        }catch (error) {
            setError(`Error fetching products: ${error}`)
        }finally{
            setLoading(false)
        }
    }
        fetchData()
    }, [])

    const handleCategoryClick = async (category: string) => {
        setLoading(true)
        try {
            const result = await fetchProductsByCategory(category)
            setProducts(result)
        }catch (error) {
            setError(`Error fetching category products: ${error}`)
        }finally {
            setLoading(false)
        }
    }

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            const result = await fetchProductsByCategory(searchTerm)
            if (result.length === 0) {
                setError('No products Found')
            }else{
                setProducts(result)
            }
        }catch (error) {
            setError(`Erro fetching category products: ${error}`)
        }finally {
            setLoading(false)
        }
    }

    const handleSearchName = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            const result = await fetchProductsByName(searchName)
            if ( result.length===0){
                setError('No products found')
            }else{
                setProducts(result)
            }
        }catch (error) {
            setError(`Error fetching products: ${error}`)
        }finally { 
            setLoading(false)
        }
    }

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
          <form onSubmit={handleSearch}>
             <input type="text" placeholder="Search category..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-56 text-white h-8 rounded-xl"/> 
             </form> 
             {categories.map((category) => ( 
                <div key={category} className="flex flex-col gap-y-4"> <ul> 
                    <li className="p-4"> 
                        <button onClick={() => handleCategoryClick(category)}>{category}</button> 
                        </li> 
                    </ul> 
                </div> 
            ))} </div>
            <div className="flex-1 p-4 w-10/12 ml h-full inline-block float-right sticky top-4 ">
                <form onSubmit={handleSearchName} className="float-right -mt-8 text-white">
                    <input type="text" placeholder="search product..." value={searchName} onChange={(e) => setSearchName(e.target.value)} className="w-64 ext-wite h-8 rounded-xl"/>
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