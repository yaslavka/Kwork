import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Redirect, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import omit from 'lodash-es/omit'
import r from '../constants/routes.constants'
import RouteWithSubRoutes from "../components/RouteWithSubRoutes";
import {privateRouteConfig} from '../routes'


function PrivateRoutes({history}) {
    return(
        <>
            <BrowserRouter history={history}>
                <Router>
                    <main>
                        <Switch>
                            {privateRouteConfig.map((route) => (
                                <RouteWithSubRoutes key={route.id} {...omit(route, 'id')} />
                            ))}

                            <Redirect to={r.root} />
                        </Switch>
                    </main>
                </Router>
            </BrowserRouter>
        </>
    )
}
PrivateRoutes.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default PrivateRoutes
