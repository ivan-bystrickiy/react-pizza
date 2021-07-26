
function PizzaItem(props) {
  const { data } = props

  return (
    <div className="PizzaItem">
      <img src={data.image} />
      {data.name}
      <button>+ Добавить</button>
    </div>
  )
}

export {PizzaItem}