import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor (props){
        super(props)

        this.state = {
            term: ''
        }
        
        //We need to bind the context
        this.onInputChange = this.onInputChange.bind(this) 
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event){
        this.setState ({term: event.target.value})
    }

    onFormSubmit(event){ //We will fire the actione here and make the API request. 
        event.preventDefault();

        //we need to go and fetch weather data. 
        this.props.fetchWeather(this.state.term)
        console.log(this.state.term)
        this.setState({term: ''});
    }

    render(){
        return(
            <form onSubmit = {this.onFormSubmit}className='input-group'>
                <input
                    placeholder='Get a 5 day forcast'
                    className='form-control'
                    value= {this.state.term}
                    onChange = {this.onInputChange} 
                />
                <span className='input-group-btn'>
                <button type= 'submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );
    }
} 

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
} 
//This gives us access to this.props.fetchWeather

export default connect(null, mapDispatchToProps)(SearchBar)

//Null is saying "Thanks but we dont need any state here" It just fills that part of the parameter with something. 