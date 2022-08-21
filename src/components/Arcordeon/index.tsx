import Accordion from 'react-bootstrap/Accordion';
import {useState} from 'react'
import GetBranchsByRepository from '../../helpers/api-github/GetBranchsByRepository'
import BodyAccordeon from '../bodyAccordon'
type Props = {
    repos : []
}
function Arcordeon(props : Props){

    const [checkDropdown , setCheckDropdown] = useState(true)
    const [dataBody, setDataBodyAccordion] =  useState([]);
    async function getBranchClick  (url:string){
        let branchs = await GetBranchsByRepository(url.substr(0,url.indexOf('{')))
        setDataBodyAccordion(branchs)
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
                {
                    dataBody.map((branchs,index) => (
                        <BodyAccordeon key={index} nameBranch={branchs} urlCommits={item.commits_url} ></BodyAccordeon>
                    ))
                }
            </Accordion.Body>
        </Accordion.Item>
        ))
       }
       </Accordion>
    )
}
export default Arcordeon;