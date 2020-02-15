<template>
 
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <top-navigation></top-navigation>     
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>

</script>
<style>

</style>