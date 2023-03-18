<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="(repo, i) in currPage" :key="i">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ repo.name }}</h5>
            <p class="card-text">{{ repo.description }}</p>
            <router-link
              :to="{
                name: 'RepoView',
                params: { id: `${i}` },
              }"
              class="card-link btn btn-outline-dark"
              @click="selectRepo(repo)"
            >
              More
            </router-link>
            <a :href="repo.html_url" class="card-link btn btn-dark">
              View on Git
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 d-flex justify-content-between align-items-center">
      <button class="btn btn-dark" @click="prev()">Prev</button>
      <button
        v-for="but in pageCounter"
        :key="but"
        @click="goToPage(but)"
        class="btn btn-dark"
      >
        {{ but }}
      </button>
      <button @click="next()" class="btn btn-dark">Next</button>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import store from "@/store/index.js";
export default {
  name: "Repos",
  data() {
    return {
      repos: [],
      user: "Holytech",
      repoLength: 0,
      repoArray: [],
      pageSize: 8,
      currentPage: 1,
      errorMes: "",
      getRepos(url) {
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw Error("Could not fetch the data for that resource");
            }
            return res.json();
          })
          .then((data) => {
            this.repos = data;
            this.repoArray = data;
            this.repoLength = data.length;
            console.log(data);
          })
          .catch((err) => {
            if (err.name === "AbortError") {
              console.log("fetch aborted");
            } else {
              this.errorMes = `Error Occured : ${err}`;
              console.log(this.errorMes);
            }
          });
      },
    };
  },
  mounted() {
    this.getRepos(`https://api.github.com/users/${this.user}/repos`);
  },
  methods: {
    selectRepo(repo) {
      store.commit("SET_REPO", repo);
    },
    goToPage(num) {
      this.currentPage = num;
    },
    next() {
      this.currentPage < this.pageCounter ? this.currentPage++ : "";
    },
    prev() {
      this.currentPage > 1 ? this.currentPage-- : "";
    },
  },
  computed: {
    currPage() {
      return this.repoArray.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    pageCounter() {
      return Math.ceil(this.repoArray.length / this.pageSize);
    },
  },
};
</script>
