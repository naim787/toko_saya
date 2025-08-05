 <script>
  export let dt;
  export let noTelp;
  let value = 1;

  // periggatan
  let warnAlert = false;

  // color & size
  let selectedSize = "";  
  let selectedColor = ""; 

  // reamtime subtotal
  $: subtotal = dt?.price * value;

  // fugsi pesanan
  function pesanProducts() {

    if (!selectedSize || !selectedColor) {
      warnAlert = true;
      setTimeout(()=>{
        warnAlert = false
      }, 5000)
      console.warn("Tidak bisa melakukan pesanan: size dan warna harus dipilih.");
      alert("Silakan pilih ukuran (size) dan warna terlebih dahulu!");
      return;
    }

    let noWa = noTelp; // tanpa spasi atau tanda +
    const message = `saya iggin pesan pesan😍😍%0Anama product : ${dt?.name}%0Awarna : ${selectedColor}%0Asize : ${selectedSize}%0Ajumlah : ${value}%0ATotal : ${subtotal}%0ATERIMA KASIH❤❤❤`;

    // Buka WhatsApp
    window.open(`https://wa.me/${noWa}?text=${message}`, "_blank");

    // Reset data (jika perlu)
    selectedSize = "";  
    selectedColor = ""; 
    value = 1;
}

 </script>
 
 <dialog id="my_modal_3" class="modal backdrop-blur">
      <div class="modal-box w-[95%] h-auto bg-white p-2 rounded-md overflow-hidden">
        <!-- alert warning -->
         {#if warnAlert}
         <div role="alert" class="alert alert-warning absolute top-0 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Warning: Invalid email address!</span>
          </div>
         {/if}



        <!-- close -->
        <form method="dialog" class="absolute top-0 right-0">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 p-[1px] border bg-red-500 backdrop-blur text-black shadow font-bold">✕</button>
        </form>
        
        <img src={`${dt?.image}`} alt="img" class="w-full h-[30%] rounded-t-md object-cover rounded-md"/>

        <div class="w-full h-auto p-2 bg-white my-2 rounded-md">
          <div class="font-syerif">
            <h1 class="text-2xl font-bold">{dt?.name}</h1>
            <p class="text-grey-300">{dt?.description}</p>
            <div class="w-full flex flex-col border-y border-dotted py-2">
              <p class="font-bold">Size:</p>
              <form class="filter">
                <input class="btn btn-square" type="reset" value="×"/>
                {#each dt?.size as siz, _}
                <input class="btn" type="radio" name="size" aria-label={siz} value={siz}
                bind:group={selectedSize}
                />
                {/each}
              </form>
              <p class="font-bold">Warna:</p>
              <form class="filter">
                <input class="btn btn-square" type="reset" value="×"/>
                {#each dt?.color as col, _}
                <input class={`btn bg-${col}-500 text-transparent`} type="radio" name="size" aria-label="." value={col}
                bind:group={selectedColor}
                />
                {/each}
              </form>
            </div>
          </div>
        </div>

        <div class="border-b border-dotted pb-2">
          <h1 class="text-2xl">Rp:{subtotal}</h1>
        </div>

        <div class="w-full h-1/5 flex justify-between items-center my-2">

          <div class="w-35 h-12 rounded-md border flex justify-between items-center p-2">
            <button class="py-1 px-3 rounded-md bg-red-500/30 inline-block"
            on:click={()=> {if(value > 1)value--}}>-</button>
            <h1 class="">{value}</h1>
            <button class="py-1 px-3 rounded-md bg-green-500/30 inline-block"
            on:click={()=> value++}>+</button>
          </div>

          <form method="dialog">
            <button class="p-3 rounded-md bg-green-500"
            on:click={pesanProducts}
            >Pesan Sekarag</button>
          </form>
        </div>

      </div>
</dialog>