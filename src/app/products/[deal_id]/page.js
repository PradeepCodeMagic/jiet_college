'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams();
    console.log(params.deal_id)
  return (
    <div>
      
    </div>
  )
}

export default page
