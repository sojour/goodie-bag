import React from 'react'
const SingleCandy = (props) => {
  const { name, imageUrl } = props.candy
  return (
    <div className='indCandy'>
      <h2>{name}</h2>
      <img src={imageUrl} />
    </div>
  )
}
export default SingleCandy
