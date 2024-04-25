import React, { Fragment } from 'react';
import Country from './Country';
import Link from 'next/link';

const Footer = () => {
    return (
        <Fragment>
            <footer className='absolute bottom-0 w-full bg-gray-200'>
                <div className='px-10 py-4'>
                    <Country></Country>
                </div>
                <div className='flex flex-col justify-between items-center px-8 py-3 sm:flex-row'>
                    <div>
                        <ul className='flex gap-4 p-2'>
                            <li>
                                <Link href='/'>About</Link>
                            </li>
                            <li>
                                <Link href='/'>Advertising</Link>
                            </li>
                            <li>
                                <Link href='/'>Business</Link>
                            </li>
                            <li>
                                <Link href='/'>How Search Work</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                    <ul className='flex gap-3 p-2'>
                            <li>
                                <Link href='/'>Priviey</Link>
                            </li>
                            <li>
                                <Link href='/'>Terms</Link>
                            </li>
                            <li>
                                <Link href='/'>Seatting</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;