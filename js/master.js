
//----------------------------------------------------------------
/* active class function */
//----------------------------------------------------------------
function activeClasse(removeElements,addElement,className){
    for(i2=0;i2<removeElements.length;i2++){
        removeElements[i2].classList.remove(className)
    }
    addElement.classList.add(className)
}

function activeClasse2(ev){
    console.log(ev.target.parentElement)
ev.target.parentElement.querySelectorAll('.active').forEach(element =>{
    element.classList.remove('active')
})
ev.target.classList.add('active');
}
//----------------------------------------------------------------
/* start setting box */
//----------------------------------------------------------------
let settingBtn =document.querySelector('.setting-btn');
let settingbar =document.querySelector('.setting-box')
//----------------------------------------------------------------
//setting gear box icon onclick
//----------------------------------------------------------------
settingBtn.onclick = function() {   
let settingicon=document.querySelector('.fa-gear');
  settingbar.classList.toggle('hidden')
  settingicon.classList.toggle('fa-spin')
}
//----------------------------------------------------------------
// setting box color list
//----------------------------------------------------------------
let colorSaved = window.localStorage.getItem('background-color');
let colorbox =document.querySelectorAll('.colors-list li');
//----------------------------------------------------------------
//localStorage color list
//----------------------------------------------------------------
//ckeck localStorage null or not
if(colorSaved != null){
    setColorSave()
    checkcolor()
}
//get color from localStorage
for(i=0 ; i < colorbox.length   ; i++){
    colorbox[i].addEventListener('click',function(e){
        if(colorSaved != null){
            console.log(colorSaved)
        }
        // remove all active classes
        activeClasse(colorbox,this,'active')
        //get color from target element
        let colorSelection =getComputedStyle(this).backgroundColor;
                // set color in localStorage
        window.localStorage.setItem('background-color',colorSelection)
                // set color in document
        setColorSave()
    })
}

