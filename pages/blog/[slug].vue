<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <h1>{{ post.title }}</h1>
  <small>{{ post.description }}</small>
  <ContentRenderer :value="post" />

</template>
