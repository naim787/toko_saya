 <script>
  export let dt;
 </script>
 
 <dialog id="my_modal_3" class="modal backdrop-blur">
      <div class="modal-box w-[95%] h-[95%] bg-white p-2 rounded-md overflow-hidden">
        <!-- close -->
        <form method="dialog" class="absolute top-0 right-0">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 p-[1px] bg-white">✕</button>
        </form>
        
        <img src="./spatu.jpg" alt="" class="w-full h-[30%] rounded-t-md object-cover rounded-md"/>

        <div class="w-full h-auto p-2 bg-white my-2 rounded-md">
          <div class="font-syerif">
            <h1 class="text-2xl font-bold">Lorem ipsum dolor</h1>
            <p class="text-grey-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat tempore repellendus maiores quo voluptates beatae.</p>
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
                <input class="btn bg-red-500 text-transparent" type="radio" name="size" aria-label="."/>
                <input class="btn bg-green-500 text-transparent" type="radio" name="size" aria-label="."/>
                <input class="btn bg-yellow-500 text-transparent" type="radio" name="size" aria-label="."/>
                <input class="btn bg-blue-500 text-transparent" type="radio" name="size" aria-label="."/>
              </form>
            </div>
          </div>
        </div>

        <div class="w-full h-1/5 flex justify-between items-center">

          <div class="w-35 h-12 rounded-md border flex justify-between items-center p-2">
            <button class="py-1 px-3 rounded-md bg-red-500/30 inline-block">-</button>
            <h1 class="">5</h1>
            <button class="py-1 px-3 rounded-md bg-green-500/30 inline-block">+</button>
          </div>

          <button class="p-3 rounded-md bg-green-500">Pesan Sekarag</button>
        </div>

      </div>
</dialog>