function checkcolor(){
    for(i=0;i<colorbox.length;i++){
        let colorSelection =getComputedStyle(colorbox[i]).backgroundColor;
        // colorbox[i2].classList.add('active')
        if(colorSelection == colorSaved){
            activeClasse(colorbox,colorbox[i],'active')
            
        }
    }
}
function setColorSave(){
    let colorSaved = window.localStorage.getItem('background-color');
    let setColor =document.documentElement.style.
    setProperty('--second-font-color', colorSaved);
    return setColor;
}   
//----------------------------------------------------------------
//localStorage randomBg Yas or No
//----------------------------------------------------------------
//define buttons
let BgtheInterval ;
let yasbtn =document.querySelector('.yas')
let nobtn =document.querySelector('.no')
let trys;
let getrandombg = window.localStorage.getItem('randombg');
if(getrandombg != null){
if(getrandombg=='yas'){
    nobtn.classList.remove('active');
    yasbtn.classList.add('active');
    // set in localStorage
    window.localStorage.setItem('randombg','yas')
    randomImage();
    trys=1;
}else if(getrandombg=='no'){
    yasbtn.classList.remove('active');
    nobtn.classList.add('active');
        // set in localStorage
        window.localStorage.setItem('randombg','no')
    clearInterval(BgtheInterval);
    trys="";
}
}else{
    nobtn.classList.remove('active');
    yasbtn.classList.add('active');
    // set in localStorage
    window.localStorage.setItem('randombg','yas')
    randomImage();
    trys=1;
}
yasbtn.onclick = function(){
    nobtn.classList.remove('active');
    yasbtn.classList.add('active');
    // set in localStorage
    window.localStorage.setItem('randombg','yas')
    if(trys !=1 ){
        randomImage();
        trys=1;
    }
}
nobtn.onclick = function(){
    yasbtn.classList.remove('active');
    nobtn.classList.add('active');
        // set in localStorage
        window.localStorage.setItem('randombg','no')
    clearInterval(BgtheInterval);
    trys="";
}
//----------------------------------------------------------------
/* end setting box */
//----------------------------------------------------------------
// start landing page
//----------------------------------------------------------------
//select landing page elment 
let landingPage = document.querySelector('.landing-page');
//get array of images
let imgsArray =new Array();
for(i=1 ; i < 9;i++){
    imgsArray.push(`0${i}.jpg`)
}
//variable to clear interval
function randomImage(){
       //get random Number
    BgtheInterval = setInterval(function(){
    let randomNumber = Math.floor(Math.random()*imgsArray.length)
    //change background Image Url
    landingPage.style.backgroundImage =`url(imgs/${imgsArray[randomNumber]})`  
    },10000);
    
}
//----------------------------------------------------------------
// end landing page
//----------------------------------------------------------------
//----------------------------------------------------------------
// start skills
//----------------------------------------------------------------
let skills = document.querySelectorAll('.skill-progress');
window.onscroll = function() {
       
    for(i=0 ; i<skills.length ;i++) {
        // skills ofset top (how many pixels to arive of element)
    let skillsOffsetTop = skills[i].offsetTop;
       //skills outer height (height of element)
    let skillOffsetHeight = skills[i].offsetHeight;
        /* window height (window viwe height and this viwe is fixed on scroll but
          variable if you change size of viwe like zoom in or out)*/
    let windowHeight = this.innerHeight
        //window scrollTop
    let windowscrollTop =this.pageYOffset;
    let skillspar= document.querySelectorAll('.skill-progress span');
    if((windowscrollTop + windowHeight) > (skillsOffsetTop)){
            let skillprgress=skillspar[i].getAttribute('data-progress');
            skillspar[i].style.width=skillprgress;
    }else {
        skillspar[i].style.width='0';
        // this.console.log('skills section not reached')

    }
    }
}
//----------------------------------------------------------------
// end skills
//----------------------------------------------------------------
//----------------------------------------------------------------
// start Gallery
//----------------------------------------------------------------
// creat popup with images
let ourGallery = document.querySelectorAll('.images-box img')
ourGallery.forEach(img =>{
    img.addEventListener('click', (e) =>{
        let leftBar=document.querySelector('.leftImg')
        let rightBar=document.querySelector('.rightImg')
        // create the popup
        let popBox = document.createElement('div');
        //create heading
        let imgHeading = document.createElement('h3')
        //append text in body
        popBox.appendChild(imgHeading)
        let imgText 
        console.log(img.alt);
        if(img.alt !== ""){
        //create text for heading
        imgText = document.createTextNode(img.alt)
        //append text to the heading
        imgHeading.appendChild(imgText)
        }else {
        //create text for heading
        imgText = document.createTextNode("beautiful Imges")
        //append text to the heading
        imgHeading.appendChild(imgText)
        }
        //add class to popup popBox
        popBox.classList.add('popup-box')
        // create overlay Element
        let overlay = document.createElement('div');
        //add class to overlay
        overlay.className = "popup-overaly"
        //Append  overlay to the body
        document.body.appendChild(overlay);
        // create The Image
        let popimg = document.createElement('img');
        //set image from click
        popimg.src = img.src;
        //append img in popup box
        popBox.appendChild(popimg)
        //append popup box in body
        document.body.appendChild(popBox)
        //create the close button
        let closeButton = document.createElement('span')
        //create close button Text
        let closeButtonText = document.createTextNode('X')
        //append text to close button
        closeButton.appendChild(closeButtonText)
        //add class to close button
        closeButton.classList.add('close-button')
        //append closeButton in  popup box
        popBox.appendChild(closeButton)
         leftBar.style.display ="inline-block "
         rightBar.style.display ="inline-block "
        })
})
let leftBar=document.querySelector('.leftImg')
let rightBar=document.querySelector('.rightImg')
let closeBtn = document.querySelector('.close-button')
document.addEventListener('click', (e) =>{
  if(e.target.classList == "close-button" ||
  e.target.classList == "popup-overaly" ){
      let popBox = document.querySelector('.popup-box')
      let overlay = document.querySelector('.popup-overaly')
      popBox.remove()
      overlay.remove()
      leftBar.style.display = "none"      
      rightBar.style.display = "none"
  }
})
document.addEventListener('keydown', (e) =>{
    if(e.key === "Escape"){
        let popBox = document.querySelector('.popup-box')
        let overlay = document.querySelector('.popup-overaly')
        popBox.remove()
        overlay.remove()
        leftBar.style.display = "none"        
        rightBar.style.display = "none"
    }
  })
  let arr= new Array;
   rightBar.addEventListener('click',function(){
    let gg = document.querySelector('.popup-box img')
    let imgindex = arr.indexOf(gg.src);
    console.log(arr.length)
    if(arr.length == 0) {
        for(i=0 ; i < ourGallery.length ; i++){
            arr.push(ourGallery[i].src)
            }
     }
    if(imgindex+1 >arr.length-1 ){
    gg.src =arr[0]
    }else{
    gg.src =arr[imgindex+1]
    } 
    console.log(arr)
 })
 leftBar.addEventListener('click',function(){
    let gg = document.querySelector('.popup-box img')
    let imgindex = arr.indexOf(gg.src);
    if(arr.length == 0) {
        for(i=0 ; i < ourGallery.length ; i++){
            arr.push(ourGallery[i].src)
            }
     }
      if(imgindex-1 < 0 ){
             gg.src =arr[arr.length-1]
      }else{
          gg.src =arr[imgindex-1]
      } 
 })
