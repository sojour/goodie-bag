import React from 'react'
import { connect } from 'react-redux'
import SingleCandy from './SingleCandy'

const ListCandies = (props) => {
  const { candies } = props
  return (
    <div>
      {candies.map(candy => (
        <SingleCandy key={candy.id} candy={candy} />
      ))}

    </div>
  )
}

const mapState = state => ({
  candies: state.candies
})

export default connect(mapState)(ListCandies)
