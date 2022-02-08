'use strict';

//-------Selecting div element present in html------//

let cards=document.querySelector('.recipiesCard');
cards.classList.add('card');

//-------Ceating h1 tag--------//

 let heading=document.createElement('h1');
 heading.textContent="Recently Ordered";
 heading.classList.add('rec');
 cards.appendChild(heading);

//-------Creating div element-----------//
 let mainSection=document.createElement('div');
 mainSection.classList.add('recipies','food','shawdow');
 mainSection.classList.add();
 cards.appendChild(mainSection);
 
//-------adding images------------//

let image1=document.createElement('img');
image1.src="images/image--1.jpg";
mainSection.appendChild(image1);

//Creating list for displaying the data
let list1=document.createElement('ul');
let childdata1=document.createElement('li');
let tag=document.createElement('span');
tag.classList.add('tag-veg','meal-tags');
tag.textContent="Non-Vegetarian";
childdata1.appendChild(tag);
list1.appendChild(childdata1);
mainSection.appendChild(list1);

let childdata2=document.createElement('li');
let item1=document.createElement('h3');
item1.textContent="Chicken Biryani.";
childdata2.appendChild(item1);
list1.appendChild(childdata2);


list1.classList.add('food');
let child=document.createElement('li');
let childEl=document.createElement('span');
childEl.textContent="400 Calories";
childEl.classList.add('text');
mainSection.appendChild(list1);
list1.appendChild(child);
child.appendChild(childEl);


let child2=document.createElement('li');
let childEl2=document.createElement('span');
childEl2.textContent="4.8 rating(441)";
childEl2.classList.add('text');
child2.appendChild(childEl2);

list1.appendChild(child2);

//----Adding second card--------//

let card2div=document.createElement('div');
card2div.classList.add('carrot','food','shawdow');
let image2=document.createElement('img');

//------adding image--------//
image2.src="images/image--2.jpg";
card2div.appendChild(image2);
cards.appendChild(card2div);


let listSec=document.createElement('ul');
let childdataSec=document.createElement('li');
let tag2=document.createElement('span');
tag2.classList.add('tag-veg','meal-tags');
tag2.textContent="Vegetarian";
childdataSec.appendChild(tag2);
listSec.appendChild(childdataSec);
mainSection.appendChild(listSec);

let dataSec=document.createElement('li');
let item2=document.createElement('h3');
item2.textContent="Carrot Halwa";
dataSec.appendChild(item2);
listSec.appendChild(dataSec);

//Creating list fo displaying the data


let childSec=document.createElement('li');
let childSecEl=document.createElement('span');
childSecEl.textContent="900 Calories";
childSecEl.classList.add('text');
card2div.appendChild(listSec);
listSec.appendChild(childSec);
childSec.appendChild(childSecEl);


let childSec2=document.createElement('li');
let childSecEl2=document.createElement('span');
childSecEl2.textContent="4.5 rating(941)";
childSecEl2.classList.add('text');
childSec2.appendChild(childSecEl2);
listSec.appendChild(childSec2);

//---------Adding third card----------------//

let card3div=document.createElement('div');
card3div.classList.add('cakeimg1','food','hidden','shawdow');3
let image3=document.createElement('img');
image3.src="images/cake--3.jpg";
card3div.appendChild(image3);
cards.appendChild(card3div)

//Creating list for displaying the data
let listthird=document.createElement('ul');
let firstlist=document.createElement('li');
let tag3=document.createElement('span');
tag3.classList.add('tag-veg','meal-tags');
tag3.textContent="Vegan";
firstlist.appendChild(tag3);
listthird.appendChild(firstlist);
card3div.appendChild(listthird);

let seclist=document.createElement('li');
let item3=document.createElement('h3');
item3.textContent="RedVelvet Cake";
listthird.appendChild(seclist)
seclist.appendChild(item3);


listthird.classList.add('food');
let childth=document.createElement('li');
let childthEl=document.createElement('span');
childthEl.textContent="1900 Calories";
childthEl.classList.add('text');
listthird.appendChild(childth);
childth.appendChild(childthEl);


