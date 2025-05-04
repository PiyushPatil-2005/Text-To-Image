import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between pb-20">
        <img src={assets.logo} alt="" />
        <p className="flex-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden ml-5 border-l">Copyright @piyushpatil.developer | All rights applicable.</p>
        <div className="flex gap-3">
            <img src={assets.instagram_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
        </div>
    </div>
  );
}

export default Footer;