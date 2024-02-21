import React, { Component } from 'react'
import './Trip.css'
import TripData from './TripData'

export class Trip extends Component {
  render() {
    return (
      <div>
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover destinations using Google Maps</p>
            <div className="tripcard">
                <TripData
                image={require('./assets/5.jpg')}
                heading='Trip in Indonesia'
                text="Indonesia, officialy the republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific Oceans. It consists of over 17,000 Islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />
                <TripData
                image={require('./assets/8.jpg')}
                heading='Trip in Malaysia'
                text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of the Borneo. It's Known for its beaches,rainforests and mix of Malay, chinese, Indian and European cultural influences."
                />
                <TripData
                image={require('./assets/6.jpg')}
                heading='Trip in France'
                text="France, in Western Europe encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is formed for its fashion houses, classical art museums inluding the Louvre and monuments like the Eiffel Tower."
                />
            </div>
        </div>
      </div>
    )
  }
}
export default Trip