import './Btn.scss'

function Btn(props) {

  let {
    className: customClassName = '',
    style = 'fill',
    ...rest
  } = props

  let className = "btn "
  className += `btn-${style}-primary `
  className += customClassName

  return (
    <button className={className} {...rest}>
      {props.children}
    </button>
  )
}

export { Btn }