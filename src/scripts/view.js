document.querySelector("#view").addEventListener("click",()=>{
    document.querySelector(".main").scrollIntoView({block:"start",behavior:"smooth"});
})