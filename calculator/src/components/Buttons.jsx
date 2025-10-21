import './Buttons.css';

export function Buttons({ onButtonClick }) {
  const buttons = [
    '9', '8', '7', '×',
    '6', '5', '4', '÷',
    '3', '2', '1', '+',
    '0', '-', '=', 'C'
  ];

  return (
    <div className="buttons">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={'normal-size'}
          onClick={() => onButtonClick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
