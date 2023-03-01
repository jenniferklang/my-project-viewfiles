<script></script>

<template>
  <nav>
    <ul class="navbar-titles">
      <li class="nav-links">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="nav-links">
        <RouterLink to="/about/">About</RouterLink>
      </li>
      <li class="nav-links">
        <RouterLink to="/contact">Contakt</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
