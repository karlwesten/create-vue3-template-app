<template>
  <div class="index">
    <h1>
      Coding, Great.
      <svg
        width="209"
        height="41"
        viewBox="0 0 209 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 35C58.3333 35.8333 145.5 35 203 6.5"
          stroke="#43E229"
          stroke-width="11"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="tick"
        />
      </svg>
    </h1>
  </div>
</template>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');

.index {
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

h1 {
  font-size: 60px;
  width: 220px;
  line-height: 1em;
  letter-spacing: -0.03em;
  position: relative;

  svg {
    position: absolute;
    bottom: -10px;
    left: 0px;
    z-index: -1;
  }

  #tick {
    stroke-dasharray: 210px;
    stroke-dashoffset: 210px;
    animation: 3s tick ease-in-out infinite;
  }
}

@keyframes tick {
  0%,
  50% {
    stroke-dashoffset: 210px;
  }
  50%,
  100% {
    stroke-dashoffset: 0px;
  }
}
</style>
