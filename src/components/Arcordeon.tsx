import Accordion from 'react-bootstrap/Accordion';
import {useState} from 'react'
import GetBranchsByRepository from '../helpers/api-github/GetBranchsByRepository'
type Props = {
    repos : []
}
function Arcordeon(props : Props){

    const [checkDropdown , setCheckDropdown] = useState('UP')

    const getBranchClick = (url:string)=>{
        if (checkDropdown == 'UP') {
            GetBranchsByRepository(url.substr(0,url.indexOf('{')))
            setCheckDropdown('DOWN')
        }else{
            setCheckDropdown('UP')
        }
    }
    
    return(
       <Accordion>
       {
        props.repos.map((item: any,index)=>(
        <Accordion.Item onClick={() => getBranchClick(item.branches_url)} key={index} eventKey={index.toString()} className="intem-arccordeon">
            <Accordion.Header>
               {item.name}
            </Accordion.Header>
            <Accordion.Body>
               xalalala { index} 
            </Accordion.Body>
        </Accordion.Item>
        ))
       }
       </Accordion>
    )
}
export default Arcordeon;