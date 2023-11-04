import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'

const HostLayout = () => {
  return (
    <div>
     <Header />
     <Outlet />
    </div>
  )
}

export default HostLayout
