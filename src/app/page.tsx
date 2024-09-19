import Image from "next/image";

export default function Home() {
    return (
        <main className='flex flex-col items-center justify-between h-full '>
            <article className='flex flex-col items-center justify-center py-16 '>
                <h1 className='text-2xl font-semibold'>Stressiga utflykter? </h1>
                <p className='w-1/2 text-center font-medium text-xl'>
                    Gör förberedelserna smidigare genom att skapa
                    enkla checklistor för dina aktiviteter.
                </p>
                <Image
                    src='/bags.svg'
                    alt='Tecknad bild av packade väskor'
                    width={300}
                    height={200}
                />
                <p className='w-1/2 text-center'>
                    Klicka på “Ny lista” och börja din första egna packlista!
                </p>
            </article>
        </main>
    );
}
