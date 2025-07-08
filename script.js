const buttons = document.querySelectorAll('.button') // select to all buttons
// console.log(buttons);
const body = document.querySelector("body") //select to body


buttons.forEach(  function(button){
    console.log(button);
    button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    
    //use if statement use 

//    if (e.target.id === 'gray') {
//     body.style.backgroundColor = e.target.id
//    }
//    if (e.target.id === 'white') {
//     body.style.backgroundColor = e.target.id
//    }
//    if (e.target.id === 'blue') {
//     body.style.backgroundColor = e.target.id
//    }
//    if (e.target.id === 'yellow') {
//     body.style.backgroundColor = e.target.id
//    }

switch (button) {
    case gray:
        body.style.backgroundColor = 'gray'
        break;
    case white:
        body.style.backgroundColor = e.target.id
        break;
    case blue:
        body.style.backgroundColor = e.target.id
        break;
    case yellow:
        body.style.backgroundColor = e.target.id
        break;

    default:
        break;
}


    })
    
})