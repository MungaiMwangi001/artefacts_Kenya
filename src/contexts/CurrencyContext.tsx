import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  formatPrice: (price: number) => string;
  rates: { [key: string]: number };
  symbols: { [key: string]: string };
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const rates = {
  KES: 1,
  USD: 0.007,
  EUR: 0.0065
};

const symbols = {
  KES: 'KES',
  USD: '$',
  EUR: '€'
};

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState('KES');

  const formatPrice = (price: number): string => {
    const convertedPrice = price * rates[currency as keyof typeof rates];
    return `${symbols[currency as keyof typeof symbols]} ${convertedPrice.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      formatPrice,
      rates,
      symbols
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}; 