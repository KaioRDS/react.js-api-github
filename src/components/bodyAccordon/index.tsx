
import LoadCommits from '../sweetAlert/LoadCommits/LoadCommits'
import GetAllCommits from '../../helpers/api-github/GetAllCommits'
import ListAllcommits from '../sweetAlert/ListAllcommits'
type Props = {
    nameBranch : any,
    urlCommits : string
}
function BodyAccordeon(props:Props){

    async function openAllCommitsOnModal(){
        // console.log(props.urlCommits)
        // let modalLoad = LoadCommits();
        
        let commits = await GetAllCommits(props.urlCommits);
        
        let modalListCommits = ListAllcommits(commits);
    }

    return (
        <div onClick={openAllCommitsOnModal} className="body-accordeon">
            {props.nameBranch.name}
        </div>
    )
}
export default BodyAccordeon;