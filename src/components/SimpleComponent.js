// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    handleClick(){
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
       this.setState({mood: newMood})
    }

    render(){
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.state.mood}
            </div>
        )
    }
}