import React, {useState} from 'react'

type Props = {
    functionGetUserGit : (nameUser:string) => void
}
function InputSearchrepository(prop:Props){

    const  [nameUser, setNameUser] = useState('');

    const pressEnter = (e: React.KeyboardEvent) =>{
        
        if (e.key === 'Enter') {
            prop.functionGetUserGit(nameUser);
        }
        
    }

    const changeValueInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setNameUser(e.target.value);
    }

    return(
        
        <input type="text" value={nameUser} className="input-search-repository" placeholder="Encontre um usuário do github" onChange={changeValueInput} onKeyDown={pressEnter} />
    )
}
export default InputSearchrepository;