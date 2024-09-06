
const imgReg=document.querySelector('#imgReg');
imgReg.addEventListener('click',(e)=>{
    location.href='index.html';
});
function func(e){
    location.href='index.html';
}
const fname=document.querySelector('#fname');
const btnReg=document.querySelector('#btnReg');
const lname=document.querySelector('#lname');
const phone=document.querySelector('#phone');
const email=document.querySelector('#email');
const pass=document.querySelector('#pass');
const repeatPass=document.querySelector('#repeatPass');
btnReg.addEventListener('click',(e)=>{
      let valFname=fname.value;  
      let valLname=lname.value;  
      let valPhone=phone.value;  
      let valemail=email.value;  
      let valpass=pass.value;  
      let valrepeatPass=repeatPass.value;
        fname.len
      let pattern = /[a-zA-Z0-9]/;
     //   console.log(valFname,valLname,valPhone,valemail,valpass,valrepeatPass );
          if(valFname&&valLname&&valPhone&&valemail&&valpass&&valrepeatPass !=' '){      
                 if(pattern.test(fname) && pattern.test(lname) && valPhone.length==11 && valpass.length>8 ) {
                            if(valpass==valrepeatPass){
                                const data = {
                                    fname:valFname,
                                    lname:valLname,
                                    phone:valPhone,
                                    email:valemail,
                                    pass:valpass
                                  };
                                  
                                  fetch('https://66caec954290b1c4f1990ef1.mockapi.io/users', {
                                    method: 'POST',
                                    headers: {'content-type':'application/json'},
                                    
                                    body: JSON.stringify(data)
                                  }).then(res => {
                                    if (res.ok) {
                                        return res.json();
                                    }
                                    
                                  }).then(val => {
                                    swal({
                                      text: 'ثبت نام شما با موفقیت انجام شد ',
                                      buttons:false,
                                      icon:'success'
                                    });
                                        
                                  }).catch(error => {
                                    swal({
                                      text: 'ثبت نام شما با موفقیت انجام نشد ',
                                      buttons:false,
                                      icon:'error'
                                    });
                                  })
                                    
                            }
                           
                            fname.value='';
                            lname.value='';
                            phone.value='';
                            email.value='';       
                            pass.value='';
                            repeatPass.value='';
                
                          
                      
                                     
              
                                      
                            
                }else{
                    swal({
                        text: "اطلاعات خود را درست وارد کنید",
                        buttons:false,
                        icon:'error'
                      });
                }          
                                  
                           
                      
                
             }else{
        swal({
            text: "فرم کامل پر کنید",
            buttons:false,
            icon:'error'
          });
                 }  
        
});
// https://66caec954290b1c4f1990ef1.mockapi.io/users
