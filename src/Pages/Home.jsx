import { useState, useEffect } from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/Skeleton'

function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [sortId, setSortId] = useState(0)
  const [open, setOpen] = useState(false)

  const changeCategoryId = (id) => {
    setCategoryId(id)
    setIsLoading(true)
  }

  const changeSortId = (id) => {
    setSortId(id)
    setOpen(false)
  }

  const sortItems = ['rating', 'price', 'category']
  const sortBy = sortItems[sortId]

  useEffect(() => {
    fetch(
      `https://62d6de5649c87ff2af2ef2f4.mockapi.io/items?category=${
        categoryId || ''
      }&sortBy=${sortBy}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json)
        setIsLoading(false)
      })
  }, [categoryId, sortBy])

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} changeCategoryId={changeCategoryId} />
        <Sort sortId={sortId} changeSortId={changeSortId} open={open} setOpen={setOpen} />
      </div>
      <h2 className="content__title">Усі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  )
}

export default Home
