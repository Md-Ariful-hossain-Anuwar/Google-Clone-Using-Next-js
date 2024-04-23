import React, { Fragment } from 'react';
import Link from "next/link"
import Image from "next/image"
import { IoGridSharp } from "react-icons/io5";
import  Profile  from "../assets/images/profile.jpg";

const HomeHeader = () => {
    return (
        <Fragment>
            <header className='flex justify-end'>
                <div className='flex items-center space-x-5 p-3'>
                    <Link className='hover:underline underline-offset-4' href={`https://mail.google.com/mail/`}>Gmail</Link>
                    <Link className='hover:underline underline-offset-4' href={`https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl`}>Images</Link>
                    <span className='text-2xl cursor-pointer hover:bg-transparent hover:bg-gray-400 p-2 rounded-full'><IoGridSharp /></span>
                    <button className='uppercase px-5 py-1 bg-blue-500 text-white rounded-full font-semibold'>sing in</button>
                </div>
            </header>
        </Fragment>
    );
};

export default HomeHeader;