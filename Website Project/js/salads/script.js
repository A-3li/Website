/*-----       Prices       -----*/
var itemPrice201 = 8;
var itemPrice202 = 10;
var itemPrice203 = 14;
var itemPrice204 = 14;

/*----- Salads Page -----*/
//Load Salads Page Data
function loadSaladsPage() {
    display201();
    display202();
    display203();
    display204();
}

/*--- item201 ---*/
//Display the price, quantity and cost
function display201() {
    document.getElementById("itemPrice201").innerHTML = itemPrice201 + " Dhs.";
    document.getElementById("itemQuantity201").innerHTML = parseInt(getCookie("itemQuantity201"));
    document.getElementById("itemCost201").innerHTML = itemPrice201 * parseInt(getCookie("itemQuantity201")) + " Dhs.";
}
//Increase the item quantity and the cost
function add201() {
    setCookie("itemQuantity201", parseInt(getCookie("itemQuantity201")) + 1);
    display201();
}
//Decrease the item quantity and the cost
function sub201() {
    if (getCookie("itemQuantity201") > 0) {
        setCookie("itemQuantity201", parseInt(getCookie("itemQuantity201")) - 1);
        display201();
    }
}

/*--- item202 ---*/
//Display the price, quantity and cost
function display202() {
    document.getElementById("itemPrice202").innerHTML = itemPrice202 + " Dhs.";
    document.getElementById("itemQuantity202").innerHTML = parseInt(getCookie("itemQuantity202"));
    document.getElementById("itemCost202").innerHTML = itemPrice202 * parseInt(getCookie("itemQuantity202")) + " Dhs.";
}
//Increase the item quantity and the cost
function add202() {
    setCookie("itemQuantity202", parseInt(getCookie("itemQuantity202")) + 1);
    display202();
}
//Decrease the item quantity and the cost
function sub202() {
    if (getCookie("itemQuantity202") > 0) {
        setCookie("itemQuantity202", parseInt(getCookie("itemQuantity202")) - 1);
        display202();
    }
}

/*--- item203 ---*/
//Display the price, quantity and cost
function display203() {
    document.getElementById("itemPrice203").innerHTML = itemPrice203 + " Dhs.";
    document.getElementById("itemQuantity203").innerHTML = parseInt(getCookie("itemQuantity203"));
    document.getElementById("itemCost203").innerHTML = itemPrice203 * parseInt(getCookie("itemQuantity203")) + " Dhs.";
}
//Increase the item quantity and the cost
function add203() {
    setCookie("itemQuantity203", parseInt(getCookie("itemQuantity203")) + 1);
    display203();
}
//Decrease the item quantity and the cost
function sub203() {
    if (getCookie("itemQuantity203") > 0) {
        setCookie("itemQuantity203", parseInt(getCookie("itemQuantity203")) - 1);
        display203();
    }
}

/*--- item204 ---*/
//Display the price, quantity and cost
function display204() {
    document.getElementById("itemPrice204").innerHTML = itemPrice204 + " Dhs.";
    document.getElementById("itemQuantity204").innerHTML = parseInt(getCookie("itemQuantity204"));
    document.getElementById("itemCost204").innerHTML = itemPrice204 * parseInt(getCookie("itemQuantity204")) + " Dhs.";
}
//Increase the item quantity and the cost
function add204() {
    setCookie("itemQuantity204", parseInt(getCookie("itemQuantity204")) + 1);
    display204();
}
//Decrease the item quantity and the cost
function sub204() {
    if (getCookie("itemQuantity204") > 0) {
        setCookie("itemQuantity204", parseInt(getCookie("itemQuantity204")) - 1);
        display204();
    }
}