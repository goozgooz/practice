import React from 'react';

class AddPlayerForm extends React.Component{
    state = {
        name: ''
    }
    
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value })
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
                    name='name'
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