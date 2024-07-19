<script setup>
const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <main>
    <TheHero>
      <template v-slot:default>{{ blogPost.title }}</template>
      <template v-slot:info>
        <BlogPostMeta
          :author="blogPost.author"
          :date="blogPost.dates.published"
        />
      </template>
    </TheHero>
    <div class="container">
      <section class="articles">
          <section class="blog-post-card card-content">
            <div class="card-content">
              <div class="content article-body is-size-5">
                <ContentDoc />
              </div>
            </div>
          </section>
      </section>
    </div>
  </main>
</template>

<style></style>
