import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../slice/counterSlice';
import './ATM.css';

const ATM = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.counter.value);
  const [inputValue, setInputValue] = useState(0);

  const handleDeposit = () => {
    if (inputValue < 0) {
      alert('Introduza um valor correto, tá bem? Abraço.');
    } else {
      dispatch(increment(Number(inputValue)));
      setInputValue('');
    }
  };

  useEffect(() => {
    document.title = balance === 0 ? `MB Simulator` : `Na conta: ${balance}€`;
  }, [balance]);

  const handleWithdraw = () => {
    if (inputValue < 0) {
      alert('Não é possível levantar um valor negativo');
    } else if (inputValue > balance) {
      alert('Não tem saldo suficiente');
    } else {
      dispatch(decrement(Number(inputValue)));
      setInputValue('');
    }
  };

  return (
    <div style={{ marginBottom: '5px' }}>
      <div className="atm-container">
        <h1>MB dev</h1>
        <div className="container-body" style={{ display: balance === Number('') ? 'block' : 'none' }}>
          <span className="atm-mesage">Bem-vind@! Insira o saldo a depositar:</span>
          <div className="atm-buttons atm-message">
            <input type="number" placeholder="Ex: 50" onChange={(e) => setInputValue(e.target.value)} min="0" />
            <button onClick={handleDeposit}>Depositar</button>
          </div>
        </div>
        <div className="container-body" style={{ display: balance !== Number('') && balance >= 0 ? 'block' : 'none' }}>
          <span className="balance">
            Valor na conta:&nbsp;<b>{balance}</b>&nbsp;€
          </span>
          <span className="input atm-message">Intoduza o valor a depositar/levantar:</span>
          <div className="atm-buttons">
            <input
              type="number"
              placeholder="Ex: 50"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleDeposit}>Depositar</button>
            <button onClick={handleWithdraw}>Levantar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATM;
