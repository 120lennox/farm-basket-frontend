import { fetchShopCardData } from "@/app/lib/data";
// import ImageHandler from "../images/image_handler";
import Image from "next/image";
import Link from "next/link";

const ShopCard = async()=>{
    const shops = await fetchShopCardData();
    console.log(shops)
    return <div>
        <div className="flex justify-between items-center mt-5">

            <div className="grid grid-cols-2">
                {shops.map((shop)=>(
                    <div key={shop.id} className="bg-yellow-50 rounded-lg">
                        <div>
                            <div>
                                <Image 
                                        src={shop.image}
                                        alt="Image"
                                        width={200}
                                        height={300}
                                />
                            </div>
                            <div >
                                <div className="">{shop.name}</div>
                                <div>{shop.description}</div>
                                <div>
                                    <Link href={`/${shop.id}`}>Visit Shop</Link>
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