<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<template>
  <div class="container">
    <section>
      <div
        v-for="blogPost in blogPostList"
        :key="blogPost._path"
      >
        <NuxtLink :to="blogPost._path">
          <section class="blog-post-card">
            <h3>
              {{ blogPost.title }}
            </h3>
            <BlogPostMeta
              :date="blogPost.dates.published"
            />
          </section>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style>
.blog-post-card {
  background-color: #606c6a;
  border-bottom: .5px solid #a0aba9;
  color: #fff;
  display: flex;
  height: 32px;
  justify-content: space-between;
  line-height: 32px;
  padding: 1rem;
}

.blog-post-card.card-content {
  height: fit-content;
  padding: 1rem;
}

.blog-post-card h3 {
  font-size: 1rem;
  margin: 0;
  text-decoration: none !important;
}
</style>
