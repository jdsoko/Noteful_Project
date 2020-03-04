import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
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
                <header className='App__header' >
            <h1 className='errorHeader'>
              <Link to='/'>Noteful</Link>
              {' '}
              <FontAwesomeIcon icon='check-double' />
            </h1>
            <main className='App__main' >
                <h2 className='errorMain'>We ran into a problem displaying your notes.</h2>
            </main>
            
          </header>
                
            )
        }
        return this.props.children;
    }


}