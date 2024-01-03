import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <main className=' max-w-5xl my-12 mx-auto px-8'>
      <nav>
        <div>
          <h2 className='mb-4 pb-2 text-base'>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>

      </nav>
      <TicketList />
    </main>
  )
}