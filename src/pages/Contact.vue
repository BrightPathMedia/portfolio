<template>
  <Layout>
    <div class='text-center m-auto mt-12 w-full px-2 pb-4 md:w-1/2 xl:w-1/3'>
      <h1 class='text-2xl'>
        {{ $t("contact.pageHeader") }}
      </h1>
      <p class='text-xs mb-4'>
        {{ $t("contact.pageSubHeader") }}
        <br/>
        <a :href="'mailto:' + $t('contact.email')">
          {{ $t("contact.email") }}
        </a>
        <br/>
        <a :href="'tel:' + $t('contact.phone')">
          {{ $t("contact.phone") }}
        </a>
      </p>

      <form method='post'>
        <div class='form-group'>
          <label> {{ $t("contact.form.name") }} </label>
          <input type='text' autofocus name='name'/>
        </div>
        <div class='form-group'>
          <label> {{ $t("contact.form.email") }} </label>
          <input type='email' name='email'/>
        </div>
        <div class='form-group'>
          <label> {{ $t("contact.form.subject") }} </label>
          <input type='text' name='subject'/>
        </div>

        <div class='form-group'>
          <label> {{ $t("contact.form.message") }} </label>
          <textarea rows='4' name='message'></textarea>
        </div>

        <div class='form-group'>
          <button type='submit'>{{ $t("contact.form.submit") }}</button>
        </div>
      </form>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>

<style lang='scss' scoped>

  form {
    @apply w-full m-auto;
    .form-group {
      label {
        @apply inline-block w-full text-gray-600 font-thin text-sm w-full;
      }

      input[type='text'], input[type='email'] {
        @apply border-0 border-gray-400 border-b outline-none mb-8 w-full;

        &:active, &:focus {
          @apply border-gray-800;
        }
      }

      textarea {
        @apply border border-gray-400 outline-none mb-2 w-full;

        &:active, &:focus {
          @apply border-gray-800;
        }
      }

      &.has-error {
        label {
          @apply text-red-700;
        }

        input[type='text'], input[type='email'] {
          @apply border-red-700;
        }
      }

      button {
        @apply bg-red-800 text-white w-full p-2 uppercase text-sm;
      }
    }
  }

</style>
