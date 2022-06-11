let chosenmeal;
let chosenbeverage;
let chosendessert;

function selectedMeal(element){
    chosenmeal = element.innerHTML;
    const selected = document.querySelector(".meal .greenborder");
    
    if(selected !== null){
        selected.classList.remove("greenborder");
    }
    element.classList.add("greenborder");

    releaseToFinishOrder()
}

function selectedBeverages(element){
    chosenbeverage = element.innerHTML;
    const selected = document.querySelector(".beverage .greenborder");
    
    if(selected !== null){
        selected.classList.remove("greenborder");
    }
    element.classList.add("greenborder");

    releaseToFinishOrder()
}

function selectedDesserts(element){
    chosendessert = element.innerHTML;
    const selected = document.querySelector(".dessert .greenborder");
    
    if(selected !== null){
        selected.classList.remove("greenborder");
    }
    element.classList.add("greenborder");

    releaseToFinishOrder()
}

function releaseToFinishOrder(){

    if(chosenmeal && chosenbeverage && chosendessert){
        const button = document.querySelector(".button");
        button.classList.add("hidden");
        button.innerHTML = "Submit Your Order";
    }
}