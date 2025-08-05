<script>
  import "../app.css";
  import { Sparkles, ShoppingCart, Lightbulb, CheckCircle, Globe, Rocket } from "@lucide/svelte";
</script>

<div class="hero bg-base-200 min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 py-2">
  <div class="hero-content text-center bg-white p-2">
    <div class="max-w-md space-y-4">
      <h1 class="text-5xl font-bold">TOKO SAYA</h1>
      
      <div class="flex items-center justify-center gap-2 text-lg font-medium">
        <Sparkles class="w-5 h-5" />
        <span>Selamat Datang di TOKO SAYA</span>
      </div>
      
      <ul class="timeline timeline-vertical relative left-0">
        <li>
            <div class="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
            >
                <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
                />
            </svg>
            </div>
            <div class="timeline-end timeline-box">First Macintosh computer</div>
            <hr />
        </li>
        <li>
            <hr />
            <div class="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
            >
                <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
                />
            </svg>
            </div>
            <div class="timeline-end timeline-box">iMac</div>
            <hr />
        </li>
        <li>
            <hr />
            <div class="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
            >
                <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
                />
            </svg>
            </div>
            <div class="timeline-end timeline-box">iPod</div>
            <hr />
        </li>
        <li>
            <hr />
            <div class="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
            >
                <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
                />
            </svg>
            </div>
            <div class="timeline-end timeline-box">iPhone</div>
            <hr />
        </li>
        <li>
            <hr />
            <div class="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
            >
                <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
                />
            </svg>
            </div>
            <div class="timeline-end timeline-box">Apple Watch</div>
        </li>
        </ul>

      <button class="btn btn-primary mt-4">Get Started</button>
    </div>
  </div>
</div>
