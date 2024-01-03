import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav className=' pb-4
    border-b-2 border-gray-200
    flex items-center gap-5
    my-10 mx-auto
    max-w-5xl'>
      <Image
        src={Logo}
        alt='Dojo Helpdesk logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1 className='font-bold text-primary text-lg'>NEXT 13</h1>
      <Link className='text-gray-500' href="/">Dashboard</Link>
      <Link className='text-gray-500' href="/tickets">Tickets</Link>
      <Link className='text-gray-500' href="/create">Create Tickets</Link>
    </nav>
  )
}