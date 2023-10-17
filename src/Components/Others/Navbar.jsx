import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks=
    <>
    <div className="space-x-10">
    <NavLink className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl text-white font-medium')} to="/">Home</NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl text-white font-medium')} to="/addProducts">Add Products</NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl text-white font-medium')} to="/myCart">My Cart</NavLink>
    </div>
    </>
    return (
        <div className="navbar bg-teal-950">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-teal-950 rounded-box w-52">
        {
            navlinks
        }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        navlinks
     }
    </ul>
  </div>
  <div className="navbar-end">
  <NavLink className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl text-white font-medium')} to="/login"><button>login</button></NavLink>

  </div>
</div>
    );
};

export default Navbar;