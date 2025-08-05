<script>
    import 
  let parentClass = "flex justify-center items-center h-64 bg-gray-950";
  let childClass = "w-16 h-16 bg-red-500";

  $: generatedHTML = `
<div class="${parentClass}">
  <div class="${childClass}"></div>
</div>
`.trim();
</script>

<!-- Preview nyata -->
<div class={parentClass}>
  <div class={childClass}></div>
</div>

<!-- Tampilkan sebagai kode -->
<pre>{generatedHTML}</pre>
<button on:click={() => navigator.clipboard.writeText(generatedHTML)}>Copy</button>

<div class={parentClass}></div>