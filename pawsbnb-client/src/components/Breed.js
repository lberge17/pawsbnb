import React, {Component} from 'react'

export default class Breed extends Component {
    render() {
        return <div>{this.props.breed.name}</div>
    }
}