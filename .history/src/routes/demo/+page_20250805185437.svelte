<script>
  import "../../app.css"
	import NavClient from '$lib/component/NavClient.svelte';
  import DisCount from '$lib/component/DisCount.svelte';
  import Category from "$lib/component/Category.svelte";
  import ViewCategory from "$lib/component/ViewCategory.svelte";
  import WrCard from "$lib/component/WrCard.svelte";
  import {GetModels} from "$lib/component/Models.js";
  
  let modelClass = new GetModels();
  let model = new modelClass();

  // Set properti
  model.id = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  model.name = "TOKO SAYA";
  model.discon = "diskon 50% bisa cod kapan saja yang kalian mau";
  model.disconURL = "./a.png";
  model.noTelp = "62895352455400";
  model.products = [
    {name: "Rolex Submariner", price: 12000, image: "https://www.frostnyc.com/cdn/shop/products/RD_1.2_586801d8-4fd4-4953-a226-4cca7ab18fd4_600x.jpg?v=1742234698", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa", color: ["yellow-500", "black"], size: ["28–34 mm", "35–38 mm", "39–42 mm", "43–46 mm"]},

    {name: "ROLEX DAYTONA", price: 289000, image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0h-mc64zl6wfghf7e@resize_w450_nl.webp", description: "【100% ASLI】ROLEX DAYTONA Jam Tangan Pria Emas Putih & Keramik Chronograph tachymeter", color: ["white", "black", "yellow-500"], size: ["28–34 mm", "35–38 mm", "39–42 mm", "43–46 mm"]},

    {name: "Air Jordan 1 Mid Light Smoke Grey Men", price: 12000, image: "https://down-id.img.susercontent.com/file/sg-11134201-7rdx0-mbro4udw0zrwae@resize_w450_nl.webp", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa", color: ["red-500", "blue-500", "green-500", "yellow-500", "white", "black"], size: ["37", "38", "44", "XL", "XXL"]},
    
    {name: "Sepatu Jordan Garda", price: 12000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa", color: ["red", "blue", "green", "yellow"], size: ["S", "M", "L", "XL", "XXL"]},

    {name: "Sepatu Jordan Garda", price: 12000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa", color: ["red", "blue", "green", "yellow"], size: ["S", "M", "L", "XL", "XXL"]},

    {name: "Sepatu Jordan Garda", price: 12000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa", color: ["red", "blue", "green", "yellow"], size: ["S", "M", "L", "XL", "XXL"]},

    {name: "Sepatu Jordan Garda", price: 12000, image: "./spatu.jpg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa", color: ["red", "blue", "green", "yellow"], size: ["S", "M", "L", "XL", "XXL"]},
  ]
</script>


<NavClient name={model.name}/>
<div class="w-[100vw] h-auto flex flex-col justify-start items-center p-4 overflow-x-hidden font-mono bg-gradient-to-br from-blue-100 via-white to-purple-100">

	<!-- content discont -->
	<DisCount discon={model.discon} url={model.disconURL}/>

  <!-- category -->
   <Category />

  <!-- view category -->
  <ViewCategory />

  <!-- wrap card -->
   <WrCard data={model.products} noTelp={model.noTelp} />

</div>