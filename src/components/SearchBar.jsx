"use client"
import React, { Fragment, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const Router = useRouter();
    const [input,setInput] = useState("");
    console.log(input);
    const catchData=(e)=>{
        let value = e.target.value;
        setInput(value);
    }
const handelSubmit=(e)=>{
    e.preventDefault();
    Router.push(`search?=${input}`);
}
    return (
        <Fragment>
            <section className='mt-5'>
                <div className='w-[96%] max-w-[600px] mx-auto relative'>
                    <form className='flex items-center w-full' onSubmit={handelSubmit}>
                        <IoSearchOutline className='absolute ml-4 text-2xl'/>
                            <input onChange={catchData} placeholder='Search here...' className='flex-grow w-full h-full border border-gray-300 border py-3 px-10 focus:outline-none hover:shadow-md rounded-full hover:border-gray-400' type="text" />
                        <MdKeyboardVoice className='absolute ml-[92%] text-2xl text-blue-500 cursor-pointer' title='Input voice'/>
                    </form>
                </div>
                <div className='flex gap-4 justify-center mt-8 sm:flex-row md:flex-row lg:flex-row xl:flex-row'>
                    <button className='p-2 hover:border border-gray-300 bg-gray-200 transition'onClick={handelSubmit}>Googel Search</button>
                    <button className='p-2 hover:border border-gray-300 bg-gray-200 transition'>I,m Felling Lucky</button>
                </div>
            </section>
        </Fragment>
    );
};

export default SearchBar;