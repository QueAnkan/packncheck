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
        }, 500);
    };

    const handleSubmit = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        console.log("click");

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

    const handleDeleteItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,index: number) => {
        event.preventDefault();
        setNewList({
            ...newList,
            checkItems: [
                ...newList.checkItems.slice(0, index),
                ...newList.checkItems.slice(index + 1),
            ],
        });
    };

    return (
        <div className='h-full flex flex-col items-center gap-4 p-8'>
            <h1 className='text-3xl'>Skapa ny lista</h1>
            <form
                action='/'
                className='relative flex flex-col justify-start gap-y-10 border rounded-sm w-full h-full mx-auto p-4'
            >
                <div className='flex flex-col gap-y-8'>
                    <div className='flex items-center'>
                        <label
                            htmlFor='ListName'
                            className='flex flex-col w-3/5'
                        >
                            Titel
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
                                className='rounded-md bg-[#F8F8CA] text-black'
                            />
                        </label>
                    </div>

                    <div className='flex items-end justify-start gap-1'>
                        <label
                            htmlFor='checkItem'
                            className='flex flex-col w-3/5'
                        >
                            Ny uppgift
                            <input
                                id='checkItem'
                                type='text'
                                value={newCheckItem}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setNewCheckItem(event.target.value)}
                                className=' rounded-md bg-[#F8F8CA] text-black'
                            />
                        </label>
                        <button
                            className=' flex items-center gap-x-0.5'
                            disabled={!newCheckItem}
                            onClick={handleAddItem}
                            type='button'
                        >
                            <Image
                                alt='Lägg till namn på listan'
                                src='/typcn_plus.svg'
                                width={10}
                                height={10}
                            ></Image>
                            <p className='text-nowrap text-sm'>Lägg till</p>
                        </button>
                    </div>
                </div>

                <div className=' w-full h-0 bottom-12 left-0 flex  flex-col items-end overflow-visible'>
                    <button
                        type='submit'
                        className='text-black font-bold bg-gradient w-fit px-4 py-1 rounded-3xl '
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                            handleSubmit(event)
                        }
                    >
                        Spara lista
                    </button>
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
                                    <button
                                        className='justify-self-end'
                                        onClick={(event) => handleDeleteItem(event, index)}
                                    >
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

                <div className={`${messageClasses}`}>
                    <div className='bg-black px-8 py-12 rounded-sm'>
                        {isSaved && <p>Listan är sparad</p>}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddListsPage;
