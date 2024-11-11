import { PageProps } from "@/.next/types/app/layout";
import { fetchShopid } from "@/app/lib/data";

const shopStore = async({params}: PageProps)=>{
    const {id} = await params
    const shopid = await fetchShopid(id);
    return <div>
        <div>
            {shopid?.map((shop)=>(
                <div key={shop.id}>
                    <div>
                        <div>
                            <div></div>
                            <div></div>
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