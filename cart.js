async function productsOverview() {

    let parentDiv = document.getElementById("itemsOverview");
    let parentDiv2 = document.getElementById("parentDiv");
    let checkout = document.createElement("div");
    
    checkout.setAttribute('class','md:col-span-2 min-[639px]:col-span-2 max-sm:col-span-3  my-[20px] w-full h-fit max-w-[clamp(300px,100%,64rem)] mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden font-sans flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl');



    let div = [];

     // retaining the data from the local storage 
     let category = [];
     let id = [];
     let name = [];
     let image = [];
     let price = [];
     let total = 0 ;     


    for(let iteration = 0 ; iteration < Math.floor(localStorage.length/5) ; iteration++ ) {

       
    
            
            id[iteration] = localStorage.getItem(`id${iteration}`);
            name[iteration] = localStorage.getItem(`name${iteration}`);
            image[iteration] = localStorage.getItem(`image${iteration}`);
            price[iteration] = localStorage.getItem(`price${iteration}`);
            total += parseInt(price[iteration]);

        
        

        div[iteration] = document.createElement("div");
        div[iteration].setAttribute('class','group flex md:flex-row flex-col  items-center gap-6 p-5 mx-[10px] my-[15px] bg-[whitesmoke] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-fit ');
        div[iteration].innerHTML = `
        
    <img src="${image[iteration]}" alt="product" class="w-[150px] h-[150px] object-cover rounded-2xl shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
    
    <div class="flex flex-col w-full  gap-2">
        
        <p class="text-[#333] text-[15px] md:text-left text-center font-medium leading-relaxed font-font1">
            ${name[iteration]}  One final step, and you Vindemia story begins.
        </p>

        <div class="md:self-start self-center">
             <span class="px-3 py-1 text-[11px] font-bold tracking-wider text-white bg-[#333] rounded-full uppercase">
                1 Year Warranty
            </span>
        </div>

        <p class="text-[22px] font-bold text-black mt-2 md:text-left text-center">
            Price: $${price[iteration]}
        </p>
    </div>
        `;
        parentDiv.appendChild(div[iteration]);
    }

    checkout.innerHTML = `
    <div class="flex-1 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col  ">
    
    <div class="p-[clamp(1.25rem,3vw,2.5rem)]">
      <h2 class="font-bold text-black mb-6 tracking-tight text-[clamp(1.125rem,2vw,1.375rem)] leading-tight">
        Shipping Details
      </h2>
      
      <div class="grid grid-cols-1 gap-5">
        <div class="relative group">
          <label class="font-bold text-gray-400 uppercase ml-1 mb-1 block tracking-wider text-[clamp(0.65rem,1vw,0.75rem)]">Full Name</label>
          <input 
            type="text" 
            placeholder="e.g. John Doe" 
            class="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 placeholder-gray-400 text-[clamp(0.875rem,1.5vw,1rem)]"
          >
        </div>

        <div class="relative group">
          <label class="font-bold text-gray-400 uppercase ml-1 mb-1 block tracking-wider text-[clamp(0.65rem,1vw,0.75rem)]">Physical Address</label>
          <textarea 
            rows="3"
            placeholder="Street, Apt, Suite..." 
            class="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 placeholder-gray-400 resize-none text-[clamp(0.875rem,1.5vw,1rem)]"
          ></textarea>
        </div>

        <div class="flex gap-6 pt-1">
          <label class="relative flex items-center cursor-pointer group">
              <input type="radio" name="address_type" class="peer sr-only" checked>
              <div class="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-black peer-checked:bg-black transition-all duration-300 relative">
                   <div class="absolute inset-0 m-auto w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
              </div>
              <span class="ml-2 font-medium text-gray-500 group-hover:text-black transition-colors text-[clamp(0.875rem,1.5vw,1rem)]">Home</span>
          </label>
          <label class="relative flex items-center cursor-pointer group">
              <input type="radio" name="address_type" class="peer sr-only">
              <div class="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-black peer-checked:bg-black transition-all duration-300 relative">
                   <div class="absolute inset-0 m-auto w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
              </div>
              <span class="ml-2 font-medium text-gray-500 group-hover:text-black transition-colors text-[clamp(0.875rem,1.5vw,1rem)]">Office</span>
          </label>
        </div>
      </div>
    </div>

    <div class="mt-auto px-[clamp(1.25rem,3vw,2.5rem)] py-6 bg-gray-950 text-white">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div>
            <p class="text-gray-400 uppercase tracking-wide font-bold text-[clamp(0.6rem,1vw,0.7rem)]">Courier</p>
            <p class="font-bold text-[clamp(0.85rem,1.5vw,1rem)]">DHL Express</p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-gray-400 uppercase tracking-wide font-bold text-[clamp(0.6rem,1vw,0.7rem)]">Delivery Est.</p>
          <p class="font-bold text-[clamp(0.85rem,1.5vw,1rem)]">2 - 4 Business Days</p>
        </div>
      </div>
    </div>
  </div>

  <div class="flex-1 p-[clamp(1.25rem,3vw,2.5rem)] bg-gray-50 flex flex-col">
    <div class="flex justify-between items-center mb-6">
      <h3 class="font-bold text-gray-400 uppercase tracking-widest text-[clamp(0.7rem,1.2vw,0.8rem)]">Order Summary</h3>
      <span class="font-bold bg-black text-white px-3 py-1 rounded-full text-[clamp(0.65rem,1vw,0.75rem)]">${localStorage.length/5} Items</span>
    </div>

    <div class="space-y-4 mb-8" id="orderSummary">
      
    </div>

    <div class="flex gap-2 mb-10">
      <input 
        type="text" 
        placeholder="Discount code" 
        class="flex-grow bg-white border  border-gray-300 text-gray-700 w-[100px] rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-[clamp(0.85rem,1.5vw,0.95rem)]"
      >
      <button class="bg-gray-200 w-[100px] hover:bg-black hover:text-white text-black font-bold px-6 rounded-xl transition-all duration-300 text-[clamp(0.8rem,1.5vw,0.9rem)]">
        Apply
      </button>
    </div>

    <div class="mt-auto pt-6 border-t border-gray-300">
      <div class="flex justify-between items-end mb-6">
        <span class="text-gray-500 font-medium text-[clamp(0.85rem,1.5vw,1rem)]">Total Amount</span>
        <span class="font-black text-black tracking-tighter leading-none text-[clamp(1.5rem,4vw,2.25rem)]">$${total}</span>
      </div>

      <a href="#" class="group relative w-full flex justify-center items-center py-4 px-4 font-bold uppercase tracking-widest rounded-xl text-white bg-black overflow-hidden shadow-lg transition-all duration-300 transform active:scale-[0.98] text-[clamp(0.8rem,1.5vw,0.95rem)]">
        <div class="absolute inset-0 w-full h-full bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
        <div class="relative flex items-center gap-3 z-10">
          <span>Complete Payment</span>
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      </a>
    </div>
  </div>

    `;

    parentDiv.after(checkout);

    let orderSummary = document.getElementById("orderSummary");
    let divOrder = [];

    for(let iteration = 0 ; iteration < Math.floor(localStorage.length/5) ; iteration++ ) {


        divOrder[iteration] = document.createElement("div");
        divOrder[iteration].setAttribute("class","flex justify-between items-center text-[min(2vw,15px)] border-b border-gray-200 pb-3");
        divOrder[iteration].innerHTML = `
        <span class="text-gray-600 font-medium">${name[iteration]}</span>
        <span class="font-bold text-black">$${price[iteration]}</span>
        `;

        orderSummary.appendChild(divOrder[iteration]);

    }


}

productsOverview();