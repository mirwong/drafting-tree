/* jshint esversion: 6 */

import React, { useState, Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {
    Box,
    Button,
    Collapsible,
    Heading,
    Grommet,
    Layer,
    ResponsiveContext,
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';


import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

import { withAuthentication } from '../Session';

const theme = {
    global: {
        colors: {
            brand: '#00274c'
        },
        font: {
            family: 'Georgia',
            size: '14px'
        },
    },
}

const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{left: 'medium', right: 'small', vertical: 'small'}}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
)

const App = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
      <Router>
        <Grommet theme={theme}>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill>
                        <AppBar>
                            <Heading level='3' margin='none'>Heading</Heading>
                            <Button
                                icon={<Notification />}
                                onClick={() => {setShowSidebar(!showSidebar)}} />
                            <Navigation/>
                        </AppBar>
                        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                            <Box flex align='center' justify='center'>
                                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                            </Box>
                            {(!showSidebar || size !== 'small') ? (
                                <Collapsible direction="horizontal" open={showSidebar}>
                                    <Box
                                        flex
                                        width='small'
                                        background='light-1'
                                        elevation='small'
                                        align='center'
                                        justify='center'
                                    >
                                        sidebar stuff
                                    </Box>
                                </Collapsible>
                            ): (
                                <Layer>
                                    <Box
                                        background='light-1'
                                        tag='header'
                                        justify='end'
                                        align='center'
                                        direction='row'
                                    >
                                    <Button
                                        icon={<FormClose />}
                                        onClick={() => setShowSidebar(false)}
                                    />
                                    </Box>
                                    <Box
                                        fill
                                        background='light-1'
                                        align='center'
                                        justify='center'
                                    >
                                    sidebar layer
                                    </Box>
                                </Layer>
                            )}

                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
      </Router>
    );
};

// <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
// <Route path={ROUTES.SIGN_IN} component={SignInPage} />
// <Route
//   path={ROUTES.PASSWORD_FORGET}
//   component={PasswordForgetPage}
// />
// <Route path={ROUTES.HOME} component={HomePage} />
// <Route path={ROUTES.ACCOUNT} component={AccountPage} />
// <Route path={ROUTES.ADMIN} component={AdminPage} />

export default withAuthentication(App);
