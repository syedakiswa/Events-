// let btn = document.getElementById("btn")
// let body = document.getElementById("body")

// btn.addEventListener('click', () => {
//     body.style.backgroundColor = "black";
//     body.style.color = 'white'
// })



// btn.addEventListener('keydown', (e) =>{ // e convention 
//     console.log(e.target)
// })

// window.addEventListener('resize', (e)=>{

// })


// e.target - woh elements target kro jis par exactly event hua
// e.target.textContent



// e.preventdefault() - default action rok ta hay
// form submit pe
// page reload

// e.clientx / y - mouse ki position screen par
// e.client = 340 
// pixels from left


let btn = document.getElementById('buybtn');
let status = document.getElementById('status');


// click 
btn.addEventListener('click', (e) =>{
   status.innerText = 'Product addet to cart'

})

// Double Click 
btn.addEventListener('dblclick', (e) =>{
    status.innerText = 'Addet to wishlist'
})


// mouseover
btn.addEventListener('mouseover', (e) =>{  
    btn.style.backgroundColor = "green"
    btn.style.color = 'white'
    status.innerText = 'Ready to Buy'
})


// mouseout
btn.addEventListener('mouseout', (e) =>{
    btn.style.backgroundColor = '';
    btn.style.color = ''
    status.

})