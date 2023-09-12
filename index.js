const textarea = document.getElementById("textarea")
var theme = false;
const mode = document.getElementById("changeMode")
mode.addEventListener("click",()=>{
    theme=!theme;
    themeChanged();
})



function themeChanged(){
    console.log(theme);
    if(theme){
        container.style.backgroundColor = "black";
        textarea.style.backgroundColor = "black";
        container.style.color = "white";
        textarea.style.color = "white";
    }else{
        container.style.backgroundColor = "white";
        container.style.color = "black";
        textarea.style.backgroundColor = "white";
        textarea.style.color = "black";

    }
}

 const textareaValue = textarea.value;
 console.log(textareaValue);
function saveToLocalStoarge() {
    localStorage.setItem("Auto saved text", textarea.value);
}

if(localStorage.getItem("Auto saved text")){
    textarea.value = localStorage.getItem("Auto saved text");
}

textarea.addEventListener("input",saveToLocalStoarge);

const colorSelect = document.getElementById("theme");
const container = document.getElementById("container");
colorSelect.addEventListener("click",()=>{
    container.style.color =  colorSelect.value;
    textarea.style.color = colorSelect.value
   
})

