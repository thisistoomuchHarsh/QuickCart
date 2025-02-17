import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="flex items-center">
            <img className="mb-5 w-80" src={assets.quickcart} alt="" />
        </div>
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col text-gray-600 gap-1">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col text-gray-600 gap-1">
                <li>+91-770-394-0000</li>
                <li>quickcart@gmail.com</li>
                <li>Instagram</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright &copy; 2025@ quickcart.shop - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
