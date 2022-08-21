
import LoadCommits from '../sweetAlert/LoadCommits/LoadCommits'
import GetAllCommits from '../../helpers/api-github/GetAllCommits'
import ListAllcommits from '../sweetAlert/ListAllcommits'
type Props = {
    nameBranch : any,
    urlCommits : string
}
function BodyAccordeon(props:Props){

    async function openAllCommitsOnModal(){
        //colocando modal de load
        let modalLoad = LoadCommits();
        // modalLoad.close()
        let commits = await GetAllCommits(props.urlCommits);

        setTimeout(() => {
            modalLoad.close();
            let modalListCommits = ListAllcommits(commits);
        }, 1000);
    }

    return (
        <div onClick={openAllCommitsOnModal} className="body-accordeon">
            {props.nameBranch.name}
        </div>
    )
}
export default BodyAccordeon;