import { createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface IModal {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface addModalProviderProps {
  children: ReactNode;
};

