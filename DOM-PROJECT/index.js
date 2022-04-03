let add = document.getElementsByClassName("addition1")
let subtract = document.getElementsByClassName("subtraction1")
let changeNo1 = document.getElementById("change1")
let changeNo2 = document.getElementById("change2")
let changeNo3 = document.getElementById("change3")
let changeNo4 = document.getElementById("change4")
let changeNo5 = document.getElementById("change5")
let changeNo6 = document.getElementById("change6")
let totalAmount = document.getElementById("amount")
let removeItem = document.getElementById("itemOneA")
let removeItem2 = document.getElementById("itemOneB")
let removeWhite1 = document.getElementById("itemTwoA")
let removeWhite2 = document.getElementById("itemTwoB")
let removeRed1 = document.getElementById("itemThreeA")
let removeRed2 = document.getElementById("itemThreeB")
let removeValeta1 = document.getElementById("itemFourA")
let removeValeta2 = document.getElementById("itemFourB")
let removeCastillo1 = document.getElementById("itemFiveA")
let removeCastillo2 = document.getElementById("itemFiveB")
let removeMerlot1 = document.getElementById("itemSixA")
let removeMerlot2 = document.getElementById("itemSixB")





let plus1 = 1
let plus2 = 1
let plus3 = 1
let plus4 = 1
let plus5 = 1
let plus6 = 1
let carbernetSauvignon = 7000
let fourWhite = 3800
let fourRed = 7500
let valeta = 2100
let castillo = 1750
let merlot = 7000


    // item 1

function increase1(){
    plus1 = plus1 + 1
    changeNo1.innerText = plus1;
    carbernetSauvignon = carbernetSauvignon + 7000
    document.getElementById("price1").innerText = carbernetSauvignon
}

function decrease1(){
    plus1 = plus1  - 1
    changeNo1.innerText = plus1;
     carbernetSauvignon = carbernetSauvignon - 7000
     document.getElementById("price1").innerText = carbernetSauvignon
     
}


  //item 2

  function increase2(){
      plus2 = plus2 + 1
      changeNo2.innerText = plus2;
      fourWhite = fourWhite + 3800
      document.getElementById("price2").innerText = fourWhite
      
  }
  function decrease2(){
      plus2 = plus2 - 1
      changeNo2.innerText = plus2;
      fourWhite = fourWhite - 3800
      document.getElementById("price2").innerText = fourWhite
      
  }

   //item 3

   function increase3(){
    plus3 = plus3 + 1
    changeNo3.innerText = plus3;
    fourRed = fourRed + 7500
    document.getElementById("price3").innerText = fourRed
}
function decrease3(){
    plus3 = plus3 - 1
    changeNo3.innerText = plus3;
    fourRed = fourRed - 7500
    document.getElementById("price3").innerText = fourRed
}

 //item 4

 function increase4(){
    plus4 = plus4 + 1
    changeNo4.innerText = plus4;
    valeta = valeta + 2100
    document.getElementById("price4").innerText = valeta
}
function decrease4(){
    plus4 = plus4 - 1
    changeNo4.innerText = plus4;
    valeta = valeta - 2100
    document.getElementById("price4").innerText = valeta
}

 //item 5

 function increase5(){
    plus5 = plus5 + 1
    changeNo5.innerText = plus5;
    castillo = castillo + 1750
    document.getElementById("price5").innerText = castillo
}
function decrease5(){
    plus5 = plus5 - 1
    changeNo5.innerText = plus5;
    castillo = castillo - 1750
    document.getElementById("price5").innerText = castillo
}

 //item 6

 function increase6(){
    plus6 = plus6 + 1
    changeNo6.innerText = plus6;
    merlot = merlot + 7000
    document.getElementById("price6").innerText = merlot
}
function decrease6(){
    plus6 = plus6 - 1
    changeNo6.innerText = plus6;
    merlot = merlot - 7000
    document.getElementById("price6").innerText = merlot
}
  
   //SUBTOTAL
function increment(){
    totalAmount.innerText = [  carbernetSauvignon + fourWhite + fourRed + valeta + castillo + merlot]
}

   // ITEM 1 REMOVE BUTTON
function del(){
   removeItem.remove();    
   removeItem2.remove();
}   

// ITEM 2 REMOVE BUTTON

function del2(){
    removeWhite1.remove();    
    removeWhite2.remove();
 }   

 // ITEM 3 REMOVE BUTTON

function del3(){
    removeRed1.remove();    
    removeRed2.remove();
 }   
 
 // ITEM 4 REMOVE BUTTON

function del4(){
    removeValeta1.remove();    
    removeValeta2.remove();
 }   
 
 // ITEM 5 REMOVE BUTTON

function del5(){
    removeCastillo1.remove();    
    removeCastillo2.remove();
 }   
 
 // ITEM 6 REMOVE BUTTON

function del6(){
    removeMerlot1.remove();    
    removeMerlot2.remove();
 }   
 

 let isLiked1 = "off";
 
    // item 1

function likeItem1() {
	const item1like = document.getElementById('item1like');

	if(isLiked1 === "on") {
		item1like.style.color = "black";
		isLiked1 = "off";
	} else {
		item1like.style.color = "red";
		isLiked1 = "on";

	}
}

 // item 2
 
 let isLiked2 = "off";
 

function likeItem2() {
	const item2like = document.getElementById('item2like');

	if(isLiked2 === "on") {
		item2like.style.color = "black";
		isLiked2 = "off";
	} else {
		item2like.style.color = "red";
		isLiked2 = "on";

	}
}

  // item 3

let isLiked3 = "off";
 

function likeItem3() {
	const item3like = document.getElementById('item3like');

	if(isLiked3 === "on") {
		item3like.style.color = "black";
		isLiked3 = "off";
	} else {
		item3like.style.color = "red";
		isLiked3 = "on";

	}
}


 
// item 4

let isLiked4 = "off";
 

function likeItem4() {
    const item4like = document.getElementById('item4like');

    if(isLiked4 === "on") {
        item4like.style.color = "black";
        isLiked4 = "off";
    } else {
        item4like.style.color = "red";
        isLiked4 = "on";

    }
}

// item 5

let isLiked5 = "off";
 

function likeItem5() {
    const item5like = document.getElementById('item5like');

    if(isLiked5 === "on") {
        item5like.style.color = "black";
        isLiked5 = "off";
    } else {
        item5like.style.color = "red";
        isLiked5 = "on";

    }
}


// item 6

let isLiked6 = "off";
 

function likeItem6() {
    const item6like = document.getElementById('item6like');

    if(isLiked6 === "on") {
        item6like.style.color = "black";
        isLiked6 = "off";
    } else {
        item6like.style.color = "red";
        isLiked6 = "on";

    }
}