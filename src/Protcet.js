import React from 'react';
import { Link } from 'react-router-dom';
import Testnav from './Testnav'

class Protect extends React.Component {

    render() {

        <div>
           <h1>hello</h1>
        </div>
        const Component = this.props.Testnav;
        const isAuthenticated = localStorage.getItem('token');
    
        return isAuthenticated ? (
            <Component />
        ) : (
            <Link to="./Testnav" />
        );
    }
}

export default Protect;