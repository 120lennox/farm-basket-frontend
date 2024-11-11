import { fetchShopid } from "@/app/lib/data";

const shopStore = async({params:{id}})=>{
    const shopid = await fetchShopid(id)
    return <div>
        <div>
            {shopid?.map((shop)=>(
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