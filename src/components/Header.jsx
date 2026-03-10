import { NavLink } from "react-router";
import Search from "./Search";

const Header = () => {
  

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <h1 className="">
          prod-demo
        </h1>
        
        
        {/* Navigation */}
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <NavLink to="/" className={({isActive})=>isActive?"text-white bg-blue-600 px-4 py-2 rounded-md":""}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/contacts" className={({isActive})=>isActive?"text-white bg-blue-600 px-4 py-2 rounded-md":""}>
                Contacts
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={({isActive})=>isActive?"text-white bg-blue-600 px-4 py-2 rounded-md":""}>
                Products
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;







// import { NavLink } from "react-router";

// const Header = () => {
//     return (
//         <div>
//             <ul>
//                 <li>
//                     <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/contacts">Contacts</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/products">Products</NavLink>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Header;