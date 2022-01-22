import { Route, Switch } from 'react-router-dom'
import { CreateEquipment } from '../pages/CreateEquipment'
import { CreateUser } from '../pages/CreateUser'
import { Customers } from '../pages/Customers'
import { Dashboard } from '../pages/Dashboard'
import { EquipmentsCustomer } from '../pages/EquipmentsCustomer'
import { EquipmentsMaintenance } from '../pages/EquipmentsMaintenance'
import { EquipmentsStock } from '../pages/EquipmentsStock'

import Login from '../pages/Login'
import { ProfileUser } from '../pages/ProfileUser'
import { ShowCustomer } from '../pages/ShowCustomer '
import { ShowEquipment } from '../pages/ShowEquipment'




import { PrivateRoutes } from './PrivatesRouter'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoutes path="/dashboard" component={Dashboard} />
            <PrivateRoutes path="/equipamento/:id" component={ShowEquipment} />
            <PrivateRoutes path="/novo-equipamento" component={CreateEquipment} />
            <PrivateRoutes path="/editar-equipamento/:id" component={CreateEquipment} />
            <PrivateRoutes path="/perfil-usuario" component={ProfileUser} />
            <PrivateRoutes path="/gerenciar-usuarios" component={CreateUser} />
            <PrivateRoutes path="/clientes" component={Customers} />
            <PrivateRoutes path="/cliente/:id" component={ShowCustomer} />
            <PrivateRoutes path="/equipamentos-em-manutencao" component={EquipmentsMaintenance} />
            <PrivateRoutes path="/equipamentos-em-cliente" component={EquipmentsCustomer} />
            <PrivateRoutes path="/equipamentos-em-estoque" component={EquipmentsStock} />
        </Switch>
    )
}


export { Routes }