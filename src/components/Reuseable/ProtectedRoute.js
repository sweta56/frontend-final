import React from 'react'
import { Navigate, Route } from 'react-router-dom'

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth)
                    return <Component />
                return <Navigate to={{ pathname: '/', state: { from: props.location } }} />
            }}
        />
    )
}

export default ProtectedRoute;
