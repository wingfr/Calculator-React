import { useState } from 'react';
import { Buttons } from './Buttons';
import { Input } from './Input';

export function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const replaced = input.replace(/×/g, '*').replace(/÷/g, '/');
        // eslint-disable-next-line no-new-func
        const result = Function(`return (${replaced})`)();
        setInput(String(result));
      } catch {
        setInput('Error');
      }
      return;
    }

    if (value === 'C') {
      setInput('');
      return;
    }

    setInput((prev) => prev + value);
  };

  return (
    <div className="calculator">
      <Input value={input || '0'} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}
