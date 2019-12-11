import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route, Link } from 'react-router-dom'
import './ErrorBoundary.css'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error){
        return { hasError: true };
    }

    render() {
        if(this.state.hasError){
            return (
                <header className='App__header' className='errorHeader'>
            <h1>
              <Link to='/'>Noteful</Link>
              {' '}
              <FontAwesomeIcon icon='check-double' />
            </h1>
            <main className='App__main' className='errorMain'>
                <h2>We ran into a problem displaying your notes.</h2>
            </main>
            
          </header>
                
            )
        }
        return this.props.children;
    }


}