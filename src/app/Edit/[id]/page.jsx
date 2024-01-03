"use client"
import * as React from 'react';
import axios from "axios";

import {useState} from "react";
import {useRouter} from "next/navigation";
import EditTickets from "@/app/(components)/EditTickets";
async function getTicketDetails(id) {
    const res = await axios.get(`http://localhost:4000/tickets/${id}`)
    return res.data
}




export default async  function TicketsDetails({params}) {

     const tickets= await getTicketDetails(params.id)




    return (
        <>

            <EditTickets id={tickets.id}/>
          </>
    );
};