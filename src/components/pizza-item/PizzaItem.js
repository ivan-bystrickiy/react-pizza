
function PizzaItem(props) {
  const { data } = props

  const addToCart = () => {
    console.log(data)
  }

  return (
    <div className="PizzaItem">
      <img src={data.image} />
      {data.name}
      <button onClick={addToCart}>+ Добавить</button>
    </div>
  )
}

export {PizzaItem}