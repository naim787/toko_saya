<script>
    import ModalAdd from "$lib/component/ModalAdd.svelte";
    export let data;
    let dt ;
</script>

<div class="w-[100vw] h-[100vh] flex flex-wrap justify-evenly items-start overflow-y-scroll">
  
  {#each data as dat, index}
  <!-- card -->
   <div class="card w-83 h-95 shadow-xl p-2 flex flex-col bg-gray-100 m-1">
      <img src={dat.image} alt="Shoes" class="w-80 h-50 rounded-xl object-cover mx-auto" />
      <h1 class="font-bold text-1xl">{dat.name}</h1>
      <div class="w-80 mx-auto flex justify-between items-center">
        <h1 class="text-green-500 font-bold text-2xl">Rp:{dat.price}</h1>
      </div>
      <p class="font-thin text-gray-500">{dat.description}</p>
      <div class="w-45 my-auto">
        <!-- You can open the modal using ID.showModal() method -->
        <button class="btn bg-green-500 " on:click={() => document.getElementById('my_modal_3').showModal(); dt = index}>ADD TO CART</button>
       <ModalAdd index={index} />
      </div>
   </div>
  
  {/each}

  </div>