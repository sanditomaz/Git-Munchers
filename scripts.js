let chosenmeal;
let chosenbeverage;
let chosendessert;
let priceMeal, priceBeverage, priceDessert, total;

function selectedMeal(element){
    const selected = document.querySelector(".meal .greenborder");
    const icon = element.querySelector(".green-ic");
    const savory = element.querySelector(".savor");
    const pricetag = element.querySelector(".price");
    let newNumber;
    
    if(selected){
        selected.classList.remove("greenborder");
        selected.querySelector(".green-ic").classList.add("hidden");
        chosenmeal = selected.querySelector(".savor").innerHTML;
        newNumber = selected.querySelector(".price").innerHTML;
    }
    
    icon.classList.remove("hidden");
    element.classList.add("greenborder");

    priceMeal = newNumber.replace(/[^0-9\.]+/g, "");

    alert(chosenmeal);
    alert(priceMeal);
    releaseToFinishOrder();
}

function selectedBeverages(element){
    const selected = document.querySelector(".beverage .greenborder");
    const icon = element.querySelector(".green-ic");
    const savory = element.querySelector(".savor");
    const pricetag = element.querySelector(".price");
    let newNumber;
    
    if(selected !== null){
        selected.classList.remove("greenborder");
        selected.querySelector(".green-ic").classList.add("hidden");
        chosenbeverage = selected.querySelector(".savor").innerHTML;
        newNumber = selected.querySelector(".price").innerHTML;
    }
    icon.classList.remove("hidden");
    element.classList.add("greenborder");

    priceBeverage= newNumber.replace(/[^0-9\.]+/g, "");

    alert(chosenbeverage);
    alert(priceBeverage);

    releaseToFinishOrder();
}

function selectedDesserts(element){
    const selected = document.querySelector(".dessert .greenborder");
    const icon = element.querySelector(".green-ic");
    const savory = element.querySelector(".savor");
    const pricetag = element.querySelector(".price");
    let newNumber;
    
    
    if(selected !== null){
        selected.classList.remove("greenborder");
        selected.querySelector(".green-ic").classList.add("hidden");
        chosendessert = selected.querySelector(".savor").innerHTML  ;
        newNumber = selected.querySelector(".price").innerHTML;
    }
    icon.classList.remove("hidden");
    element.classList.add("greenborder");

    priceDessert = newNumber.replace(/[^0-9\.]+/g, "");

    alert(chosendessert);
    alert(priceDessert);

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

    let message = "Hi, I'd like to order:/n - Meal: ${`chosenmeal`} /n- Beverage: ${`chosenbeverage`}/n- Dessert: ${`chosendessert`} /n Total: $ ${`total`}";
}
