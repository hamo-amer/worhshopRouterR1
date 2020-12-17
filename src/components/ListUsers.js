import React,{useState,useEffect} from 'react'
import axios from'axios'
import UserCard from './UserCard'
import {Container,Row} from 'reactstrap'
import { Redirect } from 'react-router-dom'

function ListUsers({isLogin}) {
   const [users, setUsers] = useState([{}]) 
   useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res=>setUsers(res.data))
     .catch(err=>console.log(err))
   }
   ,[])
   console.log(isLogin)


   return(
     <>
  {(!isLogin) ?  <Redirect to='/' />
   : (
    <div>
    <Container>
    <Row>
   {users.map((user,i)=><UserCard user={user} key={i} />)}
   </Row>
   </Container>
  </div>
  )}
  </>
   )
   }
    
      


export default ListUsers;
