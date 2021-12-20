import { Route, Switch } from 'react-router-dom'
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
        </Switch>
    )
}


export { Routes }