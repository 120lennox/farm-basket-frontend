import collections from "@/app/collections/page";
import explore from "@/app/explore/page";
import shops from "@/app/shops/page";

export default function Navbar() {
  return (
    <div>
      <div>
        <div>
          <h1>Farm Basket</h1>
        </div>
        <div>
          <div>
            <div>
              <Link href={shops}>Shops</Link>
              <Link href={collections}>Collections</Link>
              <Link href={explore}>Explore</Link>
            </div>
          </div>

        </div>
        <div></div>
      </div>
    </div>
  );
}
