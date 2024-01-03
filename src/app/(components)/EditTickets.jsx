"use client"
import React, {useState} from 'react';
import axios from "axios";
import {useRouter} from "next/navigation";

const EditTickets = ({id}) => {

    const router = useRouter()

   const [title,setTitle] = useState('')
   const [body,setBody] = useState('')

     function handleSubmit(e){
        e.preventDefault()
         axios.put(`http://localhost:4000/tickets/${id}`,{
             title:title,
             body:body,
             priority: "medium",
             user_email: 'rayan@gmail.com'
         }).then((res)=>{
             router.push('/tickets')
         }).catch((err)=>{
             console.log(err)
         })
     }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex justify-center align-center mb-5'>

                <div className='border'>
                    <h1 className='text-center'>Edit</h1>
                    <input placeholder='New Title' value={title} type="text" onChange={(e)=>{
                    setTitle(e.target.value)

                    }
                    } name='title'  />
                    <textarea placeholder='New Body'  value={body} onChange={(e)=>{
                    setBody(e.target.value)}
                    } name='body' className='mt-4' />
                      <div className='flex justify-center mt-4  '>
                          <button className='pill btn-primary m-4'>Edit</button>
                      </div>
                </div>
            </form>
        </div>
    );
};

export default EditTickets;