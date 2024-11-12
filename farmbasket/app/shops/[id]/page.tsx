import { PageProps } from "@/.next/types/app/layout";
import { fetchShopid } from "@/app/lib/data";
import Image from "next/image";

const shopStore = async({params}: PageProps)=>{
    const {id} = await params
    const shopid = await fetchShopid(id);
    return <div>
        <div className="mx-8">
                <div key={shopid.shopid}>
                    <div className="mt-20 flex flex-col ">
                        <div className="bg-yellow-50 w-full rounded-xl shadow-md p-8 flex flex-col gap-y-2">
                            <div className="text-[36px] font-extrabold text-green-700">{shopid.name}</div>
                            <div className="text-[24px] font-semibold">
                                {shopid.description}
                            </div>
                            <div className="text-[20px] font-extralight">
                                40% off discount
                            </div>
                        </div>

                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className="mt-10">
                            <h1 className="text-[36px] font-medium">Products for you</h1>
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-green-100">
                            <hr  />
                        </div>

                        <div>
                            <div>
                                <div>
                                    <Image 
                                           src=""
                                           alt=""
                                           width={}
                                           height={} 
                                    />
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    </div>
}

export default shopStore;