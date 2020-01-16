import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Button, DatePicker, version } from 'antd';
import 'antd/dist/antd.css';

class App extends React.Component{
    
    constructor(){
        super()
        this.state = {
            value: 0
        }
        this.clickedPos = this.clickedPos.bind(this);
        this.clickedNeg = this.clickedNeg.bind(this);
        
    }
    
    clickedPos(){
        this.setState((prev) =>{
            return {
                value: prev.value + 1
            }
        })
    }
    
    clickedNeg(){
        this.setState((prev) => {
            return {
                value: prev.value - 1
            }
        })
        
    }
    
    render(){
        return(
        
            <div>
            
            <h1>{this.state.value}</h1>
            
                <Button onClick={this.clickedPos}>This is a regular button</Button>
                <Button type='danger' onClick={this.clickedNeg}>This is a dangerous button</Button>
            
            </div>
            
        )
    }
    
    
}


export default App