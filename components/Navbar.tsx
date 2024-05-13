'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { github } from '@/lib/icons'
import DropDown from './DropDown'
import SearchDialog from './SearchDialog'
import { useGlobalContext } from '@/app/context/GlobalContext'
const Navbar = () => {
    const router  = useRouter();
    const {state} = useGlobalContext();
  return (
    <div className='w-full py-4 flex items-center justify-between'>
          <div className="left"></div>
          <div className='search_container flex shrink-0 w-full gap-2 sm:w-fit '>
              <SearchDialog />
              <div className='btn-group flex items-center gap-2'>
              <DropDown />
              <Button onClick={()=> router.push('/')} className='source-code flex items-center gap-2'>{github} Source Code</Button>
              </div>
          </div>
    </div>
  )
}

export default Navbar