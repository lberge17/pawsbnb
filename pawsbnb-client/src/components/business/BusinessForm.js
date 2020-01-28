import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBusiness, updateBusiness } from '../../actions/businessActions'

class BusinessForm extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            title: props.auth.business.title || "",
            description: props.auth.business.description || "",
            services: props.auth.business.services || "",
            location: props.auth.business.location || "",
            zip: props.auth.business.zip || "",
            phone: props.auth.business.phone || "",
            email: props.auth.business.email || "",
            website: props.auth.business.website || ""
        }
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.addBusiness({business: this.state})
        this.props.closeForm()
    }

    handleUpdate = (event) => {
        event.preventDefault()

        this.props.updateBusiness({...this.state, id: this.props.auth.business.id})
        this.props.closeForm()
    }

    render() {
        return (
            <div className="form-container">
                <form className="busi-form box" onSubmit={this.props.auth.business.title ? this.handleUpdate : this.handleSubmit}>
                    <div className="close"><button onClick={this.props.closeForm}>X</button></div>
                    <h2 className="busi-form">{this.props.auth.business.title ? 'Edit':'Add'} Your Business</h2>
                    <input className="busi-form item" type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} required/><br/><br/>
                    <textarea className="busi-form item" name="description" value={this.state.description} placeholder="description" onChange={this.handleChange}></textarea><br/><br/>
                    <textarea className="busi-form item" name="services" value={this.state.services} placeholder="services you offer" onChange={this.handleChange}></textarea><br/><br/>
                    <input className="busi-form item" type="text" name="location" value={this.state.location} placeholder="location" required onChange={this.handleChange}/><br/>
                    <input className="busi-form item" type="number" name="zip" value={this.state.zip} placeholder="zip code" required onChange={this.handleChange}/><br/>
                    <input className="busi-form item" type="text" name="phone" value={this.state.phone} placeholder="phone#" onChange={this.handleChange}/><br/>
                    <input className="busi-form item" type="text" name="email" value={this.state.email} placeholder="email" onChange={this.handleChange}/><br/>
                    <input className="busi-form item" type="text" name="website" value={this.state.website} placeholder="website (https://www.ex.com)" onChange={this.handleChange}/><br/>
                    <input className="busi-form item" type="submit" value={this.props.auth.business.title ? 'Update Business' : 'Add Business'}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    addBusiness: (business) => dispatch(addBusiness(business)),
    updateBusiness: (business) => dispatch(updateBusiness(business))
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessForm)