export const categories = [
  { id:"pizza", name:"Pizza", emoji:"🍕", color:"bg-orange-50" },
  { id:"burger", name:"Burgers", emoji:"🍔", color:"bg-yellow-50" },
  { id:"indian", name:"Indian", emoji:"🍛", color:"bg-red-50" },
  { id:"asian", name:"Asian", emoji:"🍜", color:"bg-emerald-50" },
  { id:"dessert", name:"Desserts", emoji:"🍰", color:"bg-pink-50" },
  { id:"healthy", name:"Healthy", emoji:"🥗", color:"bg-lime-50" },
  { id:"coffee", name:"Coffee", emoji:"☕", color:"bg-amber-50" },
  { id:"biryani", name:"Biryani", emoji:"🍲", color:"bg-violet-50" }
];

const images = {
  pizza:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
  burger:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  indian:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
  asian:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
  dessert:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
  healthy:"https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=900&q=80",
  coffee:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  biryani:"https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80"
};

export const restaurants = [
  {id:"r1",name:"Ember & Crust",cuisine:["Pizza","Italian"],rating:4.7,time:28,price:650,veg:true,offer:"50% OFF up to ₹120",image:images.pizza,address:"Hinjawadi Phase 1",open:true},
  {id:"r2",name:"Bombay Bowl Co.",cuisine:["Indian","Biryani"],rating:4.6,time:32,price:550,veg:false,offer:"20% OFF",image:images.biryani,address:"Wakad",open:true},
  {id:"r3",name:"Green Fork",cuisine:["Healthy","Salads"],rating:4.5,time:24,price:500,veg:true,offer:"Free delivery",image:images.healthy,address:"Baner",open:true},
  {id:"r4",name:"Wok & Roll",cuisine:["Asian","Chinese"],rating:4.4,time:29,price:700,veg:true,offer:"Flat ₹100 OFF",image:images.asian,address:"Aundh",open:true},
  {id:"r5",name:"Stack Theory",cuisine:["Burgers","American"],rating:4.6,time:26,price:600,veg:false,offer:"Buy 1 Get 1",image:images.burger,address:"Viman Nagar",open:true},
  {id:"r6",name:"Saffron Story",cuisine:["Indian","North Indian"],rating:4.3,time:35,price:750,veg:true,offer:"15% OFF",image:images.indian,address:"Kothrud",open:true},
  {id:"r7",name:"Sugar Rush",cuisine:["Desserts","Bakery"],rating:4.8,time:22,price:400,veg:true,offer:"20% OFF",image:images.dessert,address:"Pimple Saudagar",open:true},
  {id:"r8",name:"Brew District",cuisine:["Coffee","Cafe"],rating:4.5,time:20,price:450,veg:true,offer:"Combo from ₹199",image:images.coffee,address:"Balewadi",open:true},
  {id:"r9",name:"Napoli Noon",cuisine:["Pizza","Italian"],rating:4.2,time:31,price:800,veg:false,offer:"10% OFF",image:images.pizza,address:"Kalyani Nagar",open:true},
  {id:"r10",name:"Tandoor Trail",cuisine:["Indian","Kebab"],rating:4.4,time:34,price:650,veg:false,offer:"25% OFF",image:images.indian,address:"Shivaji Nagar",open:true},
  {id:"r11",name:"Noodle Nest",cuisine:["Asian","Thai"],rating:4.1,time:27,price:550,veg:true,offer:"Flat ₹75 OFF",image:images.asian,address:"Magarpatta",open:true},
  {id:"r12",name:"The Daily Bite",cuisine:["Healthy","Cafe"],rating:4.3,time:25,price:480,veg:true,offer:"Free smoothie",image:images.healthy,address:"Koregaon Park",open:true},
  {id:"r13",name:"Burger Barn",cuisine:["Burgers","Fast Food"],rating:4.0,time:23,price:450,veg:false,offer:"30% OFF",image:images.burger,address:"Pimple Nilakh",open:true},
  {id:"r14",name:"Royal Biryani House",cuisine:["Biryani","Indian"],rating:4.7,time:38,price:700,veg:false,offer:"20% OFF up to ₹150",image:images.biryani,address:"Camp",open:true},
  {id:"r15",name:"Crumb & Co.",cuisine:["Desserts","Bakery","Coffee"],rating:4.6,time:21,price:520,veg:true,offer:"Buy 2 Get 1",image:images.dessert,address:"Deccan",open:true}
];

const itemTemplates = {
  pizza:[
    ["Truffle Margherita",389,true],["Smoky Farmhouse",349,true],["Pesto Burrata Pizza",449,true],["Spicy Pepperoni",429,false],["Garlic Cheese Bread",199,true]
  ],
  indian:[
    ["Paneer Tikka Masala",299,true],["Butter Chicken",349,false],["Dal Makhani",249,true],["Tandoori Chicken",379,false],["Jeera Rice",169,true]
  ],
  asian:[
    ["Classic Hakka Noodles",249,true],["Chilli Garlic Ramen",329,true],["Thai Basil Chicken",359,false],["Veg Dim Sum",279,true],["Crispy Spring Rolls",219,true]
  ],
  burger:[
    ["Classic Smash Burger",299,false],["Crispy Paneer Burger",279,true],["Double Cheese Burger",399,false],["Loaded Fries",189,true],["Peri Peri Chicken Burger",349,false]
  ],
  healthy:[
    ["Avocado Grain Bowl",329,true],["Paneer Power Salad",299,true],["Chicken Protein Bowl",379,false],["Berry Yogurt Cup",219,true],["Hummus Pita Plate",249,true]
  ],
  dessert:[
    ["Belgian Chocolate Cake",269,true],["Lotus Biscoff Cheesecake",299,true],["Red Velvet Slice",249,true],["Choco Chip Cookie Box",199,true],["Mango Tres Leches",289,true]
  ],
  coffee:[
    ["Iced Spanish Latte",189,true],["Cappuccino",169,true],["Cold Brew",199,true],["Hazelnut Mocha",219,true],["Croissant & Coffee",249,true]
  ],
  biryani:[
    ["Hyderabadi Chicken Biryani",369,false],["Paneer Biryani",299,true],["Mutton Dum Biryani",449,false],["Chicken 65",259,false],["Raita",99,true]
  ]
};

export const menuItems = [];
restaurants.forEach((r, idx) => {
  const cat = Object.keys(itemTemplates)[idx % Object.keys(itemTemplates).length];
  itemTemplates[cat].forEach((x, j) => {
    menuItems.push({ id:`${r.id}-i${j+1}`, restaurantId:r.id, name:x[0], price:x[1], veg:x[2], category:cat, image:images[cat], description:"Freshly prepared with balanced seasoning and premium ingredients." });
  });
});

export const ordersSeed = [
  {id:"FF-20481", restaurant:"Ember & Crust",date:"Today, 1:15 PM",total:827,status:"On the way",items:["Truffle Margherita","Garlic Cheese Bread"]},
  {id:"FF-19872", restaurant:"Green Fork",date:"18 Aug 2026",total:548,status:"Delivered",items:["Avocado Grain Bowl","Berry Yogurt Cup"]},
  {id:"FF-19314", restaurant:"Wok & Roll",date:"12 Aug 2026",total:712,status:"Delivered",items:["Classic Hakka Noodles","Veg Dim Sum"]}
];
