    var btn_menu=document.getElementById("NJE_btn1");
    var btn_close=document.getElementById("NJE_btn2");
    var menu1=document.getElementById("NJE_menu");

    btn_menu.onclick=function()
    {
        btn_menu.style.display="none";
        btn_close.style.display="inline";
        menu1.style.display="inline";
    }
    btn_close.onclick=function()
    {
        btn_menu.style.display="inline";
        btn_close.style.display="none";
        menu1.style.display="none";
    }

    
    
function validation_email()
{
    var email=document.getElementById("AB-srch").value;
    var reg=/^[a-zA-Z0-9._-]{5,}\@[a-z0-9._-]{5,7}\.[a-z]{2,3}$/;
    if(!reg.test(email))
    {
        alert("Votre e-mail adresse est invalide!");
    }
    else
    {
        alert("Votre adresse e-mail est valide");
    }
}


    //Funtion d'annimation de photos Home 
                 var x = 0;
             var images = [];
                     images[0] = "image/fabio-santaniello-bruun-L8qGvTK8Ml8-unsplash.jpg";
                     images[1] = "image/kees-kortmulder-LzDtQIWBgoU-unsplash.jpg";
                     images[2] = "image/tomas-malik-VF8P5iTbKQg-unsplash.jpg";
            
             function displayNextImage() {
                 if(x === images.length - 1){
                      x = 0;
                  } else {
                      x = x + 1;
                  }
                  document.getElementById("img").src = images[x];
              }

              function startTimer() {
                  setInterval(displayNextImage, 2000);
              }
