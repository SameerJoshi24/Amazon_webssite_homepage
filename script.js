// Coupon code 
function loadcoupon () {
    document.getElementById('couponimg');
    // document.getElementsByTagName("body").style.opacity = '0.7'

} 
function closecoupon () {
    document.getElementById('coupon').style.visibility = 'hidden';
    // document.getElementsByTagName("body").style.opacity = '1'
}
// Dark-white mode 
function changeMode(){
    let mybody = document.body
    mybody.classList.toggle('darkmode')
}

//Geo location
function geolocation() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(Position)
    } else{
        document.getElementById('out').innerText='Geo not supported'
        }
}

function Position(data){
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    // x.innerText = `Latitude is ${lat} and longitude is ${lon}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

    fetch(url,{method: 'GET'})
    .then((res) => res.json())
    .then((data) => {
        let cityname = data.city.name;
        let temp = data.list[0].temp.day+"°C";
        document.getElementById('weather').innerText = `${temp}`;
        document.getElementById('location').innerText =`${cityname}`;
    })
}










// let navbarlocation =document.querySelector('#location')
// let tempIcon =document.querySelector('#weatherIcon') 
// let tempValue =document.querySelector('#tempValue')

// function geolocation () {
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(position)
//     }else {
//         x.innerText = `Geo not supported`
//     }

// }
// function position(data){
//     let lat = data.coords.latitude;
//     let lon = data.coords.longitude;
//     // x.innerText = `Latitude is ${lat} and longitude is ${lon}`;
//     const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
//     fetch(url,{method:'GET'})
//     .then((responce)=>responce.json())
//     .then((data)=>{
//         let cityname = data.city.name;
//         let temp = data.list[0].temp.day+" °C";
        
//         navbarlocation.innerText=`${cityname}`
//     })
// }













// window.addEventListener("load", () =>{
//     let lan;
//     let lon;

//     if(navigator.geolocation)
//         {
//             navigator.geolocation.getCurrentPosition((position) =>{
//             lon =position.coords.longitude;
//             lan =position.coords.latitude;
//             const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2987338fad4fd5f2f31bf39d94703f78`
//             fetch(api).then((responce) =>{
//                 return responce.json();
//             })
//             .then(data => {

//             })
//             }
//             })
//         }
// })