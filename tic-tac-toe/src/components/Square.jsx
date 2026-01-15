import './Square.css';

function Square({value, onClick}) {
    let style = null;
    if (value == 'X')
        style = 'square x'
    else if (value == 'O')
        style = 'square o'
    else
        style = 'square'
    console.log(style)
  return (
    <div>
      <button onClick = {onClick} className={style}>
         {value}
      </button>
    </div>
  )
}

export default Square
