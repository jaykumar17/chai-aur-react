import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()  //for URL id get this use hooks
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      User : {userId}
    </div>
  )
}

export default User
