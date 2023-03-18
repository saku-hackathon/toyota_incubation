<template>
    <div class="tab">
      <h1>{{ tabName }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tab1',
    props: ['tabName'],
  }
  </script>
  
  <style>
  .tab {
    padding: 20px;
  }
  </style>