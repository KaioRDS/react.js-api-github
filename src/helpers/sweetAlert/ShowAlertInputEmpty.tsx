import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'sweetalert2/src/sweetalert2.scss'
const showAlertEmptyInput = () : void =>{
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      text : "Informe um usuário",
      icon : 'info',
      showConfirmButton : false,
      timer : 1500
    })
  }
export default showAlertEmptyInput