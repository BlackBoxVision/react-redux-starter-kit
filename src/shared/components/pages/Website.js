import React, {Component, PropTypes} from 'react';
import WebsiteContainer from '../atoms/WebsiteContainer';
import Header from '../organisms/Header';
import Home from '../organisms/Home';
import WhoWeAre from '../organisms/WhoWeAre';
import WhatWeDo from '../organisms/WhatWeDo';
import MeetTheTeam from '../organisms/MeetTheTeam';
import Portfolio from '../organisms/Portfolio';
import Contact from '../organisms/Contact';
import Footer from '../organisms/Footer';

class Website extends Component {
    render() {
        return (
            <WebsiteContainer>
                <Header/>
                <Home/>
                <WhoWeAre/>
                <WhatWeDo/>
                <MeetTheTeam/>
                <Portfolio/>
                <Contact/>
                <Footer/>
            </WebsiteContainer>
        )
    }
}

export default Website;