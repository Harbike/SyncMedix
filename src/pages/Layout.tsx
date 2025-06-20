import { menu_icon, close_icon } from "@/assets";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    
    <div className="flex flex-col">
      {/* HEADER */}
      <header>
      <div className="w-full flex justify-between relative p-4">
        <img
          src={isMenuOpen ? close_icon : menu_icon}
          alt="menu"
          className="w-8 h-8 cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
        <Button className="bg-blue-900 text-white rounded-full cursor-pointer"
          onClick={() => navigate("/login")}>
            Sign In
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 px-4 py-2">
            <ul className="flex flex-col gap-4 text-zinc-800 font-semibold">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      </header>

{/* OUTLET */}
<main>
      <div className="">
        <Outlet />
      </div>
</main>

      {/* <Newsletter />
      <Footer /> */}
    </div>
  );
}

export default Layout;
