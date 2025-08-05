<script>
	import { AlignLeft, Bell, Search } from "@lucide/svelte";
	import "../app.css"
</script>

<div class="navbar bg-base-100 shadow-sm">
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
	<div class="w-[95%] h-[130px] bg-black rounded-xl flex justify-evenly items-center p-3">
		<div class="">
			<h1 class="font-thin text-white text-md p-3">diskon 50%, bisa cod kapan saja yang kalian mau</h1>
		</div>
		<img src="./spatu.jpg" alt="spatu" loading="lazy" class="w-25 h-full "/>
	</div>
</div>
