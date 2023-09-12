# AutoSave-textArea-js

To implement auto-save functionality for a text area using JavaScript, you can use the localStorage or 
make an AJAX request to save the text to a server. Here's a basic example using localStorage.
We start with an HTML <textarea> element. 
This is the area where the user can input and edit text. 
We give it an id of "textArea" so that we can easily reference it in JavaScript.

## HTML code
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto save TextArea</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="container">
        <h1 id="heading">Auto Save Textarea </h1>

        <div id="colors">
        <input type="color" value="#DCA7D5" name="" id="theme">
        <button id="changeMode">Change Mode</button>
             </div>

        <textarea name="" value="" id="textarea" placeholder="Start typing here..."></textarea>
    </div>
    


    <script src="./index.js"></script>
</body>
</html>
```
CSS styling for code is as below:-
## CSS Code
```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    width: 100%;
    height: 100vh;
}
#container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: cursive;
    width: 50%;
    margin:  2rem auto;
    background-color: aliceblue;
    padding: 2rem 2rem;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow:  rgba(0, 0, 0, 1) 0px 3px 8px;
}
#container h1{
    letter-spacing: 2px;
    border-bottom: 3px outset red;
    margin-bottom: 2rem;
}
#textarea{
    padding: 5px 10px;
    font-size: 1.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 90%;
    height: 16rem;
}
#colors{
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#colors input{
    margin: 10px;
    cursor: pointer;
}
#colors button{
    width: 7rem;
    height: 1.7rem;
    cursor: pointer;
    color: white;
    background-color: royalblue; 
    font-family: cursive;
 
}
#colors button:hover{
    color: black;
    background-color: white;
    scale: 1.03;
    font-weight: 600;
}

```
We add an event listener to the text area.
Specifically, we're listening for the "input" event, which fires whenever the user types or modifies the text within the text area.
When this event occurs, we retrieve the current text content of the text area using textArea.value.
We then use localStorage.setItem() to save this text to the browser's local storage. We store it with the key "autoSavedText."
Local storage is a simple way to store key-value pairs in the user's browser, and it persists even after the user closes the web page.
So, as the user types, their text is continuously saved locally.

## JAVASCRIPT Code
```
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
```


