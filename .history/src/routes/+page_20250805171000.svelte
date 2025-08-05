<script>
  import "../app.css";
  import { Sparkles, ShoppingCart, Lightbulb, CheckCircle, Globe, Rocket } from "@lucide/svelte";
</script>

<div class="hero bg-base-200 min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 py-2">
  <div class="hero-content text-center">
    <div class="max-w-md space-y-4">
      <h1 class="text-5xl font-bold">TOKO SAYA</h1>
      
      <div class="flex items-center justify-center gap-2 text-lg font-medium">
        <Sparkles class="w-5 h-5" />
        <span>Selamat Datang di TOKO SAYA</span>
      </div>
      
      <p class="text-sm leading-relaxed">
        <span class="inline-flex items-center gap-1 font-semibold"><ShoppingCart class="w-4 h-4" /> Jual Beli Online Gratis & Mudah!</span><br />
        TOKO SAYA adalah platform web jual beli online <strong>100% gratis</strong> yang memudahkan siapa saja untuk membuka toko, memajang produk, dan bertransaksi dengan aman dan cepat – tanpa biaya, tanpa ribet!
      </p>

      <div class="text-left text-sm leading-relaxed space-y-2 mt-4">
        <div class="flex items-start gap-2">
          <Lightbulb class="w-4 h-4 mt-1 text-yellow-500" />
          <span><strong>Kenapa pilih TOKO SAYA?</strong></span>
        </div>

        <div class="flex items-start gap-2">
          <CheckCircle class="w-4 h-4 text-green-600" />
          <span><strong>Gratis selamanya</strong> – Tidak ada biaya pendaftaran, tanpa komisi penjualan.</span>
        </div>

        <div class="flex items-start gap-2">
          <CheckCircle class="w-4 h-4 text-green-600" />
          <span><strong>Mudah digunakan</strong> – Desain sederhana, cocok untuk pemula maupun yang berpengalaman.</span>
        </div>

        <div class="flex items-start gap-2">
          <CheckCircle class="w-4 h-4 text-green-600" />
          <span><strong>Jual apa saja</strong> – Fashion, elektronik, makanan, jasa, dan lainnya.</span>
        </div>

        <div class="flex items-start gap-2">
          <Globe class="w-4 h-4 text-blue-500" />
          <span><strong>Akses dari mana saja</strong> – Komputer, tablet, atau ponsel.</span>
        </div>

        <div class="flex items-start gap-2">
          <CheckCircle class="w-4 h-4 text-green-600" />
          <span><strong>Cocok untuk UMKM & individu</strong> – Bantu kamu berkembang di dunia digital.</span>
        </div>
      </div>

      <div class="flex items-center justify-center gap-2 mt-6 text-lg font-medium">
        <Rocket class="w-5 h-5 text-red-500" />
        <span>Mulai jualan sekarang dan nikmati kemudahan tanpa batas!</span>
      </div>

      <button class="btn btn-primary mt-4">Get Started</button>
    </div>
  </div>
</div>
