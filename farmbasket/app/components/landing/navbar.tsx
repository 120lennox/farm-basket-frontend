import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Link className="font-NovaScript text-[36px] font-semibold" href="/">
            Farm Basket 🧺
          </Link>
        </div>
        <div>
          <div className="bg-white px-10 py-2 mt-2 rounded-full shadow-md">
            <div className="space-x-28 font-medium text-[19px]">
              <Link href="/shops">Shops</Link>
              <Link href="/collections">Collections</Link>
              <Link href="/explore">Explore</Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="space-x-8 text-[19px] font-medium">
            <Link href="/authentication/login">Login</Link>
            <Link href="/authentication/signUp">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
