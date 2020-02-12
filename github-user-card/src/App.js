import React, { Component } from 'react';
import MyCard from './Components/MyCard';
import Followers from './Components/Followers';
import './App.css';
import axios from 'axios';
import styled from "styled-components"

const DaddyContainer=styled.div`
background-color:black;
color:white;


`

const Header=styled.h1`
text-align:center;
`

class App extends Component{
  constructor(){
    super();
    this.state = {
      username: 'shawnpatel96',
      users: {},
      followers: [] ,
      
    }
  }
  componentDidMount(){
    console.log('component did mount');
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(res => {
      this.setState({
        users: res.data
      })
    })
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
    .then((res) => {
      this.setState({
        followers: res.data
      })
    })
  }
  render(){
    return (
      <DaddyContainer>
          <Header>The Gang Gang</Header>
          <MyCard {...this.state.users} />
          <Followers followers={this.state.followers} />
          
      </DaddyContainer>
    );
  }
}

export default App;