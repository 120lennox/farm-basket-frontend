import { fetchShopCardData } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

// Define the Shop interface based on the expected data structure
interface Shop {
  shopid: string;
  image: string;
  name: string;
  description: string;
}

const ShopCard = async () => {
  const shops: Shop[] = await fetchShopCardData();
  console.log(shops);

  return (
    <div>
      <div className="flex justify-between items-center mt-5 font-inter mb-3">
        <div className="grid grid-cols-2 gap-x-44 gap-y-10">
          {shops.map((shop: Shop) => (
            <div key={shop.shopid} className="bg-yellow-50 rounded-2xl p-2 shadow-lg">
              <div className="flex flex-row space-x-4 items-center">
                <div>
                  <Image
                    src={shop.image}
                    alt="Image"
                    width={200}
                    height={300}
                    className="object-cover" // Added to ensure proper image scaling
                  />
                </div>
                <div className="flex flex-col space-y-5 justify-center items-center">
                  <div className="text-[20px] font-semibold text-center">{shop.name}</div>
                  <div className="text-[16px] font-extralight">{shop.description}</div>
                  <div className="mb-5">
                    <Link 
                      className="bg-green-600 text-white rounded-full px-3 py-2 font-semibold text-center" 
                      href={`/shops/${shop.shopid}`}
                    >
                      Visit Shop
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCard;