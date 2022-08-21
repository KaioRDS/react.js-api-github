import Swal from 'sweetalert2'
import withReactContent, { ReactSweetAlert } from 'sweetalert2-react-content'
import 'sweetalert2/src/sweetalert2.scss'
import InnerHtmlListCommits from '../InnerHtmlListCommits'
function ListAllcommits( commits :[] ): ReactSweetAlert{
    const MySwal = withReactContent(Swal)

    MySwal.fire({
        title: 'Commits',
        position: 'top',
        showConfirmButton: false,
        html: <InnerHtmlListCommits commitList={commits}></InnerHtmlListCommits>,
        customClass: {
            popup : 'popup-list-commits'
        }
    })
    return MySwal;
}
export default ListAllcommits;