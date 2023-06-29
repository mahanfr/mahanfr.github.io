<script>
  import "../app.css";
</script>
<style lang="postcss">
    :global(body) {
        background-color: theme(colors.bg);
    }
</style>
<main style="display: block;flex: 1 0 auto;">
<slot />
</main>
<footer class="">
    <hr class="mt-4 h-1 border-none bg-primary mx-4 lg:mx-10 mb-2">
    <p class="mb-2 text-center text-gray-300">© 2023 Mahanfr</p>
</footer>
