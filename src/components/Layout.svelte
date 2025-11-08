<script>
  import Nav from './Nav.svelte'
  import Hamburger from './Hamburger.svelte'
  export let open = false;
  export let route = '';
  export let navigate = (p) => {};
  export let hamburger = () => {};
</script>

<Nav {navigate} {hamburger} {route} />
<Hamburger {navigate} {hamburger} {open} {route}/>
<main class="content">
  <slot />
</main>

<footer>
  <div class="section">
    <h3>Follow us on Social Media</h3>
    <div class="social-links">
      
      <a href="https://www.instagram.com/patmo_gmu" target="_blank">
        <img src="https://ssl.gstatic.com/atari/images/sociallinks/instagram_white_44dp.png" alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/company/patriot-motorsports-gmu" target="_blank">
        <img src="https://ssl.gstatic.com/atari/images/sociallinks/linkedin_white_44dp.png" alt="LinkedIn" />
      </a>
      <a href="https://www.youtube.com/@patriotmotorsportsmason" target="_blank">
        <img src="https://ssl.gstatic.com/atari/images/sociallinks/youtube_white_44dp.png" alt="YouTube" />
      </a>
    </div>
    <div class="contact-info">
      <h3>Contact us</h3>
      <a href="mailto:formulasaemason@gmail.com">formulasaemason@gmail.com</a>
    </div>
  </div>
</footer>
