<script>
  import "../app.css"
	import NavClient from '../lib/component/NavClient.svelte';
  import DisCount from '$lib/component/DisCount.svelte';
  import Category from "$lib/component/Category.svelte";
  import ViewCategory from "$lib/component/ViewCategory.svelte";
  import WrCard from "$lib/component/WrCard.svelte";
  import {GetModels} from "$lib/component/Models.js";
  
  let modelClass = new GetModels();
  let model = new modelClass();

  // Set properti
  model.id = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  model.name = "Naim Stor";
  model.discon = "diskon 50% bisa cod kapan saja yang kalian mau";
  model.disconURL = "./a.png";
  model.products = [
    {name: "Sepatu Jordan Garda", price: 15000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 15000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 15000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 15000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 15000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 2000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 99000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 3000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 1000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 150000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 90000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 8000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 7000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 6000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 5000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 19000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 18000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 17000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
    {name: "Sepatu Jordan Garda", price: 16000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa"},
  ]
</script>


<NavClient />
<div class="w-[100vw] h-auto flex flex-col justify-start items-center p-4 overflow-x-hidden font-mono">

	<!-- content discont -->
	<DisCount discon={model.discon} url={model.disconURL}/>

  <!-- category -->
   <Category />

  <!-- view category -->
  <ViewCategory />

  <!-- wrap card -->
   <WrCard data={model.products} />

</div>