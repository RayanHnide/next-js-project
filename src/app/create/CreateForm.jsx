"use client"

import {useState} from "react";

import {useRouter} from "next/navigation";
import axios from "axios";

export default function (){
    const router = useRouter()
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [priority,setPriority]=useState('low')
    const [isLoading,setIsLoading]=useState('')
    const handleSubmit= async (e)=>{
       e.preventDefault()
        setIsLoading(true)
        axios.post('http://localhost:4000/tickets',{
            title:title,
            body:body,
            priority:priority,
            user_email:'rayan@gmail.com'
        }).then((res)=>{
            if (res.status ===201){
                router.push('/tickets')
            }
        })


    }
    return(
        <>
            <form onSubmit={handleSubmit} className="w-1/2">
                <label>
                    <span>Title:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Body:</span>
                    <textarea
                        required
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </label>
                <label>
                    <span>Priority:</span>
                    <select
                        onChange={(e) => setPriority(e.target.value)}
                        value={priority}
                    >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                    </select>
                </label>
                <button
                    className="btn-primary"
                    disabled={isLoading}
                >
                    {isLoading && <span>Adding...</span>}
                    {!isLoading && <span>Add Ticket</span>}
                </button>
            </form>
        </>
    )
}