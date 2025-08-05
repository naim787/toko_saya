<script>
	import NavClient from '../lib/component/NavClient.svelte';
	import "../app.css"
  import ModalAdd from "$lib/component/ModalAdd.svelte";
</script>


<NavClient />
<div class="w-[100vw] h-auto flex flex-col justify-start items-center p-4 overflow-x-hidden font-mono">

	<!-- content discont -->
	

  <!-- category -->
	<div class="w-[95%] flex justify-between items-start p-2 xl:p-4">
		<h1 class="font-bold">Category</h1>
		<h1 class="font-thin">View all</h1>
	</div>

  <!-- view category -->
  <div class="w-[95%] flex justify-between items-start p-2 xl:p-4">
    <div class="w-10 h-10 bg-gray-500 rounded-xl"></div>
    <div class="w-10 h-10 bg-gray-500 rounded-xl"></div>
    <div class="w-10 h-10 bg-gray-500 rounded-xl"></div>
    <div class="w-10 h-10 bg-gray-500 rounded-xl"></div>
  </div>

  <!-- wrap card -->
 <div class="w-[100vw] h-[100vh] flex flex-wrap justify-evenly items-start overflow-y-scroll">
  
  {#each Array(10) as _, i}
  <!-- card -->
   <div class="card bg-base-100 w-83 h-85 shadow-xl p-2 flex flex-col bg-gray-100 m-1">
      <img src="spatu.jpg" alt="Shoes" class="w-80 h-50 rounded-xl object-cover mx-auto" />
      <h1 class="font-bold text-2xl">Title Name</h1>
      <div class="w-80 mx-auto flex justify-between items-center">
        <h1 class="text-green-500 font-bold">Rp:15000</h1>
        <h1 class="px-2 border rounded-xl border-red-500 text-red-500">50%</h1>
      </div>
      <p class="font-thin text-gray-500">Lorem ipsum dolor sit amet.</p>
      <div class="w-45 my-auto">
        <!-- You can open the modal using ID.showModal() method -->
        <button class="btn bg-green-500 " on:click={() => document.getElementById('my_modal_3').showModal()}>ADD TO CART</button>
       <ModalAdd />
      </div>
   </div>
  
  {/each}

  </div>

</div>
