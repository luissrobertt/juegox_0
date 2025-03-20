import React, { useState } from "react";
import "./styles.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    setHistory([...history, newBoard]);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setHistory([]);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  return (
    <div className="game-container">
      <div className="game-content">
        <div className="board-container">
          <div className="board">
            {board.map((value, index) => (
              <button key={index} className="square" onClick={() => handleClick(index)}>
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="moves-container">
          <h3>Movimientos:</h3>
          {history.map((_, move) => (
            <button key={move} className="move-button" onClick={() => setBoard(history[move])}>
              Ir al movimiento #{move + 1}
            </button>
          ))}
        </div>
      </div>
      <button className="reset-button" onClick={restartGame}>Reiniciar Juego</button>
      <div className="status-message">
        {winner ? `Ganador: ${winner}` : isDraw ? "Empate" : `Turno de: ${xIsNext ? "X" : "O"}`}
      </div>
      <button className="info-button" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Mostrar menos" : "Mostrar más"}
      </button>
      {showInfo && (
        <div className="extra-info">
          <img src="/imagenx0.jpg" alt="Imagen del juego" className="game-image" />
          <h3>Información del juego:</h3>
            <p>
              <strong>El juego "3 en raya"</strong>, también conocido como "tres en línea", "X 0" o "Tic-Tac-Toe", es un juego clásico de lápiz y papel para dos jugadores.
              <br /><br />
              <strong>Objetivo:</strong>
              <br />
              El objetivo del juego es alinear tres de tus símbolos (ya sean "X" o "O") en una fila horizontal, vertical o diagonal en un tablero de 3x3.
              <br /><br />
              <strong>Cómo jugar:</strong>
              <br /><br />
              <strong>Tablero:</strong>
              <br />
              Se juega en un tablero de 3x3, que consiste en 9 casillas.
              <br /><br />
              <strong>Jugadores:</strong>
              <br />
              Dos jugadores participan en el juego.
              <br />
              Un jugador usa el símbolo "X" y el otro usa el símbolo "O".
              <br /><br />
              <strong>Turnos:</strong>
              <br />
              Los jugadores se turnan para marcar una casilla vacía en el tablero con su símbolo.
              <br />
              El jugador que usa "X" generalmente comienza el juego.
              <br /><br />
              <strong>Ganar:</strong>
              <br />
              El primer jugador en lograr alinear tres de sus símbolos en una fila, columna o diagonal gana el juego.
              <br /><br />
              <strong>Empate:</strong>
              <br />
              Si todas las casillas del tablero están llenas y ningún jugador ha logrado alinear tres de sus símbolos, el juego termina en empate.
              <br /><br />
              <strong>Estrategias básicas:</strong>
              <br /><br />
              <strong>Control del centro:</strong>
              <br />
              Ocupar la casilla central en el primer turno puede darte una ventaja estratégica.
              <br /><br />
              <strong>Bloqueo:</strong>
              <br />
              Siempre presta atención a las posibles filas de tu oponente y bloquéalas para evitar que ganen.
              <br /><br />
              <strong>Crear oportunidades:</strong>
              <br />
              Busca crear dos filas potenciales al mismo tiempo para forzar a tu oponente a bloquear solo una de ellas, permitiéndote ganar en el siguiente turno.
            </p>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
