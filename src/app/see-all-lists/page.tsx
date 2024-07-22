"use client";

import { useState } from "react";

const SeeAllLists = () => {
    const [lists, setLists] = useState([]);
    const [isOpen, setIsOpen] = useState<null | number>(null);

    const visibleClass = isOpen !== null ? "visible" : "hidden";

    const storedLists = JSON.parse(localStorage.getItem("myLists") || "[]");
    console.log(storedLists);

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
                            className='relative border border-white rounded-3xl w-56 text-center'
                            key={index}
                        >
                            <div
                                className='cursor-pointer w-full h-fit py-2 px-4 rounded-3xl z-10'
                                onClick={() =>
                                    setIsOpen(isOpen === index ? null : index)
                                }
                            >
                                <h2 className='text-xl font-semibold'>
                                    {list.title}
                                </h2>
                            </div>
                            <div className='absolute w-full left-0  bg-black rounded-3xl  z-50'>
                                <div className={`${visibleClass}`}>
                                    {isOpen === index && (
                                        <ul className='w-full h-fit border border-white py-2 px-4 rounded-3xl min-h-60'>
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
