import "dotenv/config";
import prisma from "../lib/prisma";
import { title } from "process";

async function main(){
await prisma.CookBook.deleteMany();
await prisma.chef.deleteMany();


//add chef
const rosaBell = await prisma.chef.create({
data:{
name:"Rosa Bell",
speciality: "Seafood",
town:"Brixham",
},
});

const tomAsante = await prisma.chef.create({
data:{
name:"Tom Asante",
speciality: "Street Food",
town:"Exeter",
},
});

const meganPryce = await prisma.chef.create({
data:{
name:"Megan Pryce",
speciality: "Baking",
town:"Newton Abbot",
},
});

//add books
const cathOfTheDay = await prisma.CookBook.create({
data: {
title:"Catch of the Day",
publishedYear:2021,
chefId: rosaBell.id
},
});

const harbourSuppers = await prisma.CookBook.create({
data: {
title:"Harbour Suppers",
publishedYear:2024,
chefId: rosaBell.id
},
});

const fireAndSpice = await prisma.CookBook.create({
data: {
title:"Fire and Spice",
publishedYear:2023,
chefId: tomAsante.id
},
});

const risingSlowly = await prisma.CookBook.create({
data: {
title:"Rising Slowly",
publishedYear:2025,
chefId: meganPryce.id
},
});

//add Recipes

const crabLinguine = await prisma.Recipe.create({
data:{
title:"Crab Linguine",
pageNumber:14,
cookingMinutes:25,
bookID: cathOfTheDay.id
},
});

const mackerelToast = await prisma.Recipe.create({
data:{
title:"Mackerel on Toast",
pageNumber:22,
cookingMinutes:15,
bookID: cathOfTheDay.id
},
});

const scallops = await prisma.Recipe.create({
data:{
title:"Seared Scallops",
pageNumber:40,
cookingMinutes:10,
bookID: harbourSuppers.id
},
});

const jerkChicken = await prisma.Recipe.create({
data:{
title:"Jerk Chicken",
pageNumber:12,
cookingMinutes:90,
bookID: fireAndSpice.id
},
});

const chickpeaCurry = await prisma.Recipe.create({
data:{
title:"Chickpea Curry",
pageNumber:27,
cookingMinutes:40,
bookID: fireAndSpice.id
},
})

//add Nutrition
const crabLinguine = await prisma.Nutrition.create({
data:{
calories:610,
saltGrams:2.1,
recipeId:crabLinguine.id
},
});

const fishPie = await prisma.Nutrition.create({
data:{
calories:540,
saltGrams:1.8,
recipeId:crabLinguine.id
},
});

const jerkChicken = await prisma.Nutrition.create({
data:{
calories:480,
saltGrams:2.4,
recipeId:crabLinguine.id
},
});

const chickpeaCurry = await prisma.Nutrition.create({
data:{
calories:390,
saltGrams:1.3,
recipeId:crabLinguine.id
},
});



console.log("seeding finished");
}

main()
.catch((error) =>{
console.error(error);
process.exit(1);
})
.finally(()=> prisma.$disconnect)

