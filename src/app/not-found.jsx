// @flow
import * as React from 'react';
import Link from "next/link";


export default function  NotFound (){
    return (
        <main className='text-center'>
             <h2 className='text-3xl'>
                 there Was a problem
             </h2>
            <p>
                we cold not find the page you were looking for .
            </p>
            <p>
                Go back to the <Link href='/'>Dashboard</Link>
            </p>
        </main>
    );
};