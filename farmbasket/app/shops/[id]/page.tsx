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
    return <div>
        <div className="mx-8">
                <div key={shopid.shopid}>
                    <div className="mt-20 flex flex-col ">
                        <div className="bg-yellow-50 w-full rounded-xl shadow-md p-8 flex flex-col gap-y-2">
                            <div className="text-[36px] font-extrabold text-green-700">{shopid.name}</div>
                            <div className="text-[24px] font-semibold">
                                {shopid.description}
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

                        <div className="mt-10 mb-10">
                            <div>
                                <div className="rounded-sm">
                                    <Image className="rounded-2xl"
                                           src={shopProduct.image}
                                           alt="Fertilizer bag"
                                           width={400}
                                           height={500} 
                                    />
                                </div>
                                <div className="absolute -bottom-[55%] left-[3rem]">

                                    <div className="bg-neutral-50 rounded-3xl p-5 flex flex-col space-y-1">
                                        <div className="flex flex-row justify-between">
                                            <div className="text-[18px] font-semibold">
                                                {shopProduct.name}
                                            </div>
                                            <div className="text-[18px] font-semibold">
                                                <span>MK</span>{shopProduct.price}
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            {shopProduct.description}
                                        </div>
                                        <div></div>
                                        <div>
                                            <div className="">
                                                <Link className="bg-green-500 text-white rounded-full py-2 px-4 font-semibold" href="/">add to cart</Link>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">

                        </div>
                    </div>

                </div>
        </div>
    </div>
}

export default shopStore;