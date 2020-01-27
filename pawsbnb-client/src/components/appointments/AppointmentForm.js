import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchClients } from '../../actions/clientsActions'
import { addAppointment } from '../../actions/appointmentsActions'

class AppointmentForm extends Component {
    state = {
        title: "",
        client_id: "",
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
        console.log(this.state)
        this.props.addAppointment(this.state)
    }

    render() {
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
                        onChange={this.handleChange}
                    /><br/>
                    <label>Client:</label><br/>
                    <select name="client_id" value={this.state.client_id} onChange={this.handleChange}>
                        <option>Choose an existing client...</option>
                        {this.props.clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select><br/>
                    <label>Pets:</label><br/>
                    <input 
                        type="text" 
                        placeholder="ex. Spot"
                        name="pets"
                        value={this.state.pets}
                        onChange={this.handleChange}
                    /><br/>
                    <label>Services:</label><br/>
                    <textarea 
                        placeholder="ex. Boarding and Daily Walks"
                        name="services"
                        value={this.state.services}
                        onChange={this.handleChange}
                    /><br/>
                    <label>Medications:</label><br/>
                    <textarea 
                        placeholder="ex. Spot takes 1 joint supplement a day with breakfast"
                        name="medications"
                        value={this.state.medications}
                        onChange={this.handleChange}
                    /><br/>
                    <label>Details:</label><br/>
                    <textarea 
                        placeholder="ex. Spot can be food aggressive. Don't feed him around other animals."
                        name="details"
                        value={this.state.details}
                        onChange={this.handleChange}
                    /><br/>
                    <label>Start:</label><br/>
                    <input 
                        type="text" 
                        placeholder="ex. Jan 19 2010 9:00"
                        name="start"
                        value={this.state.start}
                        onChange={this.handleChange}
                    /><br/>
                    <label>End:</label><br/>
                    <input 
                        type="text" 
                        placeholder="ex. Jan 20 2010 18:00"
                        name="end"
                        value={this.state.end}
                        onChange={this.handleChange}
                    /><br/><br/>
                    <input type="submit" value="Make Appointment"/><br/><br/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    fetchClients: () => {dispatch(fetchClients())},
    addAppointment: (appointment) => {dispatch(addAppointment(appointment))}
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm)