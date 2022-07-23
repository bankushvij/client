import React from 'react'

function NutritionHeroCards(props) {
  return (
    <div className="w-full h-64">
      <img
        src={props.image}
        alt="nutrition banner"
        className="w-full h-full object-center rounded-lg"
      />
    </div>
  )
}

export default NutritionHeroCards
