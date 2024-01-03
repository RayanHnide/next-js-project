"use client"
import Link from "next/link";
import axios from "axios";
import {redirect, useRouter} from "next/navigation";
import {useState} from "react";



async function getTickets() {

  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })

  return res.json()
}

export default async function TicketList() {


  const router = useRouter()
  await new Promise(resolve => setTimeout(resolve,1000))
  const tickets = await getTickets()
  // console.log(tickets)
   function handledelete(id){

     axios.delete(`http://localhost:4000/tickets/${id}`).then((res)=>{
       console.log('delete done')
       router.push('/')
     })
  }
 // async function searchTickets(value){
 //   await axios.get(`http://localhost:4000/tickets?q=${value}`).then((res)=>{
 //     console.log( res.data)
 //     setData(res.data)
 //
 //   })
 //  }

  return (
    <>
      {/*<input onChange={(e)=>{*/}
      {/*searchTickets(e.target.value)*/}
      {/*}*/}
      {/*}  type='search' placeholder='Search Tickets'/>*/}
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card   bg-white
    shadow-sm
    rounded-md
    py-3 px-4 my-4
    relative
    overflow-hidden my-5">
          <h3 className=' font-bold text-gray-700 text-sm
    mb-0'>{ticket.title}</h3>


          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>

          <Link className='text-primary' href={`/tickets/${ticket.id}`}>Details</Link> <br/>
           <div className='flex justify-center hover:text-red-900'>
             <button className='text-red-700'  onClick={()=>{handledelete(ticket.id)}}>
               Delete
             </button>
           </div>
          <div className='flex justify-center hover:text-red-900'>
            <button onClick={()=>{
              router.push(`/Edit/${ticket.id}`)
            }
            } className='text-blue-700'>
              Edit
            </button>
          </div>
        </div>

      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>

      )}
    </>
  )
}