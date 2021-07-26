import './Btn.scss'

function Btn(props) {

  const { className: customClassName = '' } = props

  return (
    <button className={"btn btn-primary " + customClassName}>
      {props.children}
    </button>
  )
}

export { Btn }