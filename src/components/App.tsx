import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import InputSearchRepository from "../components/InputSearchRepository";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react'
import showAlertEmptyInput from '../helpers/sweetAlert/ShowAlertInputEmpty'

function App() {
  
  const [result , setResult] = useState({});


  const functionGetUserGithub = (nameUser:string)=>{

    if(nameUser == ''){
      showAlertEmptyInput()
    }else{
      
    }
   
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
