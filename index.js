 // let img_url = JSON.parse(localStorage.getItem("images"))
    
 function addImage(){
    let img_url=document.getElementById("image_url");
    let images=JSON.parse(localStorage.getItem("images")) || [];
        images.push(img_url.value);
    localStorage.setItem("images",JSON.stringify(images));
    img_url.value = null;
}
let id;
let i=0;
function startSlide(){
    let images=JSON.parse(localStorage.getItem("images"));
    let cont =document.getElementById("slidesbox");
    
        id=setInterval(function(){
        console.log(i)
        if(i===images.length){
            i=0;
        }

        let img=document.createElement("img");
        img.src=images[i];
        cont.innerHTML=null;
        cont.append(img);
        i++;

    },2000);
}

function stop(){
    clearInterval(id);
}