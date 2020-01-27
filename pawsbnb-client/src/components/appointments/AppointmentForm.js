import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchClients } from '../../actions/clientsActions'

class AppointmentForm extends Component {
    state = {
        title: "",
        clientId: "",
        pets: "",
        services: "",
        medications: "",
        details: "",
        start: "",
        end: ""
    }

    componentDidMount(){
        this.props.fetchClients()
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Add an Apppointment</h1>
                {this.props.requesting ? <p>...loading</p> : null}
                <form onSubmit={this.handleSubmit}>
                    <p>Please make sure your dates are formatted correctly with 24 time</p>
                    <p>ex. Apr 28 2018 17:00</p>
                    <label>Title:</label><br/>
                    <input 
                        type="text" 
                        placeholder="ex. Spot - Boarding"
                        name="title"
                        value={this.state.title}
                    /><br/>
                    <label>Client:</label><br/>
                    <select name="clientId" value={this.state.clientId}>
                        <option>Choose an existing client...</option>
                        {this.props.clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select><br/>
                    <label>Pets:</label><br/>
                    <input 
                        type="text" 
                        placeholder="ex. Spot"
                        name="pets"
                        value={this.state.pets}
                    /><br/>
                    <label>Services:</label><br/>
                    <textarea 
                        placeholder="ex. Boarding and Daily Walks"
                        name="services"
                        value={this.state.services}
                    /><br/>
                    <label>Medications:</label><br/>
                    <textarea 
                        placeholder="ex. Spot takes 1 joint supplement a day with breakfast"
                        name="medications"
                        value={this.state.medications}
                    /><br/>
                    <label>Details:</label><br/>
                    <textarea 
                        placeholder="ex. Spot can be food aggressive. Don't feed him around other animals."
                        name="details"
                        value={this.state.details}
                    /><br/>
                    <label>Start:</label><br/>
                    <input 
                        type="text" 
                        placeholder="ex. Jan 19 2010 9:00"
                        name="start"
                        value={this.state.start}
                    /><br/>
                    <label>End:</label><br/>
                    <input 
                        type="text" 
                        placeholder="ex. Jan 20 2010 18:00"
                        name="end"
                        value={this.state.end}
                    /><br/><br/>
                    <input type="submit" value="Make Appointment"/><br/><br/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    fetchClients: () => {dispatch(fetchClients())}
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm)