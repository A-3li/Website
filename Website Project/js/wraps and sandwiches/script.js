/*-----       Prices       -----*/
var itemPrice301 = 15;
var itemPrice302 = 15;
var itemPrice303 = 12;
var itemPrice304 = 15;
var itemPrice305 = 15;
var itemPrice306 = 15;
var itemPrice307 = 10;
var itemPrice308 = 10;
var itemPrice309 = 10;
var itemPrice310 = 15;
var itemPrice311 = 15;
var itemPrice312 = 15;
var itemPrice313 = 15;

/*----- Wraps And Sandwiches Page -----*/
//Load Wraps And Sandwiches Page Data
function loadWrapsAndSandwichesPage() {
    display301();
    display302();
    display303();
    display304();
    display305();
    display306();
    display307();
    display308();
    display309();
    display310();
    display311();
    display312();
    display313();
}

/*--- item301 ---*/
//Display the price, quantity and cost
function display301() {
    document.getElementById("itemPrice301").innerHTML = itemPrice301 + " Dhs.";
    document.getElementById("itemQuantity301").innerHTML = parseInt(getCookie("itemQuantity301"));
    document.getElementById("itemCost301").innerHTML = itemPrice301 * parseInt(getCookie("itemQuantity301")) + " Dhs.";
}
//Increase the item quantity and the cost
function add301() {
    setCookie("itemQuantity301", parseInt(getCookie("itemQuantity301")) + 1);
    display301();
}
//Decrease the item quantity and the cost
function sub301() {
    if (getCookie("itemQuantity301") > 0) {
        setCookie("itemQuantity301", parseInt(getCookie("itemQuantity301")) - 1);
        display301();
    }
}

/*--- item302 ---*/
//Display the price, quantity and cost
function display302() {
    document.getElementById("itemPrice302").innerHTML = itemPrice302 + " Dhs.";
    document.getElementById("itemQuantity302").innerHTML = parseInt(getCookie("itemQuantity302"));
    document.getElementById("itemCost302").innerHTML = itemPrice302 * parseInt(getCookie("itemQuantity302")) + " Dhs.";
}
//Increase the item quantity and the cost
function add302() {
    setCookie("itemQuantity302", parseInt(getCookie("itemQuantity302")) + 1);
    display302();
}
//Decrease the item quantity and the cost
function sub302() {
    if (getCookie("itemQuantity302") > 0) {
        setCookie("itemQuantity302", parseInt(getCookie("itemQuantity302")) - 1);
        display302();
    }
}

/*--- item303 ---*/
//Display the price, quantity and cost
function display303() {
    document.getElementById("itemPrice303").innerHTML = itemPrice303 + " Dhs.";
    document.getElementById("itemQuantity303").innerHTML = parseInt(getCookie("itemQuantity303"));
    document.getElementById("itemCost303").innerHTML = itemPrice303 * parseInt(getCookie("itemQuantity303")) + " Dhs.";
}
//Increase the item quantity and the cost
function add303() {
    setCookie("itemQuantity303", parseInt(getCookie("itemQuantity303")) + 1);
    display303();
}
//Decrease the item quantity and the cost
function sub303() {
    if (getCookie("itemQuantity303") > 0) {
        setCookie("itemQuantity303", parseInt(getCookie("itemQuantity303")) - 1);
        display303();
    }
}

/*--- item304 ---*/
//Display the price, quantity and cost
function display304() {
    document.getElementById("itemPrice304").innerHTML = itemPrice304 + " Dhs.";
    document.getElementById("itemQuantity304").innerHTML = parseInt(getCookie("itemQuantity304"));
    document.getElementById("itemCost304").innerHTML = itemPrice304 * parseInt(getCookie("itemQuantity304")) + " Dhs.";
}
//Increase the item quantity and the cost
function add304() {
    setCookie("itemQuantity304", parseInt(getCookie("itemQuantity304")) + 1);
    display304();
}
//Decrease the item quantity and the cost
function sub304() {
    if (getCookie("itemQuantity304") > 0) {
        setCookie("itemQuantity304", parseInt(getCookie("itemQuantity304")) - 1);
        display304();
    }
}

/*--- item305 ---*/
//Display the price, quantity and cost
function display305() {
    document.getElementById("itemPrice305").innerHTML = itemPrice305 + " Dhs.";
    document.getElementById("itemQuantity305").innerHTML = parseInt(getCookie("itemQuantity305"));
    document.getElementById("itemCost305").innerHTML = itemPrice305 * parseInt(getCookie("itemQuantity305")) + " Dhs.";
}
//Increase the item quantity and the cost
function add305() {
    setCookie("itemQuantity305", parseInt(getCookie("itemQuantity305")) + 1);
    display305();
}
//Decrease the item quantity and the cost
function sub305() {
    if (getCookie("itemQuantity305") > 0) {
        setCookie("itemQuantity305", parseInt(getCookie("itemQuantity305")) - 1);
        display305();
    }
}

/*--- item306 ---*/
//Display the price, quantity and cost
function display306() {
    document.getElementById("itemPrice306").innerHTML = itemPrice306 + " Dhs.";
    document.getElementById("itemQuantity306").innerHTML = parseInt(getCookie("itemQuantity306"));
    document.getElementById("itemCost306").innerHTML = itemPrice306 * parseInt(getCookie("itemQuantity306")) + " Dhs.";
}
//Increase the item quantity and the cost
function add306() {
    setCookie("itemQuantity306", parseInt(getCookie("itemQuantity306")) + 1);
    display306();
}
//Decrease the item quantity and the cost
function sub306() {
    if (getCookie("itemQuantity306") > 0) {
        setCookie("itemQuantity306", parseInt(getCookie("itemQuantity306")) - 1);
        display306();
    }
}

