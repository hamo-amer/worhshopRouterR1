import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {Container,Row,Jumbotron} from 'reactstrap'
import { useParams } from 'react-router-dom'
import {Redirect} from 'react-router-dom'

function Profile({isLogin}) {
    const [user, setUser] = useState({})
    const {userId}=useParams()
 
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users/?id="+userId)
    .then(res=>setUser(res.data[0]))
    .catch(err=>console.log(err))
    }
     ,[userId])
  
    return ( 
    <>
    {!isLogin ? <Redirect to='/' /> :
    (   <Container>
      <Jumbotron>
        <Row className="d-flex justify-content-center align-items-center">
          <p
            style={{
              width: "100px",
              height: "100px",
              fontSize: "1.5em"
            }}
            className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
          >
            {/* check if the user and the user.name  is truthy  */}
            {user && user.name && user.name[0]}
          </p>
          {/* check if the user and the user.name  is truthy  */}

          <h1 className="display-3 col">{user && user.name}</h1>
          {/* check if the user and the user.name  is truthy  */}

          <p className="lead text-center col">
            {/* check if the user and the user.address  is truthy   */}
            {/* access to the nested object element  with es11 style user?.address?.street   => value of street */}

            {user &&
              user.address &&
              `${user.address.street} , ${user.address.suite} , ${user.address.city}`}
          </p>
        </Row>
      </Jumbotron>
    </Container>) 
    }
    </>
    
    )
    
}

export default Profile
