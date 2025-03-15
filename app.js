const img = document.querySelector("#img");

img.addEventListener("click", function() {
    console.log(img.src);

    if(img.src == "http://127.0.0.1:5500/shrek.jpg") {
        img.src = "danse.gif";
    }

    else {
        img.src = "shrek.jpg"
    }
})