import React, { createContext, useContext, useState, useEffect } from 'react';

const rates = {
  KES: 1,
  USD: 0.007,
  EUR: 0.006,
};

const symbols = {
  KES: 'Ksh',
  USD: '$',
  EUR: '€',
};

const CurrencyContext = createContext({
  currency: 'KES',
  setCurrency: (c: string) => {},
  rates,
  symbols,
});

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState('KES');

  useEffect(() => {
    const stored = localStorage.getItem('currency');
    if (stored) setCurrency(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates, symbols }}>
      {children}
    </CurrencyContext.Provider>
  );
}; 