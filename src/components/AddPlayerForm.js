import React from 'react';

class AddPlayerForm extends React.Component{
    state = {
        name: ''
    }
    
    handleChange = (e) => {
        this.setState({name: e.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddPlayer(this.state.name);
        this.setState({name: ''});
    }
    
    render(){
        return (
            <form  onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    onChange = {this.handleChange}
                    placeholder='Enter Player Name'
                    value={this.state.name}
                />
               
                <input
                    type='submit'
                    value='Add Player'
                />
                
                
            </form>
        )
    }
}

export default AddPlayerForm;