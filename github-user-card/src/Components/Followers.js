import React, { Component } from 'react';
import styled from "styled-components"

const Cardd=styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 19%;
  margin-left:42%;
  margin-top:1%;
  border: 8px outset #A40000;
border-radius: 0px 40px 0px 0px;

  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
const Container=styled.div`
padding: 2px 16px;
`
const Image=styled.img`
max-width:100%;
max-height:100%;
`

class Followers extends Component {
    render() {
        console.log(this.props.followers);
        return (
            <div>
                {this.props.followers.map((data) => {
                    console.log(data)
                return (
                 <Cardd>
                     <Container>
                    <Image src={data.avatar_url} alt="stfu vscode"/>
                    <h4>Username: {data.login}</h4>
                    <h4>Followers: {data.id} </h4>
                     </Container>
                </Cardd>
                )
                })}
            </div>
        );
    }
}

export default Followers; 