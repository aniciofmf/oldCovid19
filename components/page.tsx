import React from 'react'

interface Props {
  children: any
}

export default (props: Props) => {
  const { children } = props
  return (
    <div className="h-screen bg-gray-200">
      {children}
    </div>
  )
}
