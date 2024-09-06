const topHeader=document.querySelector('#topHeader');
const bottomHeader=document.querySelector('#bottomHeader');
const mobileHeader=document.querySelector('#mobileHeader');
const span1=document.querySelector('#span1');
const liheader=document.querySelector('#liheader');
const header=document.querySelector('header');
const ulmobileheader=document.querySelector('#ulmobileheader');
const logo=document.querySelector('#logo');
const logoWhite=document.querySelector('#logoWhite');
const spheadermobile=document.querySelector('#spheadermobile');
const spheadmobile2=document.querySelector('#spheadmobile2');
const side=document.querySelector('#side');
const subBox1=document.querySelector('#subBox1');
const acoordion=document.querySelector('#acoordion');





window.addEventListener('scroll',(e)=>{
  if(window.innerWidth>520){
    if(window.scrollY>10){
        topHeader.style.display='none' 
        header.style.height='60px'
        bottomHeader.style.top='0';
        bottomHeader.style.height='60px';
        bottomHeader.style.transition ='ease 0.4s';
     
       

    }else if(window.scrollY<10){
       topHeader.style.display='flex'
       header.style.height='100px' 
       bottomHeader.style.top='40px';
       bottomHeader.style.height='100px';
       
    }
  }
    else if(window.innerWidth<520){
        if(window.scrollY>3){
          ulmobileheader.classList.add('slideOutDown');
          logo.style.display='none';
          spheadermobile.style.display='none';
          logoWhite.style.display='flex';
          spheadmobile2.style.display='flex';
         
        }else {
           
          logo.style.display='flex';
          spheadermobile.style.display='flex';
          logoWhite.style.display='none';
          spheadmobile2.style.display='none';
         
          ulmobileheader.classList.remove('slideOutDown');
          
       
        }
    }
});
// header desktopend

//header mobile
//sidemenu
function sidebar(e){
  side.classList.remove('sideIn');
  side.classList.add('sideOut');
  document.body.style.overflow='hidden';
  
}
function cloose(n){
  side.classList.remove('sideOut');
  side.classList.add('sideIn');
  document.body.style.overflow='auto'
  side.nextElementSibling;
 
}
//arrow  h3 class
const divp=document.querySelectorAll('.divp>span')
function acc(e){
  e.classList.toggle('border');
   
    e.nextElementSibling.classList.toggle('show');
 
 }
 let count=0;
 function rotat(e){
   
    if(count%2){
      console.log(555);
      
      e.style.transform='rotate(0deg)';
      e.style.transition= '0.4s'
    }else{
      
      e.style.transform='rotate(180deg)';
      e.style.transition= '0.4s';
      
    }
    count++;
    console.log('count'+count);
    
 }

