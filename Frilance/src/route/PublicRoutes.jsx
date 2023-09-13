import React from 'react'
import PropTypes from 'prop-types'
import {Switch, BrowserRouter as Router, BrowserRouter, Redirect} from 'react-router-dom'
import omit from 'lodash-es/omit'
import r from '../constants/routes.constants'
import RouteWithSubRoutes from "../components/RouteWithSubRoutes";
import {publicRouteConfig} from '../routes'
import HeaderPublic from "../components/HeaderPublic";


function PublicRoutes({history}) {
    return(
        <>
            <BrowserRouter history={history}>
                <Router>
                    <div>
                        <HeaderPublic/>
                        <Switch>
                            {publicRouteConfig.map((route) => (
                                <RouteWithSubRoutes key={route.id} {...omit(route, 'id')} />
                            ))}

                            <Redirect to={r.root} />
                        </Switch>
                    </div>
                </Router>
            </BrowserRouter>
        </>
    )
}
PublicRoutes.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default PublicRoutes
