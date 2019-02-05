import React, { Component } from 'react'
import './Search.scss';
import {connect} from 'react-redux';
import {fetchData, clearImages} from '../../Store/actions';
  

class Search extends Component {

    state ={
        searchImage:'',
    }

    handleChange = event => {
      const val = event.target.value;
      this.setState({ [event.target.name]: val }, () => {
        if(val === ''){
          this.props.dispatch(clearImages())
        }
      });
    }

    handleClick = event =>{
      event.preventDefault()
      console.log('in handle', this.state.searchImage);
      this.props.dispatch(fetchData(this.state.searchImage))
    }

  render() {
    return (
      <div className="flex-wrapper">
        <form className="form" onSubmit={this.handleClick}>
        
                <input onChange={this.handleChange} 
                      value={this.state.input} 
                      name="searchImage" 
                      type="text" 
                      placeholder="Search..."/>

                <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
    )
  }
}



export default connect()(Search)
