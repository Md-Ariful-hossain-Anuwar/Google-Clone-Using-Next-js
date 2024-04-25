import React, { Fragment } from 'react';
import Logo from "../assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";

const HomeBody = () => {
    return (
        <Fragment>
            <div className='flex flex-col items-center mt-20'>
                <Link href="/"><Image src={Logo} alt='Logo' height={100} width={300}></Image></Link>
            </div>
        </Fragment>
    );
};

export default HomeBody;