import React from 'react'

export default function MovieForm() {
  return (
    <div>
        <form>
            <input
            placeholder='name'
            className='name'

            />

            <input
            placeholder='genre'
            className='genre'
            
            />

            <input
            placeholder='duration'
            className='duration'
            
            />
        </form>
    </div>
  )
}
