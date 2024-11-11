import { fetchShopCardData } from "@/app/lib/data"

const shopStore = async()=>{
    const shopCardData = await fetchShopCardData()
    console.log(shopCardData)
    return <div>
        <div>
            hello world
            <div>
                {shopCardData?.map((shop)=>{
                    <div key={shop.id}>
                        <div>
                            <div>
                                <div></div>
                                <div>{shop.owner.name}</div>
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div></div>
                            <div>
                                <hr />
                            </div>
                            <div>
                                <div></div>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default shopStore;