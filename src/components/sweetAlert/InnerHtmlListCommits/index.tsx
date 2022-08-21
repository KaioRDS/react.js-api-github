import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
type Props = {
    commitList : []
}
function InnerHtmlListCommits(props:Props){
    console.log(props)

    return (
        <div>
        {
            props.commitList.map((item : any,index)=>(
                <Card className='cards-commits' key={index} style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>{item.commit.author.name}</Card.Title>
                    <Card.Text>
                        {item.commit.message}
                    </Card.Text>
                    <Button onClick={()=> window.open( item.html_url, "_blank")} variant="primary">Primary</Button>{' '}
                </Card.Body>
            </Card>
            ))
        }
        </div>
    )
}
export default InnerHtmlListCommits;