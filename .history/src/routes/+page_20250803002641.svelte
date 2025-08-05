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

<div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      class="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>