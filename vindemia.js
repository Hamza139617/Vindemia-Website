let images = [
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845609/image1.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845608/image.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845600/5.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845599/image3.jpg" // this one is the base 
]



async function fetchingProducts() {

  const response = await fetch(
    "https://raw.githubusercontent.com/Hamza139617/Vindemia/main/products.json"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
 
  let parentDiv = document.getElementById("parentDiv");
let div = [];



for(let i = 0 , pathNum = 0 ; i < images.length ; i++ ){
  
  let rating = Math.round(data[i].rating);

 
  

    div[i] = document.createElement("div");
    div[i].setAttribute("class"," grid grid-cols-1  px-6 py-3 border-hidden shadow-[10px_13px_13px_0px_rgba(50,_50,_93,_0.25)] rounded-[20px] group  ");
    div[i].innerHTML = `
    <img src=${images[i]} class="rounded-[15px] w-[min(75%,300px)] m-auto transition-all duration-[1s] group-hover:-translate-x-[20px] group-hover:-translate-y-[30px] group-hover:scale-[1.2]  "></img>
        <h3 class="text-[min(30px,4vw)] font-bold font-font1 ">${data[i].name}</h3>
        <p class="font-light text-[18px] font-font1">Price $${data[i].price}</p>
        <div class="flex justify-between flex-col ">
          <div class="flex justify-center  items-center mb-4 bg-white px-2 max-[540px]:px-0.5  py-1  rounded-lg w-fit h-fit space-x-1 lg:space-x-1">
  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button class="mr-2">
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  
</div>

 

      <a href = "productDetail.html?id=${data[i].id}&images=${images[i]}" class=" m-auto" >   <button class="group relative px-6 py-2 overflow-hidden rounded-lg bg-white text-neutral-900 shadow ring-1 ring-neutral-900 transition-all hover:ring-gray-500">
  <span class="absolute inset-0 w-full h-full bg-gray-400 transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
  
  <span class="relative z-10 font-['Playfair_Display'] font-bold tracking-wider transition-colors duration-300 group-hover:text-white">
    ADD TO CART
  </span>
</button> </a>

        </div>
      </div>

    `;

    parentDiv.appendChild(div[i]);
    

     for(let j = 0 ; j < 5 ; j++  ){

      let path = parentDiv.getElementsByTagName("path")[pathNum++];

      
      
      if(rating > 0 ) {
      path.setAttribute("d"," M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z ")

      }else {

        path.setAttribute("d", " M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z ");

      }

      rating--;

    }

    



   
    
   
    
}


}



fetchingProducts();


let images1 = [
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768486993/fashion-belt-with-buckle.png",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768486979/malik-shibly-I7wnWm6HQQY-unsplash.png",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768486971/download.png",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768486966/claudio-schwarz-D3n859qG03U-unsplash.png"
]


async function fetchingProducts1() {

  const response = await fetch(
    "https://raw.githubusercontent.com/Hamza139617/Vindemia/main/accessories.json"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
 
  let parentDiv = document.getElementById("parentDiv1");
let div = [];



for(let i = 0 , pathNum = 0 ; i < images.length ; i++ ){
  
  let rating = Math.round(data[i].rating);

 
  

    div[i] = document.createElement("div");
    div[i].setAttribute("class"," grid grid-cols-1  px-6 py-3 border-hidden shadow-[10px_13px_13px_0px_rgba(50,_50,_93,_0.25)] rounded-[20px] group ");
    div[i].innerHTML = `
      <img src=${images1[i]} class="rounded-[15px] w-[min(75%,300px)] m-auto transition-all duration-[1s] group-hover:-translate-x-[20px] group-hover:-translate-y-[30px] group-hover:scale-[1.2]  "></img>
        <h3 class="text-[min(30px,4vw)] font-bold font-font1 ">${data[i].name}</h3>
        <p class="font-light text-[18px] font-font1">Price $${data[i].price}</p>
        <div class="flex justify-between flex-col ">
          <div class="flex justify-center  items-center mb-4 bg-white px-2 max-[540px]:px-0.5  py-1  rounded-lg w-fit h-fit space-x-1 lg:space-x-1">
  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button class="mr-2">
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  
</div>

 

      <a href = "accessoriesDetail.html?id=${data[i].id}&images=${images1[i]}" class=" m-auto" >   <button class="group relative px-6 py-2 overflow-hidden rounded-lg bg-white text-neutral-900 shadow ring-1 ring-neutral-900 transition-all hover:ring-gray-500">
  <span class="absolute inset-0 w-full h-full bg-gray-400 transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
  
  <span class="relative z-10 font-['Playfair_Display'] font-bold tracking-wider transition-colors duration-300 group-hover:text-white">
    ADD TO CART
  </span>
</button> </a>

        </div>
      </div>

    `;

    parentDiv.appendChild(div[i]);
    

     for(let j = 0 ; j < 5 ; j++  ){

      let path = parentDiv.getElementsByTagName("path")[pathNum++];

      
      
      if(rating > 0 ) {
      path.setAttribute("d"," M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z ")

      }else {

        path.setAttribute("d", " M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z ");

      }

      rating--;

    }

    



   
    
   
    
}


}



fetchingProducts1();



let images3 = [
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768443926/classic-stylish-men-s-shoes_rx0aps.png",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768443908/braden-hopkins-2-7vd8dvyoI-unsplash_pn27eb.png",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768443905/xavier-cee-biQIK_Xrbxo-unsplash_jwi72g.png",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768443893/luis-felipe-lins-J2-wAQDckus-unsplash_jxzmsi.png"
]


async function fetchingProducts3() {

  const response = await fetch(
    "https://raw.githubusercontent.com/Hamza139617/Vindemia/main/shoes.json"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
 
  let parentDiv = document.getElementById("parentDiv3");
let div = [];



for(let i = 0 , pathNum = 0 ; i < images.length ; i++ ){
  
  let rating = Math.round(data[i].rating);

 
  

    div[i] = document.createElement("div");
    div[i].setAttribute("class"," grid grid-cols-1  px-6 py-3 border-hidden shadow-[10px_13px_13px_0px_rgba(50,_50,_93,_0.25)] rounded-[20px] group ");
    div[i].innerHTML = `
      <img src=${images3[i]} class="rounded-[15px] w-[min(75%,300px)] m-auto transition-all duration-[1s] group-hover:-translate-x-[20px] group-hover:-translate-y-[30px] group-hover:scale-[1.2]  "></img>
        <h3 class="text-[min(30px,4vw)] font-bold font-font1 ">${data[i].name}</h3>
        <p class="font-light text-[18px] font-font1">Price $${data[i].price}</p>
        <div class="flex justify-between flex-col ">
          <div class="flex justify-center  items-center mb-4 bg-white px-2 max-[540px]:px-0.5  py-1  rounded-lg w-fit h-fit space-x-1 lg:space-x-1">
  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button class="mr-2">
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  
</div>

 

      <a href = "shoes.html?id=${data[i].id}&images=${images3[i]}" class=" m-auto" >   <button class="group relative px-6 py-2 overflow-hidden rounded-lg bg-white text-neutral-900 shadow ring-1 ring-neutral-900 transition-all hover:ring-gray-500">
  <span class="absolute inset-0 w-full h-full bg-gray-400 transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
  
  <span class="relative z-10 font-['Playfair_Display'] font-bold tracking-wider transition-colors duration-300 group-hover:text-white">
    ADD TO CART
  </span>
</button> </a>

        </div>
      </div>

    `;

    parentDiv.appendChild(div[i]);
    

     for(let j = 0 ; j < 5 ; j++  ){

      let path = parentDiv.getElementsByTagName("path")[pathNum++];

      
      
      if(rating > 0 ) {
      path.setAttribute("d"," M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z ")

      }else {

        path.setAttribute("d", " M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z ");

      }

      rating--;

    }

    



   
    
   
    
}


}



fetchingProducts3();

let images4 = [
   "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768556844/vecteezy_the-indian-groom-in-a-blue-and-white-indian-sherwani_57228643_rjoztp.png",
   "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768556809/gemini-2.5-flash-image_you_are_an_expert_photographer_and_do_photography_of_sherwanis_with_white_backgr-0_2_haj4s4.png",
   "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768556799/gemini-2.5-flash-image_you_are_an_expert_photographer_and_do_photography_of_sherwanis_with_white_backgr-0_1_n8d4v7.png",
   "https://res.cloudinary.com/duf2jzwsg/image/upload/v1768556793/gemini-2.5-flash-image_you_are_an_expert_photographer_and_do_photography_of_sherwanis_with_white_backgr-0_nz5dmm.png"
    ]


async function fetchingProducts4() {

  const response = await fetch(
    "https://raw.githubusercontent.com/Hamza139617/Vindemia/main/coat.json"
  );

  if (!response.ok) {
    throw new Error("Network response is not ok");
  }

  const data = await response.json();
 
  let parentDiv = document.getElementById("parentDiv4");
let div = [];



for(let i = 0 , pathNum = 0 ; i < images.length ; i++ ){
  
  let rating = Math.round(data[i].rating);

 
  

    div[i] = document.createElement("div");
    div[i].setAttribute("class"," grid grid-cols-1  px-6 py-3 border-hidden shadow-[10px_13px_13px_0px_rgba(50,_50,_93,_0.25)] rounded-[20px] group ");
    div[i].innerHTML = `
      <img src=${images4[i]} class="rounded-[15px] w-[min(75%,300px)] m-auto transition-all duration-[1s] group-hover:-translate-x-[20px] group-hover:-translate-y-[30px] group-hover:scale-[1.2]  "></img>
        <h3 class="text-[min(30px,4vw)] font-bold font-font1 ">${data[i].name}</h3>
        <p class="font-light text-[18px] font-font1">Price $${data[i].price}</p>
        <div class="flex justify-between flex-col ">
          <div class="flex justify-center  items-center mb-4 bg-white px-2 max-[540px]:px-0.5  py-1  rounded-lg w-fit h-fit space-x-1 lg:space-x-1">
  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button class="mr-2">
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  
</div>

 

      <a href = "coatDetail.html?id=${data[i].id}&images=${images4[i]}" class=" m-auto" >   <button class="group relative px-6 py-2 overflow-hidden rounded-lg bg-white text-neutral-900 shadow ring-1 ring-neutral-900 transition-all hover:ring-gray-500">
  <span class="absolute inset-0 w-full h-full bg-gray-400 transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
  
  <span class="relative z-10 font-['Playfair_Display'] font-bold tracking-wider transition-colors duration-300 group-hover:text-white">
    ADD TO CART
  </span>
</button> </a>

        </div>
      </div>

    `;

    parentDiv.appendChild(div[i]);
    

     for(let j = 0 ; j < 5 ; j++  ){

      let path = parentDiv.getElementsByTagName("path")[pathNum++];

      
      
      if(rating > 0 ) {
      path.setAttribute("d"," M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z ")

      }else {

        path.setAttribute("d", " M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z ");

      }

      rating--;

    }

    



   
    
   
    
}


}



fetchingProducts4();

let navLinks = document.querySelectorAll(".navbar-a");

// the image slider effect 

let header = document.getElementById("header");

let imageSlider2 = header.getElementsByTagName("img");
let imageSlider = Array.from(imageSlider2);
let counter = 0 ;
let svg = document.getElementById("specialSvg");

// svg problem over here 



imageSlider.forEach((slide,index) => {
 
  slide.style.left = `${index * 100 }%`;
  slide.style.transition = `transform`;
  slide.style.transitionDuration = `2s`;
  
});

const updateNavColor = () => {
    // If counter is 0 (first image), color is black, otherwise white
    const color = counter === 0 ? "black" : "white";
    
    navLinks.forEach(link => {
        // Add smooth transition logic here
        link.style.transition = "color 2s ease"; 
        link.style.color = color;
    });

    svg.style.transition = "fill 2s ease ";
    svg.style.fill = color ;
};

const sliding = () => {
  imageSlider.forEach( (slide) => {
    slide.style.transform =  `translateX(-${counter * 100 }%)`;
  })
}

let slideDirection = false ;

setInterval(() => {
  
  sliding();
  updateNavColor();

  
  if(slideDirection == false ) {
    counter++;
  }

  if(counter == 4 && slideDirection == false ) {
    counter--;
    slideDirection = true;
  }
   if(slideDirection == true && counter != -1  ) {
    counter--;
  }
  
  if(counter == -1 && slideDirection == true  ) {
    counter++;
    slideDirection = false ;
  }



  


},4000);
