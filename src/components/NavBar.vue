<template>
  <nav class="navbar navbar-expand-lg py-3 px-5 navbar-light bg-color">
    <router-link class="navbar-brand fw-bold" to="/"
      >AltSchool Exam Project</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold mr-5">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/repos">All Repo</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/about">My Profile</router-link>
        </li> -->
      </ul>

      <!-- <SearchBox /> -->
    </div>
  </nav>
</template>
<script>
// import SearchBox from "./Search.vue";
export default {
  components: {
    // SearchBox,
  },
};
</script>
