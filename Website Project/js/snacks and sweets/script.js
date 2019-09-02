/*-----       Prices       -----*/
var itemPrice401 = 5;
var itemPrice402 = 8;
var itemPrice403 = 10;
var itemPrice404 = 10;
var itemPrice405 = 10;
var itemPrice406 = 15;

/*----- Snacks And Sweets Page -----*/
//Load Snacks And Sweets Page Data
function loadSnacksAndSweetsPage() {
    display401();
    display402();
    display403();
    display404();
    display405();
    display406();
}

/*--- item401 ---*/
//Display the price, quantity and cost
function display401() {
    document.getElementById("itemPrice401").innerHTML = itemPrice401 + " Dhs.";
    document.getElementById("itemQuantity401").innerHTML = parseInt(getCookie("itemQuantity401"));
    document.getElementById("itemCost401").innerHTML = itemPrice401 * parseInt(getCookie("itemQuantity401")) + " Dhs.";
}
//Increase the item quantity and the cost
function add401() {
    setCookie("itemQuantity401", parseInt(getCookie("itemQuantity401")) + 1);
    display401();
}
//Decrease the item quantity and the cost
function sub401() {
    if (getCookie("itemQuantity401") > 0) {
        setCookie("itemQuantity401", parseInt(getCookie("itemQuantity401")) - 1);
        display401();
    }
}

/*--- item402 ---*/
//Display the price, quantity and cost
function display402() {
    document.getElementById("itemPrice402").innerHTML = itemPrice402 + " Dhs.";
    document.getElementById("itemQuantity402").innerHTML = parseInt(getCookie("itemQuantity402"));
    document.getElementById("itemCost402").innerHTML = itemPrice402 * parseInt(getCookie("itemQuantity402")) + " Dhs.";
}
//Increase the item quantity and the cost
function add402() {
    setCookie("itemQuantity402", parseInt(getCookie("itemQuantity402")) + 1);
    display402();
}
//Decrease the item quantity and the cost
function sub402() {
    if (getCookie("itemQuantity402") > 0) {
        setCookie("itemQuantity402", parseInt(getCookie("itemQuantity402")) - 1);
        display402();
    }
}

/*--- item403 ---*/
//Display the price, quantity and cost
function display403() {
    document.getElementById("itemPrice403").innerHTML = itemPrice403 + " Dhs.";
    document.getElementById("itemQuantity403").innerHTML = parseInt(getCookie("itemQuantity403"));
    document.getElementById("itemCost403").innerHTML = itemPrice403 * parseInt(getCookie("itemQuantity403")) + " Dhs.";
}
//Increase the item quantity and the cost
function add403() {
    setCookie("itemQuantity403", parseInt(getCookie("itemQuantity403")) + 1);
    display403();
}
//Decrease the item quantity and the cost
function sub403() {
    if (getCookie("itemQuantity403") > 0) {
        setCookie("itemQuantity403", parseInt(getCookie("itemQuantity403")) - 1);
        display403();
    }
}

/*--- item404 ---*/
//Display the price, quantity and cost
function display404() {
    document.getElementById("itemPrice404").innerHTML = itemPrice404 + " Dhs.";
    document.getElementById("itemQuantity404").innerHTML = parseInt(getCookie("itemQuantity404"));
    document.getElementById("itemCost404").innerHTML = itemPrice404 * parseInt(getCookie("itemQuantity404")) + " Dhs.";
}
//Increase the item quantity and the cost
function add404() {
    setCookie("itemQuantity404", parseInt(getCookie("itemQuantity404")) + 1);
    display404();
}
//Decrease the item quantity and the cost
function sub404() {
    if (getCookie("itemQuantity404") > 0) {
        setCookie("itemQuantity404", parseInt(getCookie("itemQuantity404")) - 1);
        display404();
    }
}

/*--- item405 ---*/
//Display the price, quantity and cost
function display405() {
    document.getElementById("itemPrice405").innerHTML = itemPrice405 + " Dhs.";
    document.getElementById("itemQuantity405").innerHTML = parseInt(getCookie("itemQuantity405"));
    document.getElementById("itemCost405").innerHTML = itemPrice405 * parseInt(getCookie("itemQuantity405")) + " Dhs.";
}
//Increase the item quantity and the cost
function add405() {
    setCookie("itemQuantity405", parseInt(getCookie("itemQuantity405")) + 1);
    display405();
}
//Decrease the item quantity and the cost
function sub405() {
    if (getCookie("itemQuantity405") > 0) {
        setCookie("itemQuantity405", parseInt(getCookie("itemQuantity405")) - 1);
        display405();
    }
}

/*--- item406 ---*/
//Display the price, quantity and cost
function display406() {
    document.getElementById("itemPrice406").innerHTML = itemPrice406 + " Dhs.";
    document.getElementById("itemQuantity406").innerHTML = parseInt(getCookie("itemQuantity406"));
    document.getElementById("itemCost406").innerHTML = itemPrice406 * parseInt(getCookie("itemQuantity406")) + " Dhs.";
}
//Increase the item quantity and the cost
function add406() {
    setCookie("itemQuantity406", parseInt(getCookie("itemQuantity406")) + 1);
    display406();
}
//Decrease the item quantity and the cost
function sub406() {
    if (getCookie("itemQuantity406") > 0) {
        setCookie("itemQuantity406", parseInt(getCookie("itemQuantity406")) - 1);
        display406();
    }
}