import { Route, Switch } from 'react-router-dom'
import { CreateProduct } from '../pages/CreateEquipment'
import { Dashboard } from '../pages/Dashboard'
import Login from '../pages/Login'
import { ShowProduct } from '../pages/ShowProduct'



import { PrivateRoutes } from './PrivatesRouter'


const Routes = () => {
    return (
        <Switch>          
            <Route path="/" exact component={Login} />
            <PrivateRoutes path="/dashboard" component={Dashboard} />
            <PrivateRoutes path="/equipamento/:id" component={ShowProduct} />
            <PrivateRoutes path="/novo-equipamento" component={CreateProduct} />
        </Switch>
    )
}


export { Routes }