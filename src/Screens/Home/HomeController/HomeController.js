import React, { Component } from 'react';
import HomeView from './HomeView';

export default class HomeController extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
        };
        
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }

    render() {
        return <HomeView info={this.state.count} />
    }
}
