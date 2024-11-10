import { fetchShopCardData } from "@/app/lib/data"

const shopStore = async()=>{
    const shopCardData = await fetchShopCardData()
    return <div>
        <div>
            <div>
                {shopCardData?.map((shop)=>{
                    <div key={shop.id}>
                        <div>
                            <div>
                                <div></div>
                                <div></div>
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