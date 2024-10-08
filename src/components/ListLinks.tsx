"use client";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
    return (
        <div className='  w-full flex flex-col'>
            <span className='w-full h-px bg-gradient lg:hidden'></span>
            <ul className='flex gap-4 mx-auto py-4 lg:gap-16'>
                <Link href='/see-all-lists'>
                    <li className='flex flex-col items-center'>
                        <Image
                            src='/solar_checklist-minimalistic-linear.svg'
                            alt=''
                            width={40}
                            height={40}
                        ></Image>
                        <h3>Mina Listor</h3>
                    </li>
                </Link>
                <Link href='/add-lists'>
                    <li className='flex flex-col items-center'>
                        <Image
                            src='/solar_checklist-minimalistic-linear.svg'
                            alt=''
                            width={40}
                            height={40}
                        ></Image>
                        <h3>Ny lista</h3>
                    </li>
                </Link>
            </ul>
           {/*  <span className='w-full h-px bg-gradient hidden lg:block'></span> */}
        </div>
    );
};

export default Navigation;
/* const Navigation = () => {
    return (
        <nav className=' bg-white w-screen flex '>
            <ul className='flex gap-4 mx-auto bg-lime-300'>
                <li className='flex flex-col items-center border border-red-600 bg-amber-400'>
                    <Image
                        src='/solar_checklist-minimalistic-linear.svg'
                        alt=''
                        width={40}
                        height={40}
                    ></Image>
                    <h3>Mina Listor</h3>
                </li>
                <li className='flex flex-col items-center'>
                    <Image
                        src='/solar_checklist-minimalistic-linear.svg'
                        alt=''
                        width={40}
                        height={40}
                    ></Image>
                    <h3>Ny lista</h3>
                </li>
            </ul>
        </nav>
    );
}; */
