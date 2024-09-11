"use client";

// TODO: fix handleDeleteList function
import { useState } from "react";
import Image from "next/image";

const SeeAllLists = () => {
    const [lists, setLists] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState<null | number>(null);

    const visibleClass = isOpen !== null ? "visible" : "hidden";

    const storedLists = JSON.parse(localStorage.getItem("myLists") || "[]");
    console.log(storedLists);

    const handleDeleteList = (index: number) => {
        console.log("click", index, isOpen);

        const updatedLists = [...storedLists];

        updatedLists.splice(index, 1);
        localStorage.setItem("myLists", JSON.stringify(updatedLists));
        setLists(updatedLists);
    };

    const closeList = (index: number) => {
        setIsOpen(null);
    };

    return (
        <div className=' h-screen flex flex-col justify-start items-center gap-y-8 py-8 '>
            <h1 className='text-3xl'>See All Lists</h1>
            <ul className='flex flex-wrap justify-evenly gap-y-8 '>
                {storedLists.map(
                    (
                        list: { title: string; checkItems: string[] },

                        index: number
                    ) => (
                        <li
                            className='relative flex items-center justify-between border border-white rounded-3xl w-56 text-center py-2 px-4'
                            key={index+list.title}
                        >
                            <div
                                className=' cursor-pointer w-full h-full text-left z-10 border border-red-300'
                                onClick={() =>
                                    setIsOpen(isOpen === index ? null : index)
                                }
                            >
                                <h2 className='text-xl font-semibold'>
                                    {list.title}
                                </h2>
                            </div>
                            <button
                                className='p-2 border border-blue-300'
                                onClick={() => handleDeleteList(index)}
                            >
                                <Image
                                    alt='Ta bort uppgift'
                                    src='/bytesize_trash.svg'
                                    width={20}
                                    height={20}
                                ></Image>
                            </button>
                            <div className='absolute w-full left-0  bg-black rounded-3xl  z-50'>
                                <div className={`${visibleClass}`}>
                                    {isOpen === index && (
                                        <ul className='w-full h-fit border border-white py-2 px-4 rounded-3xl min-h-60'>
                                            <button
                                                onClick={() => {
                                                    closeList(index);
                                                }}
                                            >
                                                X
                                            </button>
                                            {list.checkItems.map(
                                                (
                                                    item: string,
                                                    index: number
                                                ) => (
                                                    <li
                                                        key={index}
                                                        className='flex gap-4 pb-4'
                                                    >
                                                        <input
                                                            type='checkbox'
                                                            id='checkItem'
                                                            name='checkItem'
                                                        ></input>
                                                        <p>{item}</p>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </li>
                    )
                )}
            </ul>
            <span></span>
        </div>
    );
};

export default SeeAllLists;
