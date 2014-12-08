var cookies = 0;
var cursors = 0;
var cursorMulti = 1;
var cursorLevel = 0;


function cookieClick(number) {
	cookies = cookies + number;		//increases cookie amount
	document.getElementById("cookies").innerHTML = Math.round(cookies);		//updates amount of cookies for the user
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
		cursorMulti = cursorMulti + 0.1;
		cookies = cookies - cursorUpgradeCost;
		document.getElementById('cursorUpgrades').innerHTML = cursorLevel;
		document.getElementById('cookies').innerHTML = Math.round(cookies);
	};
	var nextUpgradeCost = Math.floor(100 * Math.pow(1.3,cursorLevel));
	document.getElementById('cursorUpgradeCost').innerHTML = nextUpgradeCost;
	document.getElementById('cursorMulti').innerHTML = Math.floor((cursorMulti - 1) * 100);
};

window.setInterval(function(){
	cookieClick(((cursors*cursorMulti)/100));
}, 10);
