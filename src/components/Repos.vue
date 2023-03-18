<template>
  <div class="row">
    <div className="col-md-4 mb-3" v-for="(repo, i) in repos" :key="i">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{{ repo.name }}</h5>
          <p className="card-text">{{ repo.description }}</p>
          <router-link
            :to="{
              name: 'single-repo',
              params: { id: `${repo.id}` },
            }"
          ></router-link>
          <a :href="repo.html_url" className="card-link btn btn-dark">
            View on Git
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Repos",
  data() {
    return {
      repos: [],
      user: "Holytech",
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
};
</script>
