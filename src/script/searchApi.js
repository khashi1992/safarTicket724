const srcSearch=document.querySelector('#srcSearch');
const desSearch=document.querySelector('#desSearch');
const ul=document.querySelector('.ul1');
const ul2=document.querySelector('.ul2');
const addBtn=document.querySelector('#addBtn');
const cart=document.querySelector('#cart');
let jal=null;

  
srcSearch.addEventListener('keyup',(e)=>{
    
    ul.style.display='flex';
 
    const searchValue=e.target.value;
    // const url=new URL('https://iran-locations-api.ir/api/v1/fa/cities?city='+searchValue);
    const url=new URL('https://iran-locations-api.ir/api/v1/fa/cities?');
    url.searchParams.append('city',searchValue)
 fetch(url)
.then((response) => response.json())
.then(data=>{
    console.log('https://iran-locations-api.ir/api/v1/fa/cities='+searchValue);
        // console.log(data.name);

      if(searchValue.length>=2){
        ul.innerHTML=''
        data.map(val=>{
            // console.log(val.name);
            let span=document.createElement('span');
            let li=document.createElement('li');
            li.textContent=val.name;
            li.setAttribute('padding',5);
            span.setAttribute('class',"material-symbols-outlined");
            li.appendChild(span);
            ul.appendChild(li);
            li.addEventListener('click',(e)=>{
                srcSearch.value=li.textContent;
                ul.textContent=''; 
           }); 
         });
                
       
          
      }

        
    }).catch((error)=>{
            
    });

});
desSearch.addEventListener('keyup',(e)=>{
    let mod=1;
    ul.style.display='flex';
 
    const searchValue=e.target.value;
    // const url=new URL('https://iran-locations-api.ir/api/v1/fa/cities?city='+searchValue);
    const url=new URL('https://iran-locations-api.ir/api/v1/fa/cities?');
    url.searchParams.append('city',searchValue)
 fetch(url)
.then((response) => response.json())
.then(data=>{
    console.log('https://iran-locations-api.ir/api/v1/fa/cities='+searchValue);
        // console.log(data.name);
      if(searchValue.length>=2){
        ul.innerHTML=''
        data.map(val=>{
            // console.log(val.name);
            let li=document.createElement('li');
            li.textContent=val.name;
            li.setAttribute('padding',5)
            ul2.appendChild(li)
            li.addEventListener('click',(e)=>{
                desSearch.value=li.textContent;
                ul2.textContent=''; 
           }); 
         });
                
       
          
      }

        
    }).catch((error)=>{
            
    });

});
jalaliDatepicker.startWatch(
    {
      minDate: "attr",
      time:false,
      showCloseBtn:"static"
    }
  );
  const jalali=document.querySelector('#jalali');
  // jalaliDatepicker.setDate(jalali.value);
  jalali.addEventListener('change',(e)=>{
     jal= jalali.value;
    //  console.log(jal);
     
  });
  //cart with localstorage
const ul3=document.querySelector('#ul3');
addBtn.addEventListener('click', (e) => {
 
  cart.classList.toggle('shake');
  
  let obj = {
      src: srcSearch.value,
      des: desSearch.value,
      date: jal,
      price: 250
  };
  localStorage.setItem('carts', JSON.stringify(obj));
  
});

function displayCart() {    
  let store = localStorage.getItem('carts');
  if (store) {
      let cartObj = JSON.parse(store);
      let li = `
        <li>مبدا: ${cartObj.src}</li>
        <li>مقصد: ${cartObj.des}</li>
        <li>تاریخ حرکت: ${cartObj.date}</li>
        <li>قیمت: ${cartObj.price}</li>
        <li style="text-align: center;"><button style="border "  onclick="clearCart()">خالی کرن سبد</button></li>
      
      `;
      ul3.innerHTML = li;
  } else {
      console.log('نبود');
  }
}
function clearCart(){
  // alert(74)
  localStorage.removeItem('carts');
  ul3.innerHTML='';
  displayCart()
}
window.onload = displayCart;