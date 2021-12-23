import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'
import { useHistory } from 'react-router-dom'
import swal from "sweetalert";


interface Equipment {
    id: string;
    description: string;
    patrimony: string;
    serial: string;
    count_initial: string;
    count_final: string;
    category_id: string;
    customer_id: string;
    status: string;
    obs: string;
    supply: string;
    transformer: string;

}


interface EquipmentsProviderProps {
    children: ReactNode

}

type EquipmentInput = Omit<Equipment, "count_final" | "id">

interface EquipmentsContextData {
    equipments: Equipment[],
    createEquipment: (equipment: EquipmentInput) => Promise<void>
}

export const EquipmentsContext = createContext<EquipmentsContextData>(
    {} as EquipmentsContextData
)

export function EquipmentProvider({ children }: EquipmentsProviderProps) {

    const history = useHistory()

    const [equipments, setEquipments] = useState<Equipment[]>([])

    useEffect(() => {
        api.get("equipments")
            .then(response => {
                setEquipments(response.data)
            }).catch(error => console.log(error));

    }, [])

    //create novo equipamento
    async function createEquipment(equipmentInput: EquipmentInput) {

        try {

            const response = await api.post('equipments', {
                ...equipmentInput,
            })

            const equipment = response.data
            setEquipments([
                ...equipments,
                equipment

            ]);

            swal({
                title: "Feito",
                text: "Equipamento cadastrado com sucesso!",
                icon: "success",
            });


            history.push("dashboard")

        } catch (error) {

            swal({
                icon: "error",
                title: "Oops",
                text: "Algo deu errado, tente novamente mais tarde!",
            });

        }

    }


    return (
        <EquipmentsContext.Provider value={{ equipments, createEquipment }}>
            {children}
        </EquipmentsContext.Provider>
    )

}
export function useEquipments() {
    const context = useContext(EquipmentsContext)

    return context
}