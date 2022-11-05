let hr = document.querySelector("#hr");
let mo = document.querySelector("#mo");
let ho = document.querySelector("#ho");

setInterval(() =>{
        let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let oo = day.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hh=(mm/12)}deg)`;
    mo.style.transform = `rotateZ(${mm}deg)`;
    ho.style.transform = `rotateZ(${oo}deg)`;
})


function shoetime(){
    var hour = new Date().getHours();
    var miut = new Date().getMinutes();
    var sec = new Date().getSeconds();

    hour = (hour < 10) ? "0" + hour : hour
    miut = (miut < 10) ? "0" + miut : miut
    sec = (sec < 10) ? "0" + sec : sec

    if (hour > 12){
        hour = hour -12;
    }

    document.getElementById("dispalyClock").innerHTML = hour + " : " + miut + " : " + sec;
    setInterval(shoetime, 1000)



}shoetime()