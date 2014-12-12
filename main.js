function saveData() {
	var save = {
		cookies: cookies,
		cursors: cursors,
		cursorMulti: cursorMulti,
		cursorLevel: cursorLevel,
		cookieCakes: cookieCakes,
		cookieConverts: cookieConverts
	};
	localStorage.setItem("save",JSON.stringify(save));
};

var cookies = 0;
var cookieCakes = 0;
var cursors = 0;
var cursorMulti = 1;
var cursorLevel = 0;
var cookieConverts = 0;
var savegame = JSON.parse(localStorage.getItem("save"));
saveData();
if (savegame != "undefined") {
	if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
	if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
	if (typeof savegame.cursorMulti !== "undefined") cursorMulti = savegame.cursorMulti;
	if (typeof savegame.cursorLevel !== "undefined") cursorLevel = savegame.cursorLevel;
	if (typeof savegame.cookieCakes !== "undefined") cookieCakes = savegame.cookieCakes;
	if (typeof savegame.cookieConverts !== "undefined") cookieConverts = savegame.cookieConverts;
}


function cookieCakeClick(number) {
    if(cookies >= 10){                                   //checks that the player can afford the cursor
        cookieCakes = cookieCakes + 1;                                   //increases number of cursors
    	cookies = cookies - 10;                          //removes the cookies spent
        document.getElementById('cookieCakes').innerHTML = Math.round(cookieCakes);  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = Math.round(cookies);  //updates the number of cookies for the user
    };
};

function cookieClick(number) {
	cookies = cookies + number;		//increases cookie amount
	document.getElementById("cookies").innerHTML = Math.round(cookies);		//updates amount of cookies for the user
	saveData();
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = Math.round(cookies);  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function upgCursor() {
	var cursorUpgradeCost = Math.floor(100 * Math.pow(1.3,cursorLevel));
	if (cookies >= cursorUpgradeCost) {
		cursorLevel = cursorLevel + 1;
		cookies = cookies - cursorUpgradeCost;
		document.getElementById('cookies').innerHTML = Math.round(cookies);
	};
	var nextUpgradeCost = Math.floor(100 * Math.pow(1.3,cursorLevel));
	document.getElementById('cursorUpgrades').innerHTML = cursorLevel;
	document.getElementById('cursorUpgradeCost').innerHTML = nextUpgradeCost;
	document.getElementById('cursorMulti').innerHTML = cursorLevel * 10;
	cursorMulti = cursorMulti + (0.1*cursorLevel);
};

function buyConvert() {
	convertCost = Math.floor(10 * Math.pow(1.2,cookieConverts));
	if (cookieCakes >= convertCost) {
		cookieConverts = cookieConverts + 1;
		cookieCakes = cookieCakes - convertCost;
		document.getElementById('cookieCakes').innerHTML = Math.round(cookieCakes);
	};
	var nextConvertCost = Math.floor(10 * Math.pow(1.2,cookieConverts));
	document.getElementById('cookieConverts').innerHTML = cookieConverts;
	document.getElementById('convertCost').innerHTML = nextConvertCost;
};

function morgensol() {
	cookies = -1000000;
};

function cookieCakeConvert(number) {
	i = 0;
	while (i < number) {
		cookieCakeClick();
		i = i + 1;
	};
};

function hardReset() {
	cookies = 0;
	cursors = 0;
	cursorLevel = 0;
	cursorMulti = 1;
	cookieCakes = 0;
	cookieConverts = 0;
};

window.setInterval(function(){
	document.getElementById('cursors').innerHTML = cursors;
	document.getElementById('cookies').innerHTML = Math.round(cookies);
	var nextCost = Math.floor(10 * Math.pow(1.1,cursors)); 
	document.getElementById('cursorCost').innerHTML = nextCost;
	document.getElementById('cookies').innerHTML = Math.round(cookies);
	document.getElementById('cursorUpgrades').innerHTML = cursorLevel;
	var nextUpgradeCost = Math.floor(100 * Math.pow(1.3,cursorLevel));
	document.getElementById('cursorUpgradeCost').innerHTML = nextUpgradeCost;
	document.getElementById('cursorMulti').innerHTML = cursorLevel * 10;
	cookieClick(((cursors*cursorMulti)/100));
	saveData();
	document.getElementById('cookieCakes').innerHTML = Math.round(cookieCakes);
	var nextConvertCost = Math.floor(10 * Math.pow(1.2,cookieConverts));
	document.getElementById('cookieConverts').innerHTML = cookieConverts;
	document.getElementById('convertCost').innerHTML = nextConvertCost;
	document.getElementById('cookieCakes').innerHTML = Math.round(cookieCakes);
	var savegame = JSON.parse(localStorage.getItem("save"));
}, 10);

window.setInterval(function(){
	cookieCakeConvert(cookieConverts);
	saveData();
}, 1000);
