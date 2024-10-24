import React from "react";
import Link from "next/link";
import HomePageButton from "./HomePageLogo";
import ProfileButton from "./ProfileLogo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-16 bg-blue-300 text-blue-600 sticky top-0">
  <div className="max-w-5xl mx-auto px-6 h-full">
    <div className="flex justify-between items-center h-full">
      <HomePageButton />
      <button
        type="button"
        className="inline-flex items-center md:hidden"
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
          />
        </svg>
      </button>
      <ul className="hidden md:flex gap-x-8 text-white">
        <li>
          <Link href="/about">
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/maid/pickup">
            <p>Services</p>
          </Link>
        </li>
        <li>
          <Link href="/maid/contacts">
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
      <div className="hidden md:block">
        <ProfileButton />
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Navbar;