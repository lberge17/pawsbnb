import React, {Component} from 'react'
import Breed from './Breed'

export default class Breeds extends Component {
    state = {
        breeds: [{name: "Siberian", temperament: "Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate"}]
    }

    render() {
        return (
            <div>
                <p>Breeds</p>
                <div>
                    {this.state.breeds.map(breed => <Breed breed={breed} />)}
                </div>
            </div>
        )
    }
}