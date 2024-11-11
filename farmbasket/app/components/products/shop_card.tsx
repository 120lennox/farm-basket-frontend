import { fetchShopCardData } from "@/app/lib/data";
// import ImageHandler from "../images/image_handler";
import Image from "next/image";
import Link from "next/link";

const ShopCard = async()=>{
    const shops = await fetchShopCardData();
    console.log(shops)
    return <div>
        <div className="flex justify-between items-center mt-5 font-inter mb-3">

            <div className="grid grid-cols-2 gap-x-44 gap-y-10">
                {shops.map((shop)=>(
                    <div key={shop.id} className="bg-yellow-50 rounded-2xl p-2 shadow-lg">
                        <div className="flex flex-row space-x-4 items-center">
                            <div>
                                <Image 
                                        src={shop.image}
                                        alt="Image"
                                        width={200}
                                        height={300}
                                />
                            </div>
                            <div className="flex flex-col space-y-5 justify-center items-center">
                                <div className="text-[20px] font-semibold text-center">{shop.name}</div>
                                <div className="text-[16px] font-extralight">{shop.description}</div>
                                <div className="mb-5">
                                    <Link className="bg-green-600 text-white rounded-full px-3 py-2 font-semibold text-center" href={`/shops/${shop.id}`}>Visit Shop</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* {shops?.map((shop)=>{
                <div key={shop.id} className="">
                    <div>
                        test here
                        <div>
                            <Image src="https://i.pinimg.com/564x/b1/38/63/b1386383cb433a04acaee2b9420961e1.jpg"
                                    alt="Water pump"
                                    width={200}
                                    height={400}
                            />
                        </div>
                        <div>
                            <div>{shop.name}</div>
                            <div>{shop.description}</div>
                            <div>
                                <Link href="/">visit shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
            })} */}
        </div>
    </div>
}

export default ShopCard;