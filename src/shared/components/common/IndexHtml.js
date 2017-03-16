import React, { Component, PropTypes } from 'react';
import Container from './container/Container';
import Body from './html/Body';
import Html from './html/Html';


class IndexHtml extends Component {
    static propTypes = {
        baseUrl: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        store: PropTypes.object.isRequired,
        styles: PropTypes.string.isRequired,
	    metadata: PropTypes.array,
	    links: PropTypes.array,
        title: PropTypes.string,
        icon: PropTypes.string
    }

    static defaultProps = {
    	title: 'Awesome App',
        metadata: [
            {
                httpEquiv: 'Content-Type',
                content: 'text/html',
                charSet: 'utf-8'
            },
            {
	            httpEquiv: 'X-UA-Compatible',
	            content: 'IE=9; IE=8; IE=7; IE=EDGE',
            },
	        {
		        name: 'viewport',
		        content: 'width=device-width, initial-scale=1.0',
	        },
	        {
		        name: 'mobile-web-app-capable',
		        content: 'yes',
	        },
	        {
		        name: 'theme-color',
		        content: '#673ab7',
	        }
        ],
	    links: [
		    {
		    	href: 'https://fonts.googleapis.com/css?family=Roboto',
			    rel: 'stylesheet'
		    }
	    ]
    }

    render() {
        const { content, store, styles, title, baseUrl, metadata, links } = this.props;

        return (
            <Html lang='en'>
                <head>
	                <title>{title}</title>
                    {metadata.map(this.renderMetadata)}
	                {links.map(this.renderLinks)}
                    <style dangerouslySetInnerHTML={{__html: styles}}/>
                </head>
                <Body>
                    <Container id='app' dangerouslySetInnerHTML={{__html: content}}/>
                    <script charSet='UTF-8' dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${JSON.stringify(store.getState())};`}}/>
                    <script charSet='UTF-8' src={`http://${baseUrl}/vendor.js`}/>
                    <script charSet='UTF-8' src={`http://${baseUrl}/app.js`}/>
                </Body>
            </Html>
        )
    }

    renderMetadata = (metadata, index) => <meta key={`meta-${index}-key`} {...metadata}/>;

    renderLinks = (link, index) => <link key={`link-${index}-key`} {...link}/>
}

export default IndexHtml;