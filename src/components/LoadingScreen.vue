<template>
  <div :class="{ loader: true, fadeout: !isLoading, img_loader: true }"><img src="../../public/images/zippylogo.gif" width="100"></div>
</template>

<script>
   export default {
    name: "LoadingScreen",
    props: ["isLoading"]
  };
</script>

<style>
  .loader {
    background-color: #000;
    bottom: 0;
    color: white;
    display: block;
    font-size: 32px;
    left: 0;
    overflow: hidden;
    padding-top: 10vh;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
  }
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