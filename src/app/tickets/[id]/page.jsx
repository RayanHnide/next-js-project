// @flow
import * as React from 'react';
import {notFound} from "next/navigation";
import Link from "next/link";

export const dynamicParams= true
export async function generateStaticParams(){
    const res = await fetch(`http://localhost:4000/tickets`)
    const ticket= await res.json()
    return ticket.map((e)=>(
        {
            id:e.id
        }
    ))
}

async function getTicketDetails(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60 // use 0 to opt out of using cache
        }
    })
    if (!res.ok){
        notFound()
    }

    return res.json()
}
export default async function TicketsDetails({params}) {
    const tickets= await getTicketDetails(params.id)


    return (
        <main>
           <nav>
               <h2>
                   Ticket Details
               </h2>
           </nav>
            <div className="card">
                <h3>{tickets.title}</h3>
                <small>Created by {tickets.user_email}</small>
                <p>{tickets.body}</p>
                <div className={`pill ${tickets.priority}`}>
                    {tickets.priority} Priority
                </div>
                <Link className='text-primary' href='/tickets'>Back</Link>

            </div>

        </main>
    );
};