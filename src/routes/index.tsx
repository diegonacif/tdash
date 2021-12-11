import { Route, Switch } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard'
import Login from '../pages/Login'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    )
}


export { Routes }