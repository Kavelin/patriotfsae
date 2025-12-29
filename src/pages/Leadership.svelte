<main class="content">
  <section class="section">
    <div class="img"><img src="/leadership/Mar.jpg" alt="Mar 2025" /></div>
    <div class="text" style="text-align:left;">
      <h1>Mar Herbin</h1>
      <h3>President</h3>
    </div>
  </section>
  <section class="section">
    <div class="text" style="text-align:right;">
      <h1>Zach Sprouse</h1>
      <h3>Vice President</h3>
    </div>
    <div class="img"><img src="/leadership/Zach.jpg" alt="Zach 2025" /></div>
  </section>
  <section class="section">
    <div class="img"><img src="/leadership/Sarah.jpg" alt="Sarah 2025" /></div>
    <div class="text" style="text-align:left;">
      <h1>Sarah Remley</h1>
      <h3>Treasurer</h3>
    </div>
  </section>
  <section class="section">
    <div class="text" style="text-align:right;">
      <h1>Sydney Pettit</h1>
      <h3>Secretary</h3>
    </div>
    <div class="img"><img src="/leadership/Sydney.jpg" alt="Sydney 2025" /></div>
  </section>
  <section class="section">
    <div class="img"><img src="/leadership/Austin.jpg" alt="Austin 2025" /></div>
    <div class="text">
      <h1>Austin Conaway</h1>
      <h3>Powertrain Team Lead</h3>
    </div>
  </section>
</main>

<style scoped>
  section {
    padding: 32px 20vw;
    display: flex;
    justify-content: space-between;
  }

  section .img {
    width: 50%;
    box-sizing: border-box;
  }
  section .img img {
    width: 100%;
    aspect-ratio: 1/1;
    height: auto;
    border-radius: 8px;
  }

  section .text h3{
    font-weight:normal;
  }
  section .text {
    padding: 16px;
  }
  @media only screen and (max-width: 800px) {
    section {
      flex-direction: column;
      margin-bottom: 32px;
    }
    section .img {
      order: -1;
      top: 0;
      width: 100%;
    }
    section .text {
      text-align: left !important;
    }

    section::after {
      content: " ";
      width: 100%;
      border-top: 2px solid;
    }
  }
</style>