//----------------------------------------------------------------
// end Gallery
//----------------------------------------------------------------
//----------------------------------------------------------------
// start Navigation Bullets
//----------------------------------------------------------------
//select all Bullets
let allObject = document.querySelectorAll('[data-object]')
let navBullets =document.createElement('div');
navBullets.className = 'nav-bullets';
allObject.forEach((e)=>{
    let textFromObject =e.dataset.object;
    let classFromObject ="."+e.className;


   let bullet =document.createElement('div');
   bullet.className = 'bullet';
   bullet.setAttribute('data-section',classFromObject)

   let tooltipe =document.createElement('div');
   tooltipe.className = 'tooltipe';
   let tooltipeText =document.createTextNode(textFromObject)

   tooltipe.appendChild(tooltipeText)
   bullet.appendChild(tooltipe);
   navBullets.appendChild(bullet);
   document.body.appendChild(navBullets)

})


let allBullets = document.querySelectorAll('.nav-bullets .bullet');

 function scrollToSomewhere(elements){
    elements.forEach((bullet)=>{
        bullet.addEventListener('click',(e) =>{
            e.preventDefault();
            let getDataSet=e.target.dataset.section;
            document.querySelector(getDataSet).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
 }

 scrollToSomewhere(allBullets)
 let navIcon = document.querySelectorAll('header li a')
 scrollToSomewhere(allBullets)
 scrollToSomewhere(navIcon)
 let bullebtn=document.querySelectorAll(".bulletOp span")
let bulletyas = document.querySelector(".bulletOp .yas")
let bulletNo = document.querySelector(".bulletOp .no")

bulletNo.addEventListener('click', function(e) {
    let allBulletsnav =document.querySelector('.nav-bullets');
    console.log(allBulletsnav)
    allBulletsnav.style.cssText ='transform: translate(60px,-50%);'
    window.localStorage.setItem('bullteViwe','no')
    activeClasse2(e)
})

bulletyas.addEventListener('click', function(e) {
    let allBulletsnav =document.querySelector('.nav-bullets');
    console.log(allBulletsnav)
    allBulletsnav.style.cssText ='transform: translate(0,-50%);'
    window.localStorage.setItem('bullteViwe','yas')
    activeClasse2(e)

})
let bulletlocalStorage = window.localStorage.getItem('bullteViwe')
if(bulletlocalStorage !== null ){
        if(bulletlocalStorage=='yas'){
        let allBulletsnav =document.querySelector('.nav-bullets');
        activeClasse(bullebtn,bulletyas,'active')
        allBulletsnav.style.cssText ='transform: translate(0,-50%);'
        }else{
        let allBulletsnav =document.querySelector('.nav-bullets');
        activeClasse(bullebtn,bulletNo,'active')
        allBulletsnav.style.cssText ='transform: translate(60px,-50%);'
        }
}

//----------------------------------------------------------------
// end Navigation Bullets
//----------------------------------------------------------------
let defaultOptions =document.querySelector('.reset');
defaultOptions.addEventListener('click',function(){
    window.localStorage.clear();
    window.location.reload()
})

//----------------------------------------------------------------
// start Toggle Menu
//----------------------------------------------------------------
let toggleMenu = document.querySelector('.toggle-menu');
let links = document.querySelector('.links');

toggleMenu.onclick = function(e){
    e.stopPropagation();
    this.classList.toggle('menu-active');
    links.classList.toggle('open')
}
document.addEventListener('click',function(e){
    if(e.target.classList !== toggleMenu || e.target.classList !== links){
        if(links.classList.contains('open')){
        toggleMenu.classList.toggle('menu-active');
        links.classList.toggle('open')
    }
    }
})
links.onclick = function(e){
    e.stopPropagation();
}


//----------------------------------------------------------------
// end Toggle Menu
//----------------------------------------------------------------