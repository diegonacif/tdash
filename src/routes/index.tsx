import { Route, Switch } from 'react-router-dom'
import { CreateEquipment } from '../pages/CreateEquipment'
import { CreateUser } from '../pages/CreateUser'
import { Customers } from '../pages/Customers'
import { Dashboard } from '../pages/Dashboard'
import Login from '../pages/Login'
import { ShowCustomer } from '../pages/ShowCustomer '
import { ShowProduct } from '../pages/ShowProduct'




import { PrivateRoutes } from './PrivatesRouter'


const Routes = () => {
    return (
        <Switch>          
            <Route path="/" exact component={Login} />
            <PrivateRoutes path="/dashboard" component={Dashboard} />
            <PrivateRoutes path="/equipamento/:id" component={ShowProduct} />
            <PrivateRoutes path="/novo-equipamento" component={CreateEquipment}/>       
            <PrivateRoutes path="/novo-usuario"  component={CreateUser}/>
            <PrivateRoutes path="/clientes"  component={Customers}/>
            <PrivateRoutes path="/cliente/:id" component={ShowCustomer} />
        </Switch>
    )
}


export { Routes }