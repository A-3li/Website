/*-----       Prices       -----*/
var itemPrice101 = 15;
var itemPrice102 = 10;
var itemPrice103 = 12;
var itemPrice104 = 18;
var itemPrice105 = 20;
var itemPrice106 = 22;
var itemPrice107 = 25;
var itemPrice108 = 10;
var itemPrice109 = 12;
var itemPrice110 = 18;

/*----- Main Meals Page -----*/
//Load Main Meals Page Data
function loadMainMealsPage() {
    display101();
    display102();
    display103();
    display104();
    display105();
    display106();
    display107();
    display108();
    display109();
    display110();
}

/*--- item101 ---*/
//Display the price, quantity and cost
function display101() {
    document.getElementById("itemPrice101").innerHTML = itemPrice101 + " Dhs.";
    document.getElementById("itemQuantity101").innerHTML = parseInt(getCookie("itemQuantity101"));
    document.getElementById("itemCost101").innerHTML = itemPrice101 * parseInt(getCookie("itemQuantity101")) + " Dhs.";
}
//Increase the item quantity and the cost
function add101() {
    setCookie("itemQuantity101", parseInt(getCookie("itemQuantity101")) + 1);
    display101();
}
//Decrease the item quantity and the cost
function sub101() {
    if (getCookie("itemQuantity101") > 0) {
        setCookie("itemQuantity101", parseInt(getCookie("itemQuantity101")) - 1);
        display101();
    }
}

/*--- item102 ---*/
//Display the price, quantity and cost
function display102() {
    document.getElementById("itemPrice102").innerHTML = itemPrice102 + " Dhs.";
    document.getElementById("itemQuantity102").innerHTML = parseInt(getCookie("itemQuantity102"));
    document.getElementById("itemCost102").innerHTML = itemPrice102 * parseInt(getCookie("itemQuantity102")) + " Dhs.";
}
//Increase the item quantity and the cost
function add102() {
    setCookie("itemQuantity102", parseInt(getCookie("itemQuantity102")) + 1);
    display102();
}
//Decrease the item quantity and the cost
function sub102() {
    if (getCookie("itemQuantity102") > 0) {
        setCookie("itemQuantity102", parseInt(getCookie("itemQuantity102")) - 1);
        display102();
    }
}

/*--- item103 ---*/
//Display the price, quantity and cost
function display103() {
    document.getElementById("itemPrice103").innerHTML = itemPrice103 + " Dhs.";
    document.getElementById("itemQuantity103").innerHTML = parseInt(getCookie("itemQuantity103"));
    document.getElementById("itemCost103").innerHTML = itemPrice103 * parseInt(getCookie("itemQuantity103")) + " Dhs.";
}
//Increase the item quantity and the cost
function add103() {
    setCookie("itemQuantity103", parseInt(getCookie("itemQuantity103")) + 1);
    display103();
}
//Decrease the item quantity and the cost
function sub103() {
    if (getCookie("itemQuantity103") > 0) {
        setCookie("itemQuantity103", parseInt(getCookie("itemQuantity103")) - 1);
        display103();
    }
}

/*--- item104 ---*/
//Display the price, quantity and cost
function display104() {
    document.getElementById("itemPrice104").innerHTML = itemPrice104 + " Dhs.";
    document.getElementById("itemQuantity104").innerHTML = parseInt(getCookie("itemQuantity104"));
    document.getElementById("itemCost104").innerHTML = itemPrice104 * parseInt(getCookie("itemQuantity104")) + " Dhs.";
}
//Increase the item quantity and the cost
function add104() {
    setCookie("itemQuantity104", parseInt(getCookie("itemQuantity104")) + 1);
    display104();
}
//Decrease the item quantity and the cost
function sub104() {
    if (getCookie("itemQuantity104") > 0) {
        setCookie("itemQuantity104", parseInt(getCookie("itemQuantity104")) - 1);
        display104();
    }
}

/*--- item105 ---*/
//Display the price, quantity and cost
function display105() {
    document.getElementById("itemPrice105").innerHTML = itemPrice105 + " Dhs.";
    document.getElementById("itemQuantity105").innerHTML = parseInt(getCookie("itemQuantity105"));
    document.getElementById("itemCost105").innerHTML = itemPrice105 * parseInt(getCookie("itemQuantity105")) + " Dhs.";
}
//Increase the item quantity and the cost
function add105() {
    setCookie("itemQuantity105", parseInt(getCookie("itemQuantity105")) + 1);
    display105();
}
//Decrease the item quantity and the cost
function sub105() {
    if (getCookie("itemQuantity105") > 0) {
        setCookie("itemQuantity105", parseInt(getCookie("itemQuantity105")) - 1);
        display105();
    }
}

