import React from 'react'

// Components
import IntroHeader from 'components/home/Header'
import Navbar from 'components/navbar/Navbar'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <IntroHeader/>
            </div>
        );
    }
}

export default Home;
