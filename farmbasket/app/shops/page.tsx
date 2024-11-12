import ShopCard from "../components/products/shop_card"
import Footer from "../components/landing/footer";


const shops = async()=> {
    return <div>
        <div className="mx-8">
            <div className="mt-20">
                <div className="flex justify-between items-center">
                    <div className="text-[26px] font-semibold">Shops Available</div>
                    <div>
                        <div>
                            <form action="">
                                <input className="px-8 py-2 border-none ring-1 focus:outline-green-600 rounded-full" type="text" name="search" placeholder="search shop" />
                            </form>
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
        <Footer />
    </div>
}

export default shops;