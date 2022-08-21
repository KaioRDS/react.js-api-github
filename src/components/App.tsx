import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
import Header from './Header'
import Container from 'react-bootstrap/Container';
import InputSearchRepository from "../components/InputSearchReposiroty/InputSearchRepository";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState} from 'react'
import showAlertEmptyInput from './sweetAlert/ShowAlertInputEmpty/ShowAlertInputEmpty'
import GetReposbyUser from '../helpers/api-github/GetReposbyUser'
import showAlertUserNotFound from './sweetAlert/showAlertUserNotFound/showAlertUserNotFound'
import Arcordeon from './Arcordeon'
function App() {
  
  const [result , setResult] = useState<[]>([]);


  const functionGetUserGithub = (nameUser:string)=>{

    if(nameUser == ''){
      showAlertEmptyInput()
      setResult([])
    }else{
      let repors = GetReposbyUser(nameUser);
      repors.then(values =>{
        if (values.status === false && values.code == 404) {
          showAlertUserNotFound();
          setResult([])
        }else{
          setResult(values)
        }
      })
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
      <Row>
        <Col>
          <Arcordeon repos={result}></Arcordeon>
        </Col>
      </Row>
  </Container>
  )
}

export default App
