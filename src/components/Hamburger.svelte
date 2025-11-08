<script>
  export let open = false;
  export let route = '';
  export let navigate = (p) => {};
  export let hamburger = () => {};

  function handleClick(event) {
    if (event.target === event.currentTarget) {
      hamburger();
    }
  }
</script>

<div class="hamburger-menu" on:click|self={() => hamburger()} style:opacity={open?1:0} style:pointer-events={open?"all":"none"}>
  <div class="ham-container" style:transform={open?"translateX(0%)":"translateX(-100%)"}>
    <div class="ham-links">
      <a href="/home" class={route=="/home"?"ham-active":""} on:click|preventDefault|stopPropagation={() => navigate("/home")}>Home</a>
      <a href="/about" class={route=="/about"?"ham-active":""} on:click|preventDefault|stopPropagation={() => navigate("/about")}
        >About Us</a
      >
      <a href="/join"class={route=="/join"?"ham-active":""}  on:click|preventDefault|stopPropagation={() => navigate("/join")}>Join</a>
      <a
        href="/sponsorship" class={route=="/sponsorship"?"ham-active":""} 
        on:click|preventDefault|stopPropagation={() => navigate("/sponsorship")}>Sponsorship</a
      >
    </div>
  </div>
</div>
