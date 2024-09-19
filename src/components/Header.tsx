import React from "react";
import { irishGrover } from "../app/layout";
import Link from "next/link";

const Header = () => {
    return (
        <header className='flex px-8 pt-14 justify-center items-end'>
            <Link href='/'>
            <h1 className={`text-5xl ${irishGrover.className}`}>Pack´n check!</h1>
            </Link>
        </header>
    );
};

export default Header;
