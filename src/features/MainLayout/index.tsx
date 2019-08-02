import React from 'react';
import Home from '../Home';
import SignUp from '../SignUp';
import Snacks from '../Snacks';

class MainLayout extends React.Component<{}, {}> {
    render() {
        return (
            <div className="site-bd">
                <Home />
                <Snacks />
                <SignUp />
            </div>
        );
    }
}

export default MainLayout;