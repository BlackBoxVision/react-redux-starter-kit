import React, { Component, PropTypes } from 'react';
import Container from './container/Container';
import Body from './html/Body';
import Html from './html/Html';
import Config from '../../../server/config';


class IndexHtml extends Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        store: PropTypes.object.isRequired,
        styles: PropTypes.string.isRequired,
        title: PropTypes.string,
        icon: PropTypes.string
    }

    render() {
        const { content, store, styles, title, icon } = this.props;

        return (
            <Html lang='en'>
                <head>
                    <meta httpEquiv='Content-Type' content='text/html' charSet='utf-8'/>
                    <meta httpEquiv='X-UA-Compatible' content='IE=9; IE=8; IE=7; IE=EDGE'/>
                    <meta name='keywords' content=''/>
                    <meta name='author' content=''/>
                    <meta name='description' content=''/>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <meta name="theme-color" content="#673ab7"/>

                    <meta property='og:title' content=''/>
                    <meta property='og:type' content=''/>
                    <meta property='og:url' content=''/>
                    <meta property='og:image' content={icon}/>

                    <title>{title}</title>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <style dangerouslySetInnerHTML={{__html: styles}}/>
                </head>
                <Body>
                    <Container id='app' dangerouslySetInnerHTML={{__html: content}}/>
                    <script charSet='UTF-8' dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${JSON.stringify(store.getState())};`}}/>
                    <script charSet='UTF-8' src={`http://${Config.BASE_URL}/vendor.js`}/>
                    <script charSet='UTF-8' src={`http://${Config.BASE_URL}/app.js`}/>
                </Body>
            </Html>
        )
    }
}

export default IndexHtml;