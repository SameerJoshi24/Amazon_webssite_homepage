// Coupon code 
function loadcoupon () {
    document.getElementsById('couponimg').style = 'visible';
    document.getElementsByTagName("body").style.opacity = '0.7'

} 
function closecoupon () {
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementsByTagName("body").style.opacity = '1'
}
// Dark-white mode 
function changeMode(){
    let mybody = document.body
    mybody.classList.toggle('darkmode')
}