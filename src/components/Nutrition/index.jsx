import React from 'react'
import NutritionHeroCarousel from './NutritionHeroCarousel'
import NutritionCard from './NutritionCard'
import NutritionCarousel from './NutritionCarousel'
function Nutrition() {
    
    return (
    <div className='m-10'>
      <NutritionHeroCarousel/>
      <div className='my-6'>
        <NutritionCarousel/>
      </div>
      <div className='flex justify-around flex-wrap'>
      <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />

        
      </div>
    </div>
  )
}

export default Nutrition
