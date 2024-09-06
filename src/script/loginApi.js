    const valPass=document.querySelector('#passUser');
    const valEmail=document.querySelector('#emailUser');
function login(e){
    let vale=valEmail.value;
    let valp=valPass.value;
    if(vale && valp !=''){
        const url = new URL('https://66caec954290b1c4f1990ef1.mockapi.io/users');
        url.searchParams.append('email', valEmail.value); 
        url.searchParams.append('pass', valPass.value); 
        fetch(url, {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
            
          }).then(tasks => {
            swal({
                text: ' ورود شما با موفقیت انجام شد ',
                buttons:false,
                icon:'success'
              });
            
          }).catch(error => {
            
          });
          valEmail.value='';
          valPass.value='';
    }else{
        swal({
            text: "فرم کامل پر کنید",
            buttons:false,
            icon:'error'
          });
    }
}
function home(n){
    location.href='index.html'
}