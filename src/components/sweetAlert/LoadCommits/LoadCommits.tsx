import Swal from 'sweetalert2'
import withReactContent, { ReactSweetAlert } from 'sweetalert2-react-content'
import 'sweetalert2/src/sweetalert2.scss'
function LoadCommits() : ReactSweetAlert{
    const MySwal = withReactContent(Swal)

    MySwal.fire({
        title: 'Carregando',
        timer: 500000,
        didOpen: () => {
          Swal.showLoading() 
        }
    })
    return MySwal;
}

export default LoadCommits;