/*--- item106 ---*/
//Display the price, quantity and cost
function display106() {
    document.getElementById("itemPrice106").innerHTML = itemPrice106 + " Dhs.";
    document.getElementById("itemQuantity106").innerHTML = parseInt(getCookie("itemQuantity106"));
    document.getElementById("itemCost106").innerHTML = itemPrice106 * parseInt(getCookie("itemQuantity106")) + " Dhs.";
}
//Increase the item quantity and the cost
function add106() {
    setCookie("itemQuantity106", parseInt(getCookie("itemQuantity106")) + 1);
    display106();
}
//Decrease the item quantity and the cost
function sub106() {
    if (getCookie("itemQuantity106") > 0) {
        setCookie("itemQuantity106", parseInt(getCookie("itemQuantity106")) - 1);
        display106();
    }
}

/*--- item107 ---*/
//Display the price, quantity and cost
function display107() {
    document.getElementById("itemPrice107").innerHTML = itemPrice107 + " Dhs.";
    document.getElementById("itemQuantity107").innerHTML = parseInt(getCookie("itemQuantity107"));
    document.getElementById("itemCost107").innerHTML = itemPrice107 * parseInt(getCookie("itemQuantity107")) + " Dhs.";
}
//Increase the item quantity and the cost
function add107() {
    setCookie("itemQuantity107", parseInt(getCookie("itemQuantity107")) + 1);
    display107();
}
//Decrease the item quantity and the cost
function sub107() {
    if (getCookie("itemQuantity107") > 0) {
        setCookie("itemQuantity107", parseInt(getCookie("itemQuantity107")) - 1);
        display107();
    }
}

/*--- item108 ---*/
//Display the price, quantity and cost
function display108() {
    document.getElementById("itemPrice108").innerHTML = itemPrice108 + " Dhs.";
    document.getElementById("itemQuantity108").innerHTML = parseInt(getCookie("itemQuantity108"));
    document.getElementById("itemCost108").innerHTML = itemPrice108 * parseInt(getCookie("itemQuantity108")) + " Dhs.";
}
//Increase the item quantity and the cost
function add108() {
    setCookie("itemQuantity108", parseInt(getCookie("itemQuantity108")) + 1);
    display108();
}
//Decrease the item quantity and the cost
function sub108() {
    if (getCookie("itemQuantity108") > 0) {
        setCookie("itemQuantity108", parseInt(getCookie("itemQuantity108")) - 1);
        display108();
    }
}

/*--- item109 ---*/
//Display the price, quantity and cost
function display109() {
    document.getElementById("itemPrice109").innerHTML = itemPrice109 + " Dhs.";
    document.getElementById("itemQuantity109").innerHTML = parseInt(getCookie("itemQuantity109"));
    document.getElementById("itemCost109").innerHTML = itemPrice109 * parseInt(getCookie("itemQuantity109")) + " Dhs.";
}
//Increase the item quantity and the cost
function add109() {
    setCookie("itemQuantity109", parseInt(getCookie("itemQuantity109")) + 1);
    display109();
}
//Decrease the item quantity and the cost
function sub109() {
    if (getCookie("itemQuantity109") > 0) {
        setCookie("itemQuantity109", parseInt(getCookie("itemQuantity109")) - 1);
        display109();
    }
}

/*--- item110 ---*/
//Display the price, quantity and cost
function display110() {
    document.getElementById("itemPrice110").innerHTML = itemPrice110 + " Dhs.";
    document.getElementById("itemQuantity110").innerHTML = parseInt(getCookie("itemQuantity110"));
    document.getElementById("itemCost110").innerHTML = itemPrice110 * parseInt(getCookie("itemQuantity110")) + " Dhs.";
}
//Increase the item quantity and the cost
function add110() {
    setCookie("itemQuantity110", parseInt(getCookie("itemQuantity110")) + 1);
    display110();
}
//Decrease the item quantity and the cost
function sub110() {
    if (getCookie("itemQuantity110") > 0) {
        setCookie("itemQuantity110", parseInt(getCookie("itemQuantity110")) - 1);
        display110();
    }
}