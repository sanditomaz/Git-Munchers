let chosenmeal;
let chosenbeverage;
let chosendessert;
let price;

function selectedMeal(element){
    const selected = document.querySelector(".meal .greenborder");
    const grennicon = document.querySelector(".meal .greenborder .icon");
    
    if(selected !== null){
        selected.classList.remove("greenborder");
        greenicon.classList.remove("iconfather");
        greenicon.classList.add("green-ic");
    }else{
        greenicon.classList.add("iconfather");
        greenicon.classList.remove("green-ic");
    }
    element.classList.add("greenborder");
    
    chosenmeal = element.innerHTML;

    releaseToFinishOrder();
}

function selectedBeverages(element){
    const selected = document.querySelector(".beverage .greenborder");
    
    if(selected !== null){
        selected.classList.remove("greenborder");
    }
    element.classList.add("greenborder");
    chosenbeverage = element.innerHTML;

    releaseToFinishOrder();
}

function selectedDesserts(element){
    const selected = document.querySelector(".dessert .greenborder");
    
    if(selected !== null){
        selected.classList.remove("greenborder");
    }
    element.classList.add("greenborder");
    chosendessert = element.innerHTML;

    releaseToFinishOrder();
}

function releaseToFinishOrder(){

    if(chosenmeal && chosenbeverage && chosendessert){
        const button = document.querySelector(".button");
        button.classList.add("hidden");
        button.innerHTML = "Submit Your Order";
    }
}

