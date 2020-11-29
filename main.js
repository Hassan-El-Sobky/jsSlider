let slideImage=Array.from(document.querySelectorAll('.slider-container img'))
console.log(slideImage);

let currentIndex=1;

let slideNumber=document.getElementById("slide-number");

let prevBtn=document.getElementById('prev');
let nextBtn=document.getElementById('next');

prevBtn.onclick=goPrev;
nextBtn.onclick=goNext;




var paginationElment=document.createElement("ul");
paginationElment.setAttribute("id","pagination-ul");


for(let i=1 ;i<=slideImage.length;i++)
{
    let paginationItem=document.createElement("li")
    paginationItem.setAttribute('data-index',i)
    paginationItem.appendChild(document.createTextNode(i));
    paginationElment.appendChild(paginationItem);
}
let indicators=document.getElementById("indicators");
indicators.appendChild(paginationElment)
let paginationUl=document.getElementById('pagination-ul');
let paginationUlLi=Array.from(document.querySelectorAll('#pagination-ul li'))


for(let i=0 ; i<paginationUlLi.length;i++)
{
   paginationUlLi[i].addEventListener('click',function(){

   currentIndex = parseInt(paginationUlLi[i].getAttribute('data-index'))
     theChecker();
   })
}
theChecker()

function theChecker()
{
  slideNumber.textContent="#"+(currentIndex)+"/"+(slideImage.length);
  removeAllActive()
  slideImage[currentIndex-1].classList.add('active')
  
  paginationUl.children[currentIndex-1].classList.add('active')
  

  if(currentIndex == 1)
  {
    prevBtn.classList.add('disabled')
  }
  else
  {
    prevBtn.classList.remove('disabled')
  }

  if(currentIndex == 5)
  {
    nextBtn.classList.add('disabled')  
  }
  else{
    nextBtn.classList.remove('disabled')
  
  }
}
console.log(paginationUl.children);

function goNext()
{
  if(nextBtn.classList.contains('disabled'))
  {
    return 0;
  }
  currentIndex++;
  slideNumber.textContent="#"+(currentIndex)+"/"+(slideImage.length);
theChecker();
}


function goPrev()
{
  if(prevBtn.classList.contains('disabled'))
  {
    return 0;
  }
  currentIndex--;
  slideNumber.textContent="#"+(currentIndex)+"/"+(slideImage.length);
theChecker();
}


function removeAllActive()
{
   slideImage.forEach(function(img){
         img.classList.remove('active')      
 
   });

  paginationUlLi.forEach(function(li){
   li.classList.remove('active')
  })

}