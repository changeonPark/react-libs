import "./index.css"

type Props = {
  text: string
  onClick: () => void
}

const Button = ({ onClick, text }: Props) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
