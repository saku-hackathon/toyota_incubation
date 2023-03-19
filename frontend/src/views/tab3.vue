<template>
    <div class="tab">
      <h1>{{ tabName }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tab3',
    props: ['tabName'],
  }
  </script>
  
  <style>
  .tab {
    padding: 20px;
  }
  </style>