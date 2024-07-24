<script></script>

<template>
  <TheNavbar />
  <div>
    <NuxtPage />
  </div>
  <TheFooter />
</template>

<style>
html {
  background-color: #a0aba9;
  display: flex;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  justify-content: center;
}

body {
  margin: 0;
  width: 608px;
}

a {
  color: #fff;
}

.articles {
  margin: 2rem 0;
}

.articles .content p {
  line-height: 1;
  margin: 1rem 0;
}

.article {
  background-color: #303630;
  color: #fff;
}

.article-title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
}

.article-subtitle {
  color: #fff;
  margin-bottom: 1rem;
}

.article-body {
  line-height: 1;
  margin: 1rem;
}
</style>
