<template>
  <div class="searchComponent">
    <form @submit.prevent="searchMars()">
      <div class="form-group">
        <input
          type="text"
          name="query"
          id="query"
          class="form-control"
          placeholder="Which Sol would you like to view?"
          aria-describedby="helpId"
          v-model="state.query"
        >
        <button
          class="btn btn-success"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>