let childth2=document.createElement('li');
let childthEl2=document.createElement('span');
childthEl2.textContent="4.5 rating(941)";
childthEl2.classList.add('text');
childth2.appendChild(childthEl2);
listthird.appendChild(childth2);

//--------------Adding fouth card------------


let card4div=document.createElement('div');
card4div.classList.add('cakeimg2','food','hidden','shawdow');
let image4=document.createElement('img');
image4.src="images/cake--4.jpg";
card4div.appendChild(image4);
cards.appendChild(card4div)

//Creating list for displaying the data

let listfif=document.createElement('ul');
let thirdlist=document.createElement('li');
let tag4=document.createElement('span');
tag4.classList.add('tag-veg','meal-tags');
tag4.textContent="Choclate";
thirdlist.appendChild(tag4);
listfif.appendChild(thirdlist);
card4div.appendChild(listfif);

let fouthlist=document.createElement('li');
let item4=document.createElement('h3');
item4.textContent="Choclate Cake";
fouthlist.appendChild(item4);
listfif.appendChild(fouthlist);


listfif.classList.add('food');
let childfif=document.createElement('li');
let childfifEl=document.createElement('span');
childfifEl.textContent="1900 Calories";
childfifEl.classList.add('text');
card4div.appendChild(listfif);
listfif.appendChild(childfif);
childfif.appendChild(childfifEl);


let childfth2=document.createElement('li');
let childfthEl2=document.createElement('span');
childfthEl2.textContent="4.5 rating(941)";
childfthEl2.classList.add('text');
childfth2.appendChild(childfthEl2);
listfif.appendChild(childfth2);

//-----creating fifth card----------

let card5div=document.createElement('div');
card5div.classList.add('pizzaimg1','food','hidden','shawdow');
let image5=document.createElement('img');
image5.src="images/pizza--1.jpg";
card5div.appendChild(image5);
cards.appendChild(card5div)

//Creating list for displaying the data
let list5=document.createElement('ul');
let slist=document.createElement('li');
let tag5=document.createElement('span');
tag5.classList.add('tag-veg','meal-tags');
tag5.textContent="Vegetarian";
slist.appendChild(tag5);
list5.appendChild(slist);
card5div.appendChild(list5);

let slists=document.createElement('li');
let item5=document.createElement('h3');
item5.textContent="Chicken Pizza";
slists.appendChild(item5);
list5.appendChild(slists);

list5.classList.add('food');
let child5=document.createElement('li');
let child5El=document.createElement('span');
child5El.textContent="1900 Calories";
child5El.classList.add('text');
card5div.appendChild(list5);
list5.appendChild(child5);
child5.appendChild(child5El);


let childli5=document.createElement('li');
let childliEl5=document.createElement('span');
childliEl5.textContent="4.5 rating(941)";
childliEl5.classList.add('text');
childli5.appendChild(childliEl5);
list5.appendChild(childli5);

//---------Creating sixth card-----------

let card6div=document.createElement('div');
card6div.classList.add('pizzaimg2','food','hidden','shawdow');
let image6=document.createElement('img');
image6.src="images/pizza--2.jpg";
card6div.appendChild(image6);
cards.appendChild(card6div)

//Creating list fo displaying the data

let namelist6=document.createElement('ul');
let childs=document.createElement('li');
let tag6=document.createElement('span');
tag6.classList.add('tag-veg','meal-tags');
tag6.textContent="Vegetarian";
childs.appendChild(tag6);
namelist6.appendChild(childs);
card6div.appendChild(namelist6);

let childs7=document.createElement('li');
let item6=document.createElement('h3');
item6.textContent="Mushoom Pizza";
childs7.appendChild(item6);
namelist6.appendChild(childs7);




namelist6.classList.add('food');
let child6=document.createElement('li');
let child6El=document.createElement('span');
child6El.textContent="1900 Calories";
child6El.classList.add('text');
card6div.appendChild(namelist6);
namelist6.appendChild(child6);
child6.appendChild(child6El);


