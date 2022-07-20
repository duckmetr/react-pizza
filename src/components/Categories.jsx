function Categories({ categoryId, changeCategoryId }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((name, index) => {
          return (
            <li
              key={index}
              onClick={() => changeCategoryId(index)}
              className={categoryId === index ? 'active' : ''}>
              {name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
