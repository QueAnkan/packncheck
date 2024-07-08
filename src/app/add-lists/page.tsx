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
    const [isSaved, setIsSaved] = useState<boolean>(false);

    const messageClasses =
        isSaved &&
        "absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl";

    const addedListMessage = () => {
        setIsSaved(true);
        setTimeout(() => {
            setIsSaved(false);
        }, 3000);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!newList.title || !newList.checkItems.length) {
            return;
        } else {
            const updatedLists = [...myLists, newList];
            setMyLists(updatedLists);

            const storedLists = JSON.parse(
                localStorage.getItem("myLists") || "[]"
            );

            const newStoredLists = [...storedLists, newList];
            setMyLists(myLists.concat(newList));
            localStorage.setItem("myLists", JSON.stringify(newStoredLists));
            addedListMessage();
            setNewList({ title: "", checkItems: [] });
        }
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
        <div className='h-screen flex flex-col items-center gap-4 p-8'>
            <h1 className="text-3xl">Skapa ny lista</h1>
            <form
                action='/'
                onSubmit={handleSubmit}
                className='relative flex flex-col justify-start gap-y-10 border rounded-sm w-full h-5/6 mx-auto p-4'
            >
                <div className='flex flex-col gap-y-8'>
                    <div className='flex items-end'>
                        <label htmlFor='ListName' className='flex flex-col'>
                            Lägg till titel
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
                        {/*  <button className=' border border-white' type='button'>
                        <Image
                            alt='Lägg till namn på listan'
                            src='/typcn_plus.svg'
                            width={20}
                            height={20}
                        ></Image>
                    </button>
                    {/* disabled när fältet är ifyllt */}
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
                        <button
                            disabled={!newCheckItem}
                            onClick={handleAddItem}
                            type='button'
                        >
                            <Image
                                alt='Lägg till namn på listan'
                                src='/typcn_plus.svg'
                                width={20}
                                height={20}
                            ></Image>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <h2 className=''> {newList.title}</h2>
                    <ul className='w-full'>
                        {newList.checkItems.map((listItem, index: number) => {
                            return (
                                <li
                                    key={index}
                                    className='flex justify-between w-1/2 my-2 '
                                >
                                    <div className='flex gap-4'>
                                        <input
                                            type='checkbox'
                                            id='checkItem'
                                            name='checkItem'
                                        ></input>
                                        <p>{listItem}</p>
                                    </div>
                                    <button className='justify-self-end'>
                                        <Image
                                            alt='Ta bort uppgift'
                                            src='/bytesize_trash.svg'
                                            width={20}
                                            height={20}
                                        ></Image>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="absolute w-full h-0 bottom-12 left-0 flex  flex-col items-center overflow-visible">
                    <button
                        type='submit'
                        className='text-black font-bold bg-gradient w-fit px-4 py-1 rounded-3xl '
                    >
                        Spara lista
                    </button>
                </div>
            </form>
            <div className={`${messageClasses}`}>
                <div className=''>{isSaved && <p>Listan är sparad</p>}</div>
            </div>
        </div>
    );
};

export default AddListsPage;
