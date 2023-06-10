import { useState } from "react";
import "./App.css";
import Square from "./square.jsx";

function App() {
  const [value, SetValue] = useState(Array(9).fill(null));
  const [nextMove, SetNextMove] = useState(true);

  function handleClick(i) {
    if (value[i] || calculateWinner(value)) {
      return;
    }
    const copySquares = [...value];

    if (nextMove) {
      copySquares[i] = "X";
    } else {
      copySquares[i] = "O";
    }
    SetNextMove(!nextMove);
    SetValue(copySquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      <div className="board-wrapper">
        <h1>Tic tac toe</h1>

        {calculateWinner(value) ? <p>Someone's won !</p> : <p>Keep playing</p>}

        <div className="board">
          <Square value={value[0]} handleClick={() => handleClick(0)} />
          <Square value={value[1]} handleClick={() => handleClick(1)} />
          <Square value={value[2]} handleClick={() => handleClick(2)} />
          <Square value={value[3]} handleClick={() => handleClick(3)} />
          <Square value={value[4]} handleClick={() => handleClick(4)} />
          <Square value={value[5]} handleClick={() => handleClick(5)} />
          <Square value={value[6]} handleClick={() => handleClick(6)} />
          <Square value={value[7]} handleClick={() => handleClick(7)} />
          <Square value={value[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default App;
