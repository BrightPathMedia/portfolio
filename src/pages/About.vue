<template>
  <Layout>
    <div class='flex flex-col lg:flex-row lg:mt-16 pt-4'>
      <div class='flex-grow w-full lg:w-1/2'>
        <div class='flex'>
          <div class='p-3 lg:pr-12 lg:pb-12'>
            <g-image class='' alt="Brightpath Media" src="~/assets/images/seinfeld.jpg" />
          </div>
          <div class='p-3 lg:pr-12 lg:pb-12'>
            <g-image class='' alt="Brightpath Media" src="~/assets/images/kramer-photo.png" />
          </div>
        </div>
        <div class='flex'>
          <div class='p-3 lg:pr-12 lg:pb-12'>
            <g-image class='rounded-full' alt="Brightpath Media" src="~/assets/images/elaine.png" />
          </div>
          <div class='p-3 lg:pr-12 lg:pb-12'>
            <g-image class='' alt="Brightpath Media" src="~/assets/images/george-photo.png" />
          </div>
        </div>
      </div>
      <div class='flex-grow w-full lg:w-1/2 pl-4 lg:pl-24'>
        <h1 class='text-2xl border-t pt-2 border-black'>
          {{ $t("about.whoAreWeTitle") }}
        </h1>

        <p class='text-xs pb-24'>
          {{ $t("about.whoAreWeText") }}
        </p>

        <div class='flex'>
          <h1 class='text-lg font-bold'>
            {{ $t("about.whatWeDoTitle") }}
          </h1>
          <div class='flex-grow border-t border-black mt-3 ml-3'></div>
        </div>

        <p class='text-xs pb-24'>
          {{ $t("about.whatWeDoText") }}
        </p>

        <div class='flex'>
          <h1 class='text-lg font-bold'>
            {{ $t("about.contactTitle") }}
          </h1>
          <div class='flex-grow border-t border-black mt-3 ml-3'></div>
        </div>

        <p class='text-xs pb-24'>
          {{ $t("about.contactText") }}
        </p>

      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
