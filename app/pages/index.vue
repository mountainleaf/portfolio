<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingBlog :page />
    <!-- About / Testimonials / FAQ intentionally disabled for the
         student-portfolio variant. Re-enable when there's content to back them. -->
    <!-- <LandingAbout :page /> -->
    <!-- <LandingTestimonials :page /> -->
    <!-- <LandingFAQ :page /> -->
  </UPage>
</template>
