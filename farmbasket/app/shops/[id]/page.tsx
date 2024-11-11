import { fetchShopCardData } from "@/app/lib/data"

const shopStore = async({params:{id}})=>{
    const shopCardData = await fetchShopCardData()
    console.log(shopCardData)
    return <div>
        <div>
            {shopCardData?.map((shop)=>(
                <div key={shop.id}>
                    <div>
                        <div>
                            <div>shop.name</div>
                            <div>shop.des</div>
                            <div></div>
                        </div>

                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div></div>

                        <div></div>
                    </div>

                </div>
            ))}
        </div>
    </div>
}

export default shopStore;