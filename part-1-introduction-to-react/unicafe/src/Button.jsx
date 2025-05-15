export default function Button({onClick, text}) {
  return (
    <button style={{ margin: "2px" }} onClick={onClick}>
      {text}
    </button>
  )
}
