import React from 'react';
import styled from 'styled-components'

const UserCard = (props) => {
  console.log(props);
  return(
    <Card>
      <p> Name: {props.user.name} </p>
      <p> Bio: {props.user.bio} </p>
    </Card>
  )
}

export default UserCard;

const Card = styled.div `
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:space-evenly;
  background:grey;
  border:1px solid red; 
  width:20%;
  padding:10px;
  margin:10px;
`