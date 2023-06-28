import { forwardRef, LegacyRef } from "react";
import Link from "next/link"
import {useRouter} from "next/router";
import { MdCottage, MdGroup, MdShopTwo, MdCategory } from "react-icons/md";
import logo from "./codex.png";
import Image from "next/image";
import { ImExit } from "react-icons/im";
import Swal from "sweetalert2";

const SideBar = forwardRef(({  }, ref: LegacyRef<HTMLDivElement>) => {
  const router = useRouter()
  const listMenu = [
    { to: "/", path: "/", icon: <MdCottage />, name: "Home" },
    { to: "user", path: "user", icon: <MdGroup />, name: "Users" },
    {
      to: "product-category",
      path: "product-category",
      icon: <MdCategory />,
      name: "Category",
    },
    { to: "product", path: "product", icon: <MdShopTwo />, name: "Product" },
  ];
  const Logout =async()=>{  
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log Out!'
      });
  
      if (result.isConfirmed) {
        localStorage.removeItem('TokenNext')
          router.push('/login')
        Swal.fire(
          'Log Out!',
          'success'
        );
      }
    } catch (error) {
      console.error('Error deleting data:', error);
      Swal.fire(
        'Error!',
        'Failed to delete data. Please try again.',
        'error'
      );
    }
  };

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <Image className="w-32 h-auto" src={logo} alt="company logo" />
        </picture>
      </div>

      <div className="flex flex-col">
        {(listMenu || []).map((mn) => (
          <Link href={`${mn.to}`}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname === mn.path
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">{mn.icon}</div>
              <div>
                <p>{mn.name}</p>
              </div>
            </div>
          </Link>
        ))}
        {/* <Link href="/account">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == "/account"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <UserIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Account</p>
              </div>
            </div>
          </Link>
          <Link href="/billing">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == "/billing"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <CreditCardIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Billing</p>
              </div>
            </div>
          </Link> */}
         <div className="flex items-center justify-center py-5">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      onClick={Logout}>
  <ImExit className="inline-block w-4 h-4 mr-2 align-middle" />
  Log Out
</button>
</div>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;

// const SideBar = forwardRef({ showNav }, ref) => {
//   const {pathname} = useLocation()
//   const listMenu = [
//     {to: '/', path:'/', icon:<MdCottage/>, name: 'Home'},
//     {to: 'user', path:'user', icon:<MdGroup/>, name: 'User'},
//     {to: 'category', path:'category', icon:<MdCategory/>, name: 'Category'},
//     {to: 'product', path:'product', icon:<MdShopTwo/>, name: 'Product'},
//   ]

//   return (
//     <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
//       <div className="flex justify-center mt-6 mb-14">
//         <picture>
//           <img
//             className="w-32 h-auto"
//             src="/ferox-transparent.png"
//             alt="company logo"
//           />
//         </picture>
//       </div>

//       <div className="flex flex-col">

// {
//     (listMenu || []).map((mn)=>
// <Link to={`${mn.to}`}>
//   <div
//     className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
//       pathname == mn.path
//         ? "bg-orange-100 text-orange-500"
//         : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
//     }`}
//           >
//             <div className="mr-2">
//               {mn.icon}
//             </div>
//             <div>
//               <p>{mn.name}</p>
//             </div>
//           </div>
//         </Link>
//             )
//         }

//     </div>
//   );
// };

// SideBar.displayName = "SideBar";

// export default SideBar;
