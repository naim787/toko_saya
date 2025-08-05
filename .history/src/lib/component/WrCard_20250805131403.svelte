<script>
    import ModalAdd from "$lib/component/ModalAdd.svelte";
    export let data;
    let dt;
</script>

<div class="w-[100vw] h-[100vh] flex flex-wrap justify-evenly items-start overflow-y-scroll">
  
  {#each data as dat, _}
  <!-- card -->
   <div class="card w-83 h-95 shadow-xl p-2 flex flex-col bg-gray-100 m-1 border-2 border-white">
      <img src={dat.image} alt="Shoes" class="w-80 h-50 rounded-xl object-cover mx-auto" />
      <h1 class="font-bold text-1xl">{dat.name}</h1>
      <div class="w-80 mx-auto flex justify-between items-center">
        <h1 class="text-green-500 font-bold text-2xl">Rp:{dat.price}</h1>
      </div>
      <p class="font-thin text-gray-500">{dat.description}</p>
      <div class="w-45 my-auto">
        <!-- You can open the modal using ID.showModal() method -->
        <button class="btn bg-green-500 " on:click={() => {document.getElementById('my_modal_3').showModal(); dt = dat}}>ADD TO CART</button>
       <ModalAdd dt={dt}  <script>
  export let dt;
  let value = 1;

  // color & size
  let selectedSize = "";  
  let selectedColor = ""; 

  // pesan
  function pesanProducts() {
  let noWa = "62895352455400"; // tanpa spasi atau tanda +
  const message = `saya iggin pesan pesan😍😍%0Anama product : ${dt?.name}%0Awarna : ${selectedColor}%0Asize : ${selectedSize}%0Ajumlah : ${value}%0ATERIMA KASIH❤❤❤`;

  console.log(dt?.noTelp)
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
          <h1 class="text-2xl">Rp:{dt?.price}</h1>
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
</dialog>/>
      </div>
   </div>
  
  {/each}

  </div>