// 'use client'
// import { usePathname } from "next/navigation"
// import Link from "next/link"


// const NavLink = ({ href, Children }) =>{
//     const pathname = usePathname();

//     const isActive = pathname == href;

//     return (
//         <div className={`py-3 px-1 rounded-md transition-colors ${
//             isActive 
//               ? 'bg-CustomGreen-500' 
//               : 'hover:bg-CustomGreen-500'
//           }`}>
//             <Link href={href} className="block w-full">
//                 {Children}
//             </Link>
//         </div>
//     );
// }

// export default  NavLink;