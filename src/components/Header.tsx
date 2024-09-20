import React from "react";
import { irishGrover } from "../app/layout";
import Link from "next/link";
import Navigation from "./ListLinks";

const Header = () => {
    return (
        <header className='flex flex-col'>
            <div className='flex px-8 pt-14 justify-center items-center lg:grid grid-cols-3 lg:pt-8'>
                <Link href='/'>
                    <h1
                        className={`text-5xl ${irishGrover.className} lg:text-4xl lg:pb-11`}
                    >
                        Pack´n check!
                    </h1>
                </Link>
                <div className='hidden lg:block'>
                    <Navigation />
                </div>
            </div>
            <span className='w-full h-px bg-gradient hidden lg:block'></span>
        </header>
    );
};

export default Header;
