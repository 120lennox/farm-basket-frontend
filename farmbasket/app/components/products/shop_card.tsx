import { fetchShopCardData } from "@/app/lib/data";

const ShopCard = async()=>{
    const shop = await fetchShopCardData();
    console.log(shop)
    return <div>
        <div>
            <div>
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
}

export default ShopCard;