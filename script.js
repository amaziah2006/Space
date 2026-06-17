function filter(type){

let cards=document.querySelectorAll(".card");


cards.forEach(card=>{


if(type=="all" ||
card.classList.contains(type)){

card.classList.remove("hide");

}

else{

card.classList.add("hide");

}


});


}