import React from 'react'
import Navbar from '../Compo/Navbar'
import Sidebar from '../Compo/Sidebar'

export default function Home() {
  return (
    <div className=" divide-y divide-gray-200">
      <Navbar />
      <Sidebar />
    </div>
  )
}
