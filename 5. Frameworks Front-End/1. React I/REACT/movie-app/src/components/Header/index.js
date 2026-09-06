import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props); 
        this.state = {
            isLoggingIn: false,
            
        }; 
    }; 

    handleButtonClick = () => {
        console.log('Button clicked');
        this.setState({isLoggingIn: true});
    }


    render(){
        return (
            <header>
                <button onClick={this.handleButtonClick}>Click me</button>
                <h1>{this.props.appName}</h1>
                <p>{this.state.isLoggingIn ? 'Estas conectado' : 'No estas conectado'}</p>
            </header>
        ); 
    }
}; 

export default Header;