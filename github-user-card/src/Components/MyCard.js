import React, { Component } from 'react';

import Card from './Card.';

class MyCard extends Component {
    render() {
        return (
            <div>
                <Card
                    image={this.props.avatar_url} 
                    login={this.props.login} 
                    followers={this.props.followers} 
                    following={this.props.following} 
                    />
                    
            </div>
        );
    }
}

export default MyCard; 