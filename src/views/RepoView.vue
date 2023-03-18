<template>
  <div className="container my-5">
    <div className="card w-100">
      <div className="card-body">
        <h5 className="card-title fw-bold">{{ repo.full_name }}</h5>
        <p className="card-text">{{ repo.description }}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Owned by : {{ repo.owner.login }}</li>
        <li className="list-group-item">fork : {{ repo.forks }}</li>
        <li className="list-group-item">Created at : {{ repo.created_at }}</li>
        <li className="list-group-item">Updated at : {{ repo.updated_at }}</li>
        <li className="list-group-item">Pushed at : {{ repo.pushed_at }}</li>
        <li className="list-group-item">Visiblity : {{ repo.visibility }}</li>
        <li className="list-group-item">Watchers : {{ repo.watchers }}</li>
        <li className="list-group-item">
          Default branch : {{ repo.default_branch }}
        </li>
        <li className="list-group-item">
          <a :href="repo.html_url" class="card-link btn btn-success">
            View on Git
          </a>
        </li>
      </ul>
    </div>

    <div class="row mt-5">
      <router-link to="/all-repo">
        <button type="button" class="btn btn-success rounded mt-3">Back</button>
      </router-link>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import store from "@/store/index";
export default {
  name: "Single Repo",
  data() {
    return {
      repo: store.state.selectedRepo,
    };
  },
};
</script>