/*--- item307 ---*/
//Display the price, quantity and cost
function display307() {
    document.getElementById("itemPrice307").innerHTML = itemPrice307 + " Dhs.";
    document.getElementById("itemQuantity307").innerHTML = parseInt(getCookie("itemQuantity307"));
    document.getElementById("itemCost307").innerHTML = itemPrice307 * parseInt(getCookie("itemQuantity307")) + " Dhs.";
}
//Increase the item quantity and the cost
function add307() {
    setCookie("itemQuantity307", parseInt(getCookie("itemQuantity307")) + 1);
    display307();
}
//Decrease the item quantity and the cost
function sub307() {
    if (getCookie("itemQuantity307") > 0) {
        setCookie("itemQuantity307", parseInt(getCookie("itemQuantity307")) - 1);
        display307();
    }
}

/*--- item308 ---*/
//Display the price, quantity and cost
function display308() {
    document.getElementById("itemPrice308").innerHTML = itemPrice308 + " Dhs.";
    document.getElementById("itemQuantity308").innerHTML = parseInt(getCookie("itemQuantity308"));
    document.getElementById("itemCost308").innerHTML = itemPrice308 * parseInt(getCookie("itemQuantity308")) + " Dhs.";
}
//Increase the item quantity and the cost
function add308() {
    setCookie("itemQuantity308", parseInt(getCookie("itemQuantity308")) + 1);
    display308();
}
//Decrease the item quantity and the cost
function sub308() {
    if (getCookie("itemQuantity308") > 0) {
        setCookie("itemQuantity308", parseInt(getCookie("itemQuantity308")) - 1);
        display308();
    }
}

/*--- item309 ---*/
//Display the price, quantity and cost
function display309() {
    document.getElementById("itemPrice309").innerHTML = itemPrice309 + " Dhs.";
    document.getElementById("itemQuantity309").innerHTML = parseInt(getCookie("itemQuantity309"));
    document.getElementById("itemCost309").innerHTML = itemPrice309 * parseInt(getCookie("itemQuantity309")) + " Dhs.";
}
//Increase the item quantity and the cost
function add309() {
    setCookie("itemQuantity309", parseInt(getCookie("itemQuantity309")) + 1);
    display309();
}
//Decrease the item quantity and the cost
function sub309() {
    if (getCookie("itemQuantity309") > 0) {
        setCookie("itemQuantity309", parseInt(getCookie("itemQuantity309")) - 1);
        display309();
    }
}

/*--- item310 ---*/
//Display the price, quantity and cost
function display310() {
    document.getElementById("itemPrice310").innerHTML = itemPrice310 + " Dhs.";
    document.getElementById("itemQuantity310").innerHTML = parseInt(getCookie("itemQuantity310"));
    document.getElementById("itemCost310").innerHTML = itemPrice310 * parseInt(getCookie("itemQuantity310")) + " Dhs.";
}
//Increase the item quantity and the cost
function add310() {
    setCookie("itemQuantity310", parseInt(getCookie("itemQuantity310")) + 1);
    display310();
}
//Decrease the item quantity and the cost
function sub310() {
    if (getCookie("itemQuantity310") > 0) {
        setCookie("itemQuantity310", parseInt(getCookie("itemQuantity310")) - 1);
        display310();
    }
}

/*--- item311 ---*/
//Display the price, quantity and cost
function display311() {
    document.getElementById("itemPrice311").innerHTML = itemPrice311 + " Dhs.";
    document.getElementById("itemQuantity311").innerHTML = parseInt(getCookie("itemQuantity311"));
    document.getElementById("itemCost311").innerHTML = itemPrice311 * parseInt(getCookie("itemQuantity311")) + " Dhs.";
}
//Increase the item quantity and the cost
function add311() {
    setCookie("itemQuantity311", parseInt(getCookie("itemQuantity311")) + 1);
    display311();
}
//Decrease the item quantity and the cost
function sub311() {
    if (getCookie("itemQuantity311") > 0) {
        setCookie("itemQuantity311", parseInt(getCookie("itemQuantity311")) - 1);
        display311();
    }
}

/*--- item312 ---*/
//Display the price, quantity and cost
function display312() {
    document.getElementById("itemPrice312").innerHTML = itemPrice312 + " Dhs.";
    document.getElementById("itemQuantity312").innerHTML = parseInt(getCookie("itemQuantity312"));
    document.getElementById("itemCost312").innerHTML = itemPrice312 * parseInt(getCookie("itemQuantity312")) + " Dhs.";
}
//Increase the item quantity and the cost
function add312() {
    setCookie("itemQuantity312", parseInt(getCookie("itemQuantity312")) + 1);
    display312();
}
//Decrease the item quantity and the cost
function sub312() {
    if (getCookie("itemQuantity312") > 0) {
        setCookie("itemQuantity312", parseInt(getCookie("itemQuantity312")) - 1);
        display312();
    }
}

/*--- item313 ---*/
//Display the price, quantity and cost
function display313() {
    document.getElementById("itemPrice313").innerHTML = itemPrice313 + " Dhs.";
    document.getElementById("itemQuantity313").innerHTML = parseInt(getCookie("itemQuantity313"));
    document.getElementById("itemCost313").innerHTML = itemPrice313 * parseInt(getCookie("itemQuantity313")) + " Dhs.";
}
//Increase the item quantity and the cost
function add313() {
    setCookie("itemQuantity313", parseInt(getCookie("itemQuantity313")) + 1);
    display313();
}
//Decrease the item quantity and the cost
function sub313() {
    if (getCookie("itemQuantity313") > 0) {
        setCookie("itemQuantity313", parseInt(getCookie("itemQuantity313")) - 1);
        display313();
    }
}