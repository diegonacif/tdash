import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'


interface Equipment {
    id: string;
    description: string;
    patrimony: number;
    serial: string;
    customer_id: string;
    status: string;
    supply: string;
    updated_at: Date

}
interface EquipmentsProviderProps {
    children: ReactNode

}

interface EquipmentsContextData {
    equipments: Equipment[],
}

export const EquipmentsContext = createContext<EquipmentsContextData>(
    {} as EquipmentsContextData
)

export function TransactionsProvider({ children }: EquipmentsProviderProps) {

    const [equipments, setEquipments] = useState<Equipment[]>([])

    useEffect(() => {
        api.get('equipments')
            .then(response => {

                setEquipments(response.data)
            }).catch(error => console.log(error));

    }, [])


    return (
        <EquipmentsContext.Provider value={{ equipments }}>
            {children}

        </EquipmentsContext.Provider>
    )

}
export function useEquipments() {
    const context = useContext(EquipmentsContext)

    return context
}