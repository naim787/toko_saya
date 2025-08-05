<script>
  import "../app.css"
	import NavClient from '../lib/component/NavClient.svelte';
  import DisCount from '$lib/component/DisCount.svelte';
  import Category from "$lib/component/Category.svelte";
  import ViewCategory from "$lib/component/ViewCategory.svelte";
  import WrCard from "$lib/component/WrCard.svelte";
  import {GetModels} from "$lib/component/Models.js";
  
  let modelClass = new GetModels();
  // Buat instance dari class
  let model = new modelClass();

  // Set properti
  model.id = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  model.name = "Naim Stor";
  models.discon = "50%";
  
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
   <WrCard />

</div>