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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {shops.map((shop: Shop) => (
        <div key={shop.shopid} className="card bg-base-100 shadow-xl">
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
              <Link href={`/shops/${shop.shopid}`} className="btn btn-primary">
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