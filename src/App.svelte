<script>
  import { onMount } from "svelte";
  import Layout from "./components/Layout.svelte";
  import Home from "./pages/Home.svelte";
  import AboutUs from "./pages/AboutUs.svelte";
  import Join from "./pages/Join.svelte";
  import Sponsorship from "./pages/Sponsorship.svelte";
  import NotFound from "./pages/NotFound.svelte";

  export let route = "/home";

  function updateRoute() {
    const p = location.pathname.replace(/\/+$/, "");
    if (!p || p === "/" || p === "/index.html") {
      route = "/home";
      return;
    }
    // map to our simple routes
    route = p;
  }

  onMount(() => {
    updateRoute();
    console.log(route);
    navigate(route);
    window.addEventListener("popstate", updateRoute);
  });

  let open = false;

  function navigate(path) {
    history.pushState({}, "", path);
    updateRoute();
    window.scrollTo(0, 0);
    open = false;
  }

  function hamburger() {
    open = !open;
  }
</script>

<svelte:head>
  <title>
    {route
      .slice(1)
      .replace(
        /\w\S*/g,
        (t) => t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()
      )}</title
  >
  <meta property="og:title" content="Patriot Motorsports" />
  <meta
    property="og:description"
    content="George Mason University's FSAE Team."
  />
  <meta
    property="og:image"
    content="https://patriotfsae.vercel.app/logo.jpg"
  />
  <meta
    property="og:url"
    content="https://patriotfsae.vercel.app/"
  /></svelte:head
>

<Layout {navigate} {open} {hamburger} {route}>
  {#if route === "/home"}
    <Home />
  {:else if route === "/about"}
    <AboutUs />
  {:else if route === "/join"}
    <Join />
  {:else if route === "/sponsorship"}
    <Sponsorship />
  {:else}
    <NotFound />
  {/if}
</Layout>
