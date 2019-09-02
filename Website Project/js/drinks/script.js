/*-----       Prices       -----*/
var itemPrice501 = 2;
var itemPrice502 = 5;
var itemPrice503 = 5;
var itemPrice504 = 5;
var itemPrice505 = 5;
var itemPrice506 = 5;
var itemPrice507 = 10;
var itemPrice508 = 10;

/*----- Drinks Page -----*/
//Load Drinks Page Data
function loadDrinksPage() {
    display501();
    display502();
    display503();
    display504();
    display505();
    display506();
    display507();
    display508();
}

/*--- item501 ---*/
//Display the price, quantity and cost
function display501() {
    document.getElementById("itemPrice501").innerHTML = itemPrice501 + " Dhs.";
    document.getElementById("itemQuantity501").innerHTML = parseInt(getCookie("itemQuantity501"));
    document.getElementById("itemCost501").innerHTML = itemPrice501 * parseInt(getCookie("itemQuantity501")) + " Dhs.";
}
//Increase the item quantity and the cost
function add501() {
    setCookie("itemQuantity501", parseInt(getCookie("itemQuantity501")) + 1);
    display501();
}
//Decrease the item quantity and the cost
function sub501() {
    if (getCookie("itemQuantity501") > 0) {
        setCookie("itemQuantity501", parseInt(getCookie("itemQuantity501")) - 1);
        display501();
    }
}

/*--- item502 ---*/
//Display the price, quantity and cost
function display502() {
    document.getElementById("itemPrice502").innerHTML = itemPrice502 + " Dhs.";
    document.getElementById("itemQuantity502").innerHTML = parseInt(getCookie("itemQuantity502"));
    document.getElementById("itemCost502").innerHTML = itemPrice502 * parseInt(getCookie("itemQuantity502")) + " Dhs.";
}
//Increase the item quantity and the cost
function add502() {
    setCookie("itemQuantity502", parseInt(getCookie("itemQuantity502")) + 1);
    display502();
}
//Decrease the item quantity and the cost
function sub502() {
    if (getCookie("itemQuantity502") > 0) {
        setCookie("itemQuantity502", parseInt(getCookie("itemQuantity502")) - 1);
        display502();
    }
}

/*--- item503 ---*/
//Display the price, quantity and cost
function display503() {
    document.getElementById("itemPrice503").innerHTML = itemPrice503 + " Dhs.";
    document.getElementById("itemQuantity503").innerHTML = parseInt(getCookie("itemQuantity503"));
    document.getElementById("itemCost503").innerHTML = itemPrice503 * parseInt(getCookie("itemQuantity503")) + " Dhs.";
}
//Increase the item quantity and the cost
function add503() {
    setCookie("itemQuantity503", parseInt(getCookie("itemQuantity503")) + 1);
    display503();
}
//Decrease the item quantity and the cost
function sub503() {
    if (getCookie("itemQuantity503") > 0) {
        setCookie("itemQuantity503", parseInt(getCookie("itemQuantity503")) - 1);
        display503();
    }
}

/*--- item504 ---*/
//Display the price, quantity and cost
function display504() {
    document.getElementById("itemPrice504").innerHTML = itemPrice504 + " Dhs.";
    document.getElementById("itemQuantity504").innerHTML = parseInt(getCookie("itemQuantity504"));
    document.getElementById("itemCost504").innerHTML = itemPrice504 * parseInt(getCookie("itemQuantity504")) + " Dhs.";
}
//Increase the item quantity and the cost
function add504() {
    setCookie("itemQuantity504", parseInt(getCookie("itemQuantity504")) + 1);
    display504();
}
//Decrease the item quantity and the cost
function sub504() {
    if (getCookie("itemQuantity504") > 0) {
        setCookie("itemQuantity504", parseInt(getCookie("itemQuantity504")) - 1);
        display504();
    }
}

/*--- item505 ---*/
//Display the price, quantity and cost
function display505() {
    document.getElementById("itemPrice505").innerHTML = itemPrice505 + " Dhs.";
    document.getElementById("itemQuantity505").innerHTML = parseInt(getCookie("itemQuantity505"));
    document.getElementById("itemCost505").innerHTML = itemPrice505 * parseInt(getCookie("itemQuantity505")) + " Dhs.";
}
//Increase the item quantity and the cost
function add505() {
    setCookie("itemQuantity505", parseInt(getCookie("itemQuantity505")) + 1);
    display505();
}
//Decrease the item quantity and the cost
function sub505() {
    if (getCookie("itemQuantity505") > 0) {
        setCookie("itemQuantity505", parseInt(getCookie("itemQuantity505")) - 1);
        display505();
    }
}

/*--- item506 ---*/
//Display the price, quantity and cost
function display506() {
    document.getElementById("itemPrice506").innerHTML = itemPrice506 + " Dhs.";
    document.getElementById("itemQuantity506").innerHTML = parseInt(getCookie("itemQuantity506"));
    document.getElementById("itemCost506").innerHTML = itemPrice506 * parseInt(getCookie("itemQuantity506")) + " Dhs.";
}
//Increase the item quantity and the cost
function add506() {
    setCookie("itemQuantity506", parseInt(getCookie("itemQuantity506")) + 1);
    display506();
}
//Decrease the item quantity and the cost
function sub506() {
    if (getCookie("itemQuantity506") > 0) {
        setCookie("itemQuantity506", parseInt(getCookie("itemQuantity506")) - 1);
        display506();
    }
}

/*--- item507 ---*/
//Display the price, quantity and cost
function display507() {
    document.getElementById("itemPrice507").innerHTML = itemPrice507 + " Dhs.";
    document.getElementById("itemQuantity507").innerHTML = parseInt(getCookie("itemQuantity507"));
    document.getElementById("itemCost507").innerHTML = itemPrice507 * parseInt(getCookie("itemQuantity507")) + " Dhs.";
}
//Increase the item quantity and the cost
function add507() {
    setCookie("itemQuantity507", parseInt(getCookie("itemQuantity507")) + 1);
    display507();
}
//Decrease the item quantity and the cost
function sub507() {
    if (getCookie("itemQuantity507") > 0) {
        setCookie("itemQuantity507", parseInt(getCookie("itemQuantity507")) - 1);
        display507();
    }
}

/*--- item508 ---*/
//Display the price, quantity and cost
function display508() {
    document.getElementById("itemPrice508").innerHTML = itemPrice508 + " Dhs.";
    document.getElementById("itemQuantity508").innerHTML = parseInt(getCookie("itemQuantity508"));
    document.getElementById("itemCost508").innerHTML = itemPrice508 * parseInt(getCookie("itemQuantity508")) + " Dhs.";
}
//Increase the item quantity and the cost
function add508() {
    setCookie("itemQuantity508", parseInt(getCookie("itemQuantity508")) + 1);
    display508();
}
//Decrease the item quantity and the cost
function sub508() {
    if (getCookie("itemQuantity508") > 0) {
        setCookie("itemQuantity508", parseInt(getCookie("itemQuantity508")) - 1);
        display508();
    }
}