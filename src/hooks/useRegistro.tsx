import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Registro {
  id: number;
  cliente: string;
  tombo: number;
  equipamento: string;
  status: string;
  atualizado: string;
};

