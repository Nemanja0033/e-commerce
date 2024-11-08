import  { useState } from "react";
import { ShoppingBag, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext ";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const authContext = useAuth();
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const { currentUser, loginWithGoogle, logout } = authContext;

  const handleIconClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      console.log("User logged in");
      setMenuOpen(false);
      window.location.href = '/'
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log("User logged out");
      setMenuOpen(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="w-full bg-white h-[70px]  flex justify-between items-center shadow-md ">
      <div className="md:ml-12 ml-8">
        <Link to={"/"}>
          <h1 className="md:text-3xl text-xl text-primary cursor-pointer">m o d e.</h1>
        </Link>
      </div>
      <div className="md:mr-12 mr-8 flex gap-8">
        <Link to={"/products"}>
          <span className="text-primary md:text-md text-sm hover:text-secondary">Products</span>
        </Link>
        <Link to={"/cart"}>
          <ShoppingBag className="cursor-pointer  hover:text-secondary" />
        </Link>
        <div className="relative">
          {currentUser ? (
            <>
              <div className="md:w-28 w-12 overflow-hidden"><span onClick={handleIconClick} className="cursor-pointer text-primary md:text-md text-sm">{currentUser.email}</span></div>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <UserIcon onClick={handleIconClick} className="cursor-pointer  hover:text-secondary" />
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <button onClick={handleLogin} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Log In
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
