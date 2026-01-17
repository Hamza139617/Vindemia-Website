let images = [
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845609/image1.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845608/image.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845600/5.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845599/image3.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845599/laura-chouette-4sKdeIMiFEI-unsplash_qwtg8r.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845599/High_End_Commercial_Product_Still_Life_Photography_Tom_Ford_Fragrance_Cologne_kwx7oj.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845599/High_End_Commercial_Product_Still_Life_Photography_Tom_Ford_Fragrance_Cologne_kwx7oj.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845599/gemini-2.5-flash-image_I_am_creating_an_e-commerce_store_and_need_images_of_products_specifically_high--0_1_brifjn.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845599/gemini-2.5-flash-image_I_am_creating_an_e-commerce_store_and_need_images_of_products_specifically_high--0_x0hpqt.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845592/c07e5d7915d8ddb62d3a5eba9c8e5b7a_qn1d10.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845592/fernando-andrade-potCPE_Cw8A-unsplash_qvbyxh.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845592/3582649c5fab14c76d58921d75c6ed80_q0aju1.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845592/95a8e8c42ba166753c4ef7011cd86e1e_o4oo84.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845592/680d1d77e48871cbc5bb02a60c165d3b_g82hct.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845591/4_dnziu9.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845592/64ca3547698dc899ede3bd4a15c0d081_pkokbi.jpg",
    "https://res.cloudinary.com/duf2jzwsg/image/upload/v1767845591/7a897be86f48054463679facb7e2b5d0_esfij7.jpg" // this one is the base 
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
	<svg class="text-yellow-500 w-4 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-4 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-4 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button>
	<svg class="text-yellow-500 w-4 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path />
	</svg>
  </button>

  <button class="mr-2">
	<svg class="text-yellow-500 w-4 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
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

function toggleSidebar() {
    const sidebar = document.getElementById('filterSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    const isHidden = sidebar.classList.contains('translate-x-full');
    
    if (isHidden) {
        sidebar.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}
