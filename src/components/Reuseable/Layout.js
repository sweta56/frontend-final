import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isAuth, signOut } from '../../auth/helper'

const withLocation = Component => props => {
    const location = useLocation();
  
    return <Component {...props} location={location} />;
  };




const Layout = ({ children, match, history }) => {
    const isActive = path => {
        if (match.path === path) {
            return { color: '#000' };
        } else {
            return { color: '#fff' };
        }
    };

    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to="/" className="nav-link" style={isActive('/')}>
                    Home
                </Link>
            </li>

            {!isAuth() && (
                <Fragment>
                    <li className="nav-item">
                        <Link to="/user_login" className="nav-link" style={isActive('/user_login')}>
                            Signin
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link" style={isActive('/signup')}>
                            Signup
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuth() && (
                <li className="nav-item">
                    <span className="nav-link">{isAuth().name}</span>
                </li>
            )}

            {isAuth() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: 'pointer', color: '#fff' }}
                        onClick={() => {
                            signOut(() => {
                                history.push('/');
                            });
                        }}
                    >
                        SignOut
                    </span>
                </li>
            )}
        </ul>
    );

    return (
        <Fragment>
            {nav()}
            <div className="container">{children}</div>
        </Fragment>
    );
};

export default withLocation( Layout)