import Image from "next/image";

const Navigation = () => {
    return (
        <nav className='  w-screen flex flex-col fixed bottom-0 lg:top-0 '>
            <span className='w-full h-px bg-gradient lg:hidden'></span>
            <ul className='flex gap-4 mx-auto py-4'>
                <li className='flex flex-col items-center'>
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
            <span className='w-full h-px bg-gradient hidden lg:block'></span>
        </nav>
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
