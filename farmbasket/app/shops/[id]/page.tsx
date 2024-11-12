import { PageProps } from "@/.next/types/app/layout";
import { fetchShopid } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

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

                        <div className="mt-10 mb-10">
                            <div>
                                <div className="rounded-sm">
                                    <Image className="rounded-2xl"
                                           src="https://i.pinimg.com/736x/05/3f/47/053f47cb444eacf993befed3f5945f58.jpg"
                                           alt="Fertilizer bag"
                                           width={400}
                                           height={500} 
                                    />
                                </div>
                                <div className="absolute -bottom-[55%] left-[3rem]">

                                    <div className="bg-neutral-50 rounded-3xl p-5 flex flex-col space-y-1">
                                        <div className="flex flex-row justify-between">
                                            <div className="text-[18px] font-semibold">
                                                Fertlizer <span>50KG</span>
                                            </div>
                                            <div className="text-[18px] font-semibold">
                                                <span>MK</span>95,000
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            Suitable for crops like Maize, tobacco, rice etc
                                        </div>
                                        <div></div>
                                        <div>
                                            <div className="">
                                                <Link className="bg-green-500 text-white rounded-full py-2 px-4 font-semibold" href="/">add to cart</Link>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">

                        </div>
                    </div>

                </div>
        </div>
    </div>
}

export default shopStore;