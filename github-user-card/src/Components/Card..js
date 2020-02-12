import React, { Component } from 'react';
import styled from "styled-components"

const Cardd=styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 19%;
  margin-left:42%;
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  border: 8px outset #A40000;
border-radius: 0px 40px 0px 0px;

`
const Container=styled.div`
padding: 2px 16px;
`

class Card extends Component {
    render() {
        return (
            <Cardd>
                <Container>
                <img src={this.props.image} alt="shutup vscode i dont care" />
                <h4>Username: {this.props.login}</h4>
                <h4>Followers: {this.props.followers}</h4>
                <h4>Following:{this.props.following} </h4>
                </Container>
            </Cardd>
        );
    }
}

export default Card;