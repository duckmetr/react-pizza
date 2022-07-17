import { useState } from 'react'

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0)
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const changeCategory = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((name, index) => {
          return (
            <li
              key={index}
              onClick={() => changeCategory(index)}
              className={activeIndex === index ? 'active' : ''}>
              {name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