let childli6=document.createElement('li');
let childliEl2=document.createElement('span');
childliEl2.textContent="4.5 rating(941)";
childliEl2.classList.add('text');
childli6.appendChild(childliEl2);
namelist6.appendChild(childli6);

//Creating details about food

let dietPlan=document.querySelector('.diets');
let plan1=document.createElement('ul'); 
plan1.classList.add('list','hidden','model'); 
let planlist=document.createElement('li');
planlist.classList.add('list-item')
planlist.textContent="Vegetarian";
dietPlan.appendChild(plan1); 
dietPlan.appendChild(planlist);

let planlist2=document.createElement('li');
planlist2.classList.add('list-item')
planlist2.textContent="Vegan";
plan1.appendChild(planlist2);

let planlist3=document.createElement('li');
planlist3.classList.add('list-item')
planlist3.textContent="Pescatarian";
plan1.appendChild(planlist3);

let planlist4=document.createElement('li');
planlist4.classList.add('list-item')
planlist4.textContent="Gluten-free";
plan1.appendChild(planlist4);

let planlist5=document.createElement('li');
planlist5.classList.add('list-item')
planlist5.textContent="Lactose-free";
plan1.appendChild(planlist5);

let planlist6=document.createElement('li');
planlist6.classList.add('list-item')
planlist6.textContent="Keto";
plan1.appendChild(planlist6);

let planlist7=document.createElement('li');
planlist7.classList.add('list-item')
planlist7.textContent="Paleo";
plan1.appendChild(planlist7);

let planlist8=document.createElement('li');
planlist8.classList.add('list-item')
planlist8.textContent="Low FODMAP";
plan1.appendChild(planlist8);

let planlist9=document.createElement('li');
planlist9.classList.add('list-item')
planlist9.textContent="Kid-friendly";
plan1.appendChild(planlist9);



//------Selecting class elements----------//

const model=document.querySelector('.model');
const overlay=document.querySelector('.overlay');
const list=document.querySelector('.list');
const showModel=document.querySelector('.show-Model');
const closeModel=document.querySelector('.close'); 
const cake=document.querySelector('.cake');
const cakeimage1=document.querySelector('.cakeimg1');
const cakeimage2=document.querySelector('.cakeimg2');
const pizzaimage1=document.querySelector('.pizzaimg1');
const pizzaimage2=document.querySelector('.pizzaimg2');
const pizza=document.querySelector('.pizza');
const recipies=document.querySelector('.recipies');
const carrot=document.querySelector('.carrot');

//-----function for showing the content-----//
const btnopenModal=function()
{
    list.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

//-------function for hidding the content-----//
const btncloseModal=function(){
    list.classList.add('hidden');
    overlay.classList.add('hidden');
    } 
 
const hideRecipe=function(){
    recipies.classList.add('hidden');
    carrot.classList.add('hidden');
}    
//-------Adding click event------------//
cake.addEventListener('click',function(){
    cakeimage1.classList.remove('hidden');
    cakeimage2.classList.remove('hidden');
    pizzaimage1.classList.add('hidden');
    pizzaimage2.classList.add('hidden');
    recipies.classList.add('hidden');
    carrot.classList.add('hidden');
    })
    
 //---------Adding click Event---------//   
pizza.addEventListener('click',function(){
    cakeimage1.classList.add('hidden');
    cakeimage2.classList.add('hidden');
    pizzaimage1.classList.remove('hidden');
    pizzaimage2.classList.remove('hidden');
    recipies.classList.add('hidden');
    carrot.classList.add('hidden');

})    

showModel.addEventListener('click',btnopenModal);
/*closeModel.addEventListener('click',btncloseModal);*/
overlay.addEventListener('click',btncloseModal) ; 


//For closing the page when escape key is peressed
document.addEventListener('keydown',function(e)
{
   if(e.key=== 'Escape' && !model.classList.contains('hidden'))
   btncloseModal();
})




