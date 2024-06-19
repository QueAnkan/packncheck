const AddListsPage = () => {
    return (
        <div className='h-screen'>
            <h1>Skapa ny lista</h1>
            <form
                action='/'
                className='border border-gradient w-fit h-5/6 mx-auto p-4'
            >
                <div className='flex items-center'>
                    <label htmlFor='ListName' className='flex flex-col'>
                        Listans Namn
                        <input
                            id='ListName'
                            type='text'
                            className='w-1/2 rounded-md bg-[#F8F8CA]'
                        />
                    </label>
                    <button className=' border border-white'>+</button>
                    {/* disabled när fältet är ifyllt */}
                </div>
                <div className='flex'>
                    <label htmlFor='checkItem' className='flex flex-col'>
                        Upppgift
                        <input
                            id='CheckItem'
                            type='text'
                            className='w-1/2 rounded-md bg-[#F8F8CA]'
                        />
                    </label>
                    <button>Lägg till</button>
                </div>
            </form>
        </div>
    );
};

export default AddListsPage;
