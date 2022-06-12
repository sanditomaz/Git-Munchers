let chosenmeal;
let chosenbeverage;
let chosendessert;
let priceMeal, priceBeverage, priceDessert, total, finaltotal;

function selectedMeal(element){
    const selected = document.querySelector(".meal .greenborder");
    const icon = element.querySelector(".green-ic");
    let newNumber;

    if(selected){
        selected.classList.remove("greenborder");
        selected.querySelector(".green-ic").classList.add("hidden");
    }
    
    icon.classList.remove("hidden");
    element.classList.add("greenborder");

    chosenmeal = element.querySelector(".savor").innerHTML;
    newNumber = element.querySelector(".price").innerHTML;

    priceMeal = Number(newNumber.replace(/[^0-9\.]+/g, ""));

    releaseToFinishOrder();
}

function selectedBeverages(element){
    const selected = document.querySelector(".beverage .greenborder");
    const icon = element.querySelector(".green-ic");
    let newNumber;
    
    if(selected !== null){
        selected.classList.remove("greenborder");
        selected.querySelector(".green-ic").classList.add("hidden");
    }

    icon.classList.remove("hidden");
    element.classList.add("greenborder");

    chosenbeverage = element.querySelector(".savor").innerHTML;
    newNumber = element.querySelector(".price").innerHTML;

    priceBeverage= Number(newNumber.replace(/[^0-9\.]+/g, ""));

    releaseToFinishOrder();
}

function selectedDesserts(element){
    const selected = document.querySelector(".dessert .greenborder");
    const icon = element.querySelector(".green-ic");
    let newNumber;

    if(selected !== null){
        selected.classList.remove("greenborder");
        selected.querySelector(".green-ic").classList.add("hidden");
    }

    icon.classList.remove("hidden");
    element.classList.add("greenborder");

    chosendessert = element.querySelector(".savor").innerHTML  ;
    newNumber = element.querySelector(".price").innerHTML;

    priceDessert = Number(newNumber.replace(/[^0-9\.]+/g, ""));

    releaseToFinishOrder();
}

function releaseToFinishOrder(){

    if(chosenmeal && chosenbeverage && chosendessert){
        const button = document.querySelector(".button");
        button.classList.add("hiddentwo");
        button.innerHTML = "Submit Your Order";
    }
}

function submitOrder(){
    total = priceMeal + priceBeverage + priceDessert;
    finaltotal = '$' + total.toFixed(2);  

    const layer = document.querySelector(".layer");
    layer.classList.remove("hidden");

    const firstmeal = document.querySelector(".straight .meal");
    firstmeal.innerHTML = chosenmeal;

    const firstprice = document.querySelector(".confirm-meal-price");
    firstprice.innerHTML = priceMeal;
// ---------------------------------------------------------------------

    const secondmeal = document.querySelector(".straight .beverage");
    secondmeal.innerHTML = chosenbeverage;

    const secondprice = document.querySelector(".confirm-beverage-price");
    secondprice.innerHTML = priceBeverage;
//----------------------------------------------------------------------

    const thirdmeal = document.querySelector(".straight .dessert");
    thirdmeal.innerHTML = chosendessert;

    const thirdprice = document.querySelector(".confirm-dessert-price");
    thirdprice.innerHTML = priceDessert;
//----------------------------------------------------------------------

    const valueofthetotal= document.querySelector(".priceof-totalprice");
    valueofthetotal.innerHTML = finaltotal;
//----------------------------------------------------------------------
}

function finallySubmit(){
       
    let name = prompt("What is your name?");
    let adress = prompt("What is your adress?");

    let message = `Hi, I'd like to order:\n- Meal: ${chosenmeal} \n- Beverage: ${chosenbeverage}\n- Dessert: ${chosendessert} \n Total: ${finaltotal} \n\n Name: ${name}\n Adress: ${adress}`;

    let target = `https://wa.me/?text=${encodeURIComponent(message)}`;

    //alert(message);

    window.open(target);

}

function canceling(){
    const layer = document.querySelector(".layer");
    layer.classList.add("hidden");
}