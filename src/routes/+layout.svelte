<script>
  import "../app.css";
  import { SnackbarHandler } from "$lib";
</script>

<header>
  <h1>Quotes</h1>
</header>

<slot></slot>

<footer class="container">
  <p>Gabriel RQ, 2024</p>
  <p id="attribution">
    Inspirational quotes provided by<a
      href="https://zenquotes.io/"
      target="_blank">ZenQuotes API</a
    >
  </p>
</footer>

<SnackbarHandler />

<style>
  header {
    display: grid;
    place-content: center;
  }

  h1 {
    font-size: 4rem;
  }

  footer {
    text-align: center;
  }

  a {
    border: none;
    font-size: inherit;
  }

  a:hover {
    background: initial;
    color: #7175bf;
  }

  #attribution {
    font-size: 0.75rem;
  }
</style>
