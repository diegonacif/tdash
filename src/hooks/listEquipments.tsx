import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'



interface IRequestEquipment {
    id: string;
    description: string;
    patrimony: number;
    serial: string;
    count_initial: number;
    count_final: number;
    category_id: string;
    customer_id: string;
    status: string;
    obs: string;
    supply: string;
    transformer: number;

}

interface Equipment {
    id: string;
    description: string;
    patrimony: number;
    serial: string;
    count_initial?: number;
    count_final?: number;
    category: {
        name: string
    };
    customer: {
        name: string
    };
    status: string;
    obs?: string
    supply: string;
    updated_at: Date
}


interface EquipmentsProviderProps {
    children: ReactNode

}

type EquipmentInput = Omit<IRequestEquipment, "count_final" | "id">

interface EquipmentsContextData {
    equipments: Equipment[],
    createEquipment: (equipment: EquipmentInput) => Promise<void>   
   

}

export const EquipmentsContext = createContext<EquipmentsContextData>(
    {} as EquipmentsContextData
)

export function EquipmentProvider({ children }: EquipmentsProviderProps) {  

    const [equipments, setEquipments] = useState<Equipment[]>([])

    useEffect(() => {
        api.get("equipments")
            .then(response => {          

                setEquipments(response.data)
            }).catch(error => console.log(error));

    }, [])


    //create novo equipamento
    async function createEquipment(equipmentInput: EquipmentInput) {

        const response = await api.post('equipments', {
            ...equipmentInput,
        })
        const equipment = response.data

        setEquipments([
            ...equipments,
            equipment

        ]);
    }



    return (
        <EquipmentsContext.Provider value={{ equipments, createEquipment}}>
            {children}
        </EquipmentsContext.Provider>
    )

}
export function useEquipments() {
    const context = useContext(EquipmentsContext)

    return context
}