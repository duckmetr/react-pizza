function Categories({ categoryId, changeCategoryId }) {
  const categories = ['Всі', "М'ясні", 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті']

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
