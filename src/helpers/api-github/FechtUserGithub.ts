async function FechtUserGithub(nameUser:string){
    const baseUrl = nameUser != '' ?  `https://api.github.com/users/${nameUser}` : `https://api.github.com/users`;

    // const baseUrl = "https://api.github.com/users";
    // await fetch(baseUrl)
    // .then((response) => {
    //   if (response.status == 404) {
    //     setResult([]);
    //   }else{
    //     response.json().then((e)=>{
    //       setResult(e);
    //     })
    //   }
    // })
}
export default FechtUserGithub;