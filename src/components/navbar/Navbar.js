import React from 'react'

import NavbarHeader from './NavbarHeader'
import NavbarContent from './NavbarContent'

class Navbar extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <nav className='navbar navbar-inverse'>
                <div className='container-fluid'>
                    <NavbarHeader brandName='Super Invoice'/>
                    <NavbarContent/>
                </div>
            </nav>
        );
    }
}


export default Navbar
