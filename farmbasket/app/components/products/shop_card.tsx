import { fetchShopCardData } from "@/app/lib/data";
// import ImageHandler from "../images/image_handler";
import Image from "next/image";
import Link from "next/link";

const ShopCard = async()=>{
    const shops = await fetchShopCardData();
    console.log(shops)
    return <div>
        <div className="flex justify-between items-center mt-5">
            {shops?.map((shop)=>(
                <div key={shop.id} className="bg-white rounded-3xl flex flex-wrap ">
                    <div className="">
                        <div className="p-3 flex flex-row space-x-5 justify-between items-center">
                            <div>
                                <Image src="https://i.pinimg.com/564x/b1/38/63/b1386383cb433a04acaee2b9420961e1.jpg" alt="description" width={200} height={300} />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <div className="text-[20px] font-semibold">
                                    {shop.name}
                                </div>
                                <div>Your one stop at amazing farm products</div>
                                <div>
                                    <Link className="bg-green-600 text-white rounded-full font-semibold py-2 px-3" href="/shops/shop.id">visit shop</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default ShopCard;