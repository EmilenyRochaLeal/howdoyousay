let texto = document.querySelector(".texto");
let bntTxt = document.querySelector(".bnt-txt");

bntTxt.addEventListener("click", ()=>{
    if (!texto.value){
        alert("Por favor digite uma palavra")
    }else {
        bntTxt.innerText = "in English it is said"
        responsiveVoice.speak(texto.value, "UK English Female", {
            rate: 1,
            picth: 1,
            onend: function(){
                bntTxt.innerText = "Skeak";
            }
        });
    }
})
