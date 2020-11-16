<template>
  <div><img src="../../public/images/comming-soon.gif" width="100"></div>
</template>

<script>
   export default {
    name: "CommingSoon",
  };
</script>

<style>
  .img_loader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .fadeout {
    animation: fadeout 2s forwards;
  }

  @keyframes fadeout {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
</style>