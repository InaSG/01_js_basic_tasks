const img_el = document.getElementById("myImage");
const pakeisti_paveiksl_el = document.getElementById("changeSrcButton");
console.log(img_el);

function pakeisti_paveiklseli(){
    if (img_el.currentSrc = "http://127.0.0.1:5500/html.jpg"){
        img_el.setAttribute("src", "./js.jpg");
    }else img_el.setAttribute("src", "./html.jpg");
    
};
pakeisti_paveiksl_el.addEventListener("click", pakeisti_paveiklseli);


