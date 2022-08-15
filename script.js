const collapsedClass="nav--collapsed";
const lskey="navCollapsed";
const nav=document.querySelector(".nav");
const navBorder=nav.querySelector(".nav__border");
if(localStorage.getItem(lskey)==="true"){
    nav.classList.add(collapsedClass);
}

 navBorder.addEventListener("click",()=>{
    console.log('hey');
    nav.classList.toggle(collapsedClass);
    localStorage.setItem(lskey, nav.classList.contains(collapsedClass));
});
// Code for active page indicator in sidebar
const activePage=window.location.pathname;
console.log(activePage)
const currentLinkClass='current-link';
const navLinks=nav.querySelectorAll('.nav__link');
navLinks.forEach(link=>{
    // console.log(link.href.includes(`${activePage}`))
    console.log(link)
    if(link.href.includes(`${activePage}`)){
    console.log(activePage)
    link.classList.add(currentLinkClass);
}
 });

 
