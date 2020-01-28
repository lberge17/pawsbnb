import React, { Component } from 'react'
import { Business } from './Business'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchBusinesses } from '../../actions/businessActions'

class Businesses extends Component {
    // state = {
    //     businesses: []
    // }

    componentDidMount() {
        // axios.get("http://localhost:3000/businesses", { withCredentials: true })
        //     .then(resp => {
        //         this.setState({
        //             businesses: resp.data
        //         })
        //     })
        //     .catch(error => {
        //         alert("error getting businesses")
        //         console.log(error)
        //     })

        this.props.fetchBusinesses()
    }

    render() {
        return (
            <div>
                <h1>All Businesses</h1>
                {this.props.businesses.map(b => <Business key={b.id} {...b}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
})

export default connect(mapStateToProps, mapDispatchToProps)(Businesses)