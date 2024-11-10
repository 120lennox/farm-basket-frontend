import { fetchShopCardData } from "@/app/lib/data";

const ShopCard = async()=>{
    const shops = await fetchShopCardData();
    console.log(shops)
    return <div>
        <div className="flex justify-between items-center">
            {shops?.map((shop)=>(
                <div key={shop.id} className="bg-green-50 rounded-3xl flex flex-row ">
                    <div></div>
                    <div>
                        <div>
                            {shop.name}
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default ShopCard;