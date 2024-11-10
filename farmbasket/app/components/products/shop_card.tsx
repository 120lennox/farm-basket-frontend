import { fetchShopCardData } from "@/app/lib/data";
import ImageHandler from "../images/image_handler";
import Image from "next/image";

const ShopCard = async()=>{
    const shops = await fetchShopCardData();
    console.log(shops)
    return <div>
        <div className="flex justify-between items-center">
            {shops?.map((shop)=>(
                <div key={shop.id} className="bg-green-50 rounded-3xl flex flex-row ">
                    <div>
                        <Image src="https://i.pinimg.com/564x/b1/38/63/b1386383cb433a04acaee2b9420961e1.jpg" alt="description" width={300} height={400} />
                    </div>
                    <div>
                        <div>
                            {shop.name}
                        </div>
                        <div>Your one stop at amazing farm products</div>
                        <div></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default ShopCard;