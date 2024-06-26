"use client";
import Image from "next/image";
import { useState } from "react";

type List = {
    title: string;
    checkItems: string[];
};

const AddListsPage = () => {
    const [myLists, setMyLists] = useState<List[]>([]);
    const [newList, setNewList] = useState<List>({ title: "", checkItems: [] });
    const [newCheckItem, setNewCheckItem] = useState<string>("");


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updatedLists = [...myLists, newList];
        setMyLists(updatedLists);

        const storedLists = JSON.parse(localStorage.getItem("myLists") || "[]");

        const newStoredLists = [...storedLists, newList];
        setMyLists(myLists.concat(newList));
        localStorage.setItem("myLists", JSON.stringify(newStoredLists));
    };

    const handleAddItem = () => {
        setNewList({
            ...newList,
            checkItems: [
                newList.checkItems[0],
                ...newList.checkItems,
                newCheckItem,
            ],
        });
        setNewList((prevList) => ({
            ...prevList,
            checkItems: [...prevList.checkItems.slice(1)],
        }));
        setNewCheckItem("");
    };

    return (
        <div className='h-screen'>
            <h1>Skapa ny lista</h1>
            <form
                action='/'
                onSubmit={handleSubmit}
                className=' flex flex-col justify-between border border-gradient w-fit h-5/6 mx-auto p-4'
            >
                <div className='flex items-end'>
                    <label htmlFor='ListName' className='flex flex-col'>
                        Lägg till Titel för listan
                        <input
                            id='ListName'
                            type='text'
                            value={newList.title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                setNewList({
                                    ...newList,
                                    title: event.target.value,
                                })
                            }
                            className='w-3/4 rounded-md bg-[#F8F8CA] text-black'
                        />
                    </label>
                    <button className=' border border-white' type='button'>
                        <Image
                            alt='Lägg till namn på listan'
                            src='/typcn_plus.svg'
                            width={20}
                            height={20}
                        ></Image>
                    </button>
                    {/* disabled när fältet är ifyllt */}
                </div>
                <div>
                    <h3>Titel: {newList.title}</h3>
                    <ul className=''>
                        {newList.checkItems.map((list, index: number) => {
                            return (
                                <li key={index}>
                                    <div className='flex'>
                                        <input
                                            type='checkbox'
                                            id='checkItem'
                                            name='checkItem'
                                        ></input>
                                        <p>{list}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className='flex items-end'>
                    <label htmlFor='checkItem' className='flex flex-col'>
                        Lägg till uppgift
                        <input
                            id='checkItem'
                            type='text'
                            value={newCheckItem}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setNewCheckItem(event.target.value)}
                            className='w-3/4 rounded-md bg-[#F8F8CA] text-black'
                        />
                    </label>
                    <button onClick={handleAddItem} type='button'>
                        <Image
                            alt='Lägg till namn på listan'
                            src='/typcn_plus.svg'
                            width={20}
                            height={20}
                        ></Image>
                    </button>
                </div>
                <button type='submit'>Spara lista</button>
            </form>
        </div>
    );
};

export default AddListsPage;
