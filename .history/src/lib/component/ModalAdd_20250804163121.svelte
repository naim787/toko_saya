 <script>
  export let dt;
 </script>
 
 <dialog id="my_modal_3" class="modal backdrop-blur">
      <div class="modal-box w-[95%] h-[95%] bg-white p-2 rounded-md">
        <!-- close -->
        <form method="dialog" class="absolute top-0 right-0">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 p-[1px] bg-white">✕</button>
        </form>
        
        <img src="./spatu.jpg" alt="" class="w-full h-[40%] rounded-t-md object-cover rounded-md"/>

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
            </div>
          </div>
        </div>

        
      </div>
</dialog>