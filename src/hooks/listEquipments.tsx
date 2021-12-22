import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'


interface Equipment {
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


interface EquipmentsProviderProps {
    children: ReactNode

}

type EquipmentInput = Omit<Equipment, "count_final" | "id">

interface EquipmentsContextData {
    equipments: Equipment[],
    createEquipment: (equipment: EquipmentInput) => Promise<void>
    deleteEquipment: (id: string) => Promise<void>




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
    //deletar um
    async function deleteEquipment(id: string) {
        if (window.confirm("Deseja realmente excluir esse equipamneto?")) {
            await api.delete(`equipments/${id}`)

            await api.get("equipments")
                .then(response => {
                    setEquipments(response.data)

                })
        }

    }

    return (
        <EquipmentsContext.Provider value={{ equipments, createEquipment, deleteEquipment }}>
            {children}
        </EquipmentsContext.Provider>
    )

}
export function useEquipments() {
    const context = useContext(EquipmentsContext)

    return context
}