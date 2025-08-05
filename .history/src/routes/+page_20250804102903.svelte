<script>
  import "../app.css"
	import NavClient from '../lib/component/NavClient.svelte';
  import ModalAdd from "$lib/component/ModalAdd.svelte";
  import DisCount from '$lib/component/DisCount.svelte';
  import Category from "$lib/component/Category.svelte";
  import ViewCategory from "$lib/component/ViewCategory.svelte";
  
</script>


<NavClient />
<div class="w-[100vw] h-auto flex flex-col justify-start items-center p-4 overflow-x-hidden font-mono">

	<!-- content discont -->
	<DisCount />

  <!-- category -->
   <Category />

  <!-- view category -->
  <ViewCategory />

  <!-- wrap card -->
 

</div>
