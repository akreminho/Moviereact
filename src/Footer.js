import React from 'react'

const Footer = () => {
    const date=new Date().getFullYear()
  return (
    <div style={{padding:'1%'}}>
      Copyright © {date} GOMYCODE 
    </div>
  )
}

export default Footer
