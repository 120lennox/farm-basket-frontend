import ShopCard from "../components/products/shop_card"

export default function shops(){
    return <div>
        <div className="mx-8">
            <div className="mt-20">
                <div className="flex justify-between items-center">
                    <div className="text-[26px] font-semibold">Shops Available</div>
                    <div>
                        <div>
                            <input className="" type="text" />
                            <label>search</label>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <hr />
                </div>
                <div>
                    <div>
                        <ShopCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
}