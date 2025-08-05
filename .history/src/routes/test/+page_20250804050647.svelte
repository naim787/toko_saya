<script>
    import "../../app.css"
   let previewEl;
  let htmlCode = '';
  let color = ''

  function showCode() {
    htmlCode = previewEl.outerHTML;
  }

  function copyCode() {
    navigator.clipboard.writeText(htmlCode);
  }
</script>

<!-- ✅ Preview Div yang akan diambil outerHTML-nya -->
<div bind:this={previewEl} class="flex justify-center items-center h-64 bg-gray-200">
  <div class=`w-16 h-16 bg-${color}-500`>Box</div>
</div>

<!-- 🔘 Tombol untuk generate dan copy -->
<button on:click={showCode}>Tampilkan Kode HTML</button>
<button on:click={copyCode}>Copy</button>
<input type="text" class="" bind:value={color}/>

<!-- 🔍 Tampilkan hasil HTML -->
<pre>{htmlCode}</pre>