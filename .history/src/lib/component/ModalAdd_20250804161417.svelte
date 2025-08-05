 <script>
  export let dt;
 </script>
 
 <dialog id="my_modal_3" class="modal backdrop-blur">
      <div class="modal-box w-[90%] h-[85%] bg-white p-[0] rounded-md">
        <!-- close -->
        <form method="dialog" class="absolute top-0 right-0">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 p-[1px] bg-white">✕</button>
        </form>
        
        <img src="./spatu.jpg" alt="" class="w-full h-[50%] rounded-t-md object-cover"/>
        
        <div class="w-full h-10 flex items-center p-2">
          <p class="py-[0.5] px-3 bg-red-500 rounded-full inline-block text-white">Sale</p>
        </div>

        <div class="w-full h-auto px-4">
          <div class="font-syerif">
            <h1 class="text-2xl">Lorem ipsum dolor</h1>
            <p class="text-grey-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat tempore repellendus maiores quo voluptates beatae.</p>
            <div class="w-full flex items-center">
              <p class="font-bold">Size :</p>
              <div class="flex">
                <button class="py-[0.5] px-3 bg-gray-700 text-white rounded-md m-1">XL</button>
                <button class="py-[0.5] px-3 bg-gray-700 text-white rounded-md m-1">XL</button>
                <button class="py-[0.5] px-3 bg-gray-700 text-white rounded-md m-1">XL</button>
                <button class="py-[0.5] px-3 bg-gray-700 text-white rounded-md m-1">XL</button>
                <button class="py-[0.5] px-3 bg-gray-700 text-white rounded-md m-1">XL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
</dialog>