<script>
  export let data;
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.description}/>
</svelte:head>

<style>
.article {
    margin-top: 4rem;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 2.5rem;
}
</style>

<article class="article">
    <p class="text-gray-400">with ❤️ by Mahan Farzaneh</p>
    <h1 class="text-gray-300 text-4xl font-bold">{ data.title }</h1>
    <br>
    <p class="text-gray-400 text-lg">{ data.description }</p>
    <small class="text-gray-400">Published: {data.date}</small>
    <main class="prose lg:prose-lg max-w-none prose-pre:max-w-xl prose-img:max-w-sm
                 prose-img:mx-auto prose-code:text-gray-100 mt-10">
        <svelte:component this={data.content} />
    </main>
</article>
