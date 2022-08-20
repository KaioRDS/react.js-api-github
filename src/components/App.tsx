import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import InputSearchRepository from "../components/InputSearchRepository";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react'
function App() {
  
  const [result , setResult] = useState([]);

  const functionGetUserGithub = (nameUser:string)=>{

    getUserRequest(nameUser);
    // console.log(result.length)
    if (result.length > 0) {
      result.forEach((value)=>{
        console.log(value)
      }) 
    }else{
      console.log(result)
    }
  }

  async function getUserRequest(nameUser:string){
    const baseUrl = nameUser != '' ?  `https://api.github.com/users/${nameUser}` : `https://api.github.com/users`;

    // const baseUrl = "https://api.github.com/users";
    await fetch(baseUrl)
    .then((response) => {
      if (response.status == 404) {
        setResult([]);
      }else{
        response.json().then((e)=>{
          setResult(e);
        })
      }
    })
  }

  return (
    <Container className='container-app'>
      <Row className='mt-4 pb-4 row-header'>
        <Col className="d-flex justify-content-center"><Header></Header></Col>
      </Row>
      <Row className='mt-4 row-input-search'>
        <Col className="d-flex justify-content-center"><InputSearchRepository functionGetUserGit={functionGetUserGithub}></InputSearchRepository></Col>
      </Row>
  </Container>
  )
}

export default App
