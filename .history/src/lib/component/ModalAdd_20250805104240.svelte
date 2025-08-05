 <script>
  export let dt;
  let value = 1;
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
                <input class="btn" type="radio" name="size" aria-label="XL"/>
                <input class="btn" type="radio" name="size" aria-label="XXL"/>
                <input class="btn" type="radio" name="size" aria-label="L"/>
                <input class="btn" type="radio" name="size" aria-label="M"/>
              </form>
              <p class="font-bold">Warna:</p>
              <form class="filter">
                <input class="btn btn-square" type="reset" value="×"/>
                <input class={`btn bg-${}-500 text-transparent`} type="radio" name="size" aria-label="."/>
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

          <button class="p-3 rounded-md bg-green-500">Pesan Sekarag</button>
        </div>

      </div>
</dialog>