import { PageProps } from "@/.next/types/app/page";
import { fetchShopid } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { fetchShopProducts } from "@/app/lib/data";

// Define the Shop interface to match the structure of your API response
export interface Shop {
    shopid: string;
    name: string;
    description: string;
    // Add any other properties that might exist in your shop object
  }

const shopStore = async({params}: PageProps)=>{
    const {id} = await params
    const shopid = await fetchShopid(id);
    const shopProduct = await fetchShopProducts(id)
    console.log(shopProduct)
    return <div>
        <div className="mx-8">
            {shopProduct.map((shop)=> (

<div key={shopid.shopid}>
<div className="mt-20 flex flex-col ">
    <div className="bg-yellow-50 w-full rounded-xl shadow-md p-8 flex flex-col gap-y-2">
        <div className="text-[36px] font-extrabold text-green-700">{shop.shop.name}</div>
        <div className="text-[24px] font-semibold">
            {shop.shop.description}
        </div>
        <div className="text-[20px] font-extralight">
            40% off discount
        </div>
    </div>

    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>

    <div className="mt-10">
        <h1 className="text-[36px] font-medium">Products for you</h1>
    </div>

    <div className="bg-gradient-to-r from-green-500 to-green-100">
        <hr  />
    </div>

    <button className='h-86 hover:shadow-xl hover:shadow-black bg-white '>
                            <div className='flex flex-col relative w-64 h-80 '>
                                <img src={shop.image} alt={shop.name} className='-mt-1 w-64 flex h-64'/>
                                <div className='flex flex-col mt-2'>
                                    <p className='text-sm first-letter:uppercase lowercase bg-gray-200 w-full'>{shop.name}</p>
                                </div>
                                <div className='flex '>
                                    <p>{shop.price}</p>
                                </div>
                                <div  className='flex gap-x-1'>
                                    <p></p>
                                </div>
                            </div>
                        </button>

    <div className="mt-10">

    </div>
</div>

</div>
            ))}
        </div>
    </div>
}

export default shopStore;