<script>
	import { AlignLeft, Bell, Search } from "@lucide/svelte";
	import "../app.css"
</script>

<div class="navbar bg-base-100 shadow-sm font-mono">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <AlignLeft />
      </div>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <ul tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="/">Homepage</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <h1 class="text-xl font-bold">TOKO SAYA</h1>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <Search />
    </button>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
       <Bell />
        <span class="badge badge-xs bg-green-500 indicator-item"></span>
      </div>
    </button>
  </div>
</div>

<div class="w-[100vw] h-[100vh] flex flex-col justify-start items-center p-4">

	<!-- content discont -->
	<div class="w-[95%] h-[130px] bg-black rounded-xl flex justify-evenly items-center p-3">
		<div class="">
			<h1 class="text-white font-[10] text-md p-3">diskon <span class="text-green-500 text-xl font-bold">50%</span>, bisa cod kapan saja yang kalian mau</h1>
		</div>
		<img src="./a.png" alt="spatu" loading="lazy" class="w-35 h-35 object-cover"/>
	</div>

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
 <div class="w-[109.5%] h-[47%] border flex flex-wrap justify-evenly items-center">
  <!-- card -->
   <div class="card bg-base-100 w-50 h-60 shadow-sm">
  <figure>
    <img
      src="spatu.jpg"
      alt="Shoes" class="w-40 h-40" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      Card Title
    </h2>
    <div class="card-actions justify-end">
     <button class="p-2 bg-green-500 rounded-xl">Add To Cart</button>
    </div>
  </div>
</div>
 </div>
</div>
