<script>
  import { onMount } from "svelte";

  export let navigate = (p) => {};
  export let route = '';

  export let hamburger = () => {};

</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-logo">
      <button
        aria-label="Menu"
        on:click|preventDefault={hamburger}
        class="nav-button nav-hamburger"
        ><svg viewBox="0 0 100 80" width="24" height="24">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg></button
      >
      <a href="/home" on:click|preventDefault={() => navigate("/home")}>
        <img src="/logo.jpg" alt="Patriot Motorsports Logo" />
      </a>
    </div>
    <div class="nav-links">
      <a href="/home" class={route=="/home"?"nav-active":""} on:click|preventDefault={() => navigate("/home")}>Home</a>
      <a href="/about" class={route=="/about"?"nav-active":""} on:click|preventDefault={() => navigate("/about")}
        >About Us</a
      >
      <a href="/join" class={route=="/join"?"nav-active":""} on:click|preventDefault={() => navigate("/join")}>Join</a>
      <a
        href="/sponsorship" class={route=="/sponsorship"?"nav-active":""}
        on:click|preventDefault={() => navigate("/sponsorship")}>Sponsorship</a
      >

      <!--<button aria-label="Search" class="nav-button nav-search"
        ><img src="/searchtoclose/frame00.svg" alt="^" /></button
      >-->
    </div>
  </div>
</nav>
