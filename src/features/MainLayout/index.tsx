import React from 'react';
import Home from '../Home';
import SignUp from '../SignUp';
import Snacks from '../Snacks';

export interface MainLayoutProps { };

export interface MainLayoutState { };

class MainLayout extends React.Component<MainLayoutProps, MainLayoutState> {
    constructor(props: MainLayoutProps) {
        super(props);
        this.state = {}
    }

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