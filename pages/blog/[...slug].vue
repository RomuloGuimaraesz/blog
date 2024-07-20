<script setup>
const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <main>
    <div class="container">
      <section class="articles">
          <section class="blog-post-card card-content">
            <ContentDoc />
          </section>
      </section>
    </div>
  </main>
</template>

<style></style>
