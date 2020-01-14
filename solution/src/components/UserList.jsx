import React, {useState, useEffect } from 'react';
import UserCard from './UserCard';
import styled from 'styled-components';

import axios from 'axios';

const UserList = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/users')
        .then(res => {
          console.log(res.data)
          setUser(res.data)
        })
        .catch(err => console.log(err))
  }, [])

  return(
    <div>
        <h1>Users </h1>
          <Indi>
            {user.map(user => {
              return <UserCard key={user.id} user={user}/>
            })}
          </Indi>
    </div>
  )
}

export default UserList;

const Indi = styled.div `
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-content:space-evenly;
  background:red;
  padding:10px;
`
