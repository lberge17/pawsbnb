import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchClients } from '../../actions/clientsActions'
import { addAppointment, updateAppointment, deleteAppointment } from '../../actions/appointmentsActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class AppointmentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.appointment.title || "",
            client_id: props.appointment.client_id || "",
            pets: props.appointment.pets || "",
            services: props.appointment.services || "",
            medications: props.appointment.medications || "",
            details: props.appointment.details || "",
            start: props.appointment.start || "",
            end: props.appointment.end || ""
        }
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
        if (this.props.appointment) {
            this.props.updateAppointment({...this.state, id: this.props.appointment.id})
        } else {
            this.props.addAppointment(this.state)
        }
    }

    confirmDelete = () => {
        if(window.confirm("Are you sure you wish to delete this event?")) {
            console.log('deleting event')
            this.props.deleteAppointment(this.props.appointment.id)
            this.props.closeAppointment() 
        } else {
            console.log('canceling event deletion')
        }
    }

    render() {
        return (
            <div>
                <h3>{this.props.appointment.title ? "Update Appointment" : "Add an Appointment"}</h3>
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
                    <input type="submit" value={this.props.appointment.title ? "Update Appointment" : "Make Appointment"}/><br/><br/>
                    {this.props.appointment.title ? <div className="pointer-cursor"><FontAwesomeIcon icon={faTrash} onClick={this.confirmDelete}/><br/><br/></div> : null}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    fetchClients: () => {dispatch(fetchClients())},
    addAppointment: (appointment) => {dispatch(addAppointment(appointment))},
    updateAppointment: (appointment) => {dispatch(updateAppointment(appointment))},
    deleteAppointment: (id) => {dispatch(deleteAppointment(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm)