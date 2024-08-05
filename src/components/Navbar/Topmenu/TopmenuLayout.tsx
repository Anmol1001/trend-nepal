import React from 'react'

const TopmenuLayout = ({children}:any) => {
  return (
    <div id='top-menu' className='container h-10'>
      {children}
    </div>
  )
}

export default TopmenuLayout