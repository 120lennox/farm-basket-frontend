import { fetchShopCardData } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

// Define the Shop interface
interface Shop {
  shopid: string;
  image: string;
  name: string;
  description: string;
}

const ShopCard = async () => {
  // Explicitly type the function return
  const shops: Shop[] = await fetchShopCardData() as Shop[];
  console.log(shops);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {shops.map((shop: Shop) => (
        <div key={shop.shopid} className="card bg-green-200 shadow-xl">
          <figure>
            <Image
              src={shop.image}
              alt={shop.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{shop.name}</h2>
            <p>{shop.description}</p>
            <div className="card-actions justify-end">
              <Link href={`/shops/${shop.shopid}`} className="btn bg-green-500 border-none text-white hover:bg-green-800">
                Visit Shop
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;