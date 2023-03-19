<template>
    <header class= "mb-auto">
        <nav class= "navbar navbar-expand navbar-dark bg-dark justify-content-between">
            <h1 class= "navbar-brand mb-0 h1">{{ title }}</h1>
        </nav>
    </header>
</template>

<script>
// import Vue from 'vue'
// import { CButton } from '@coreui/vue';
// import { cilUser } from '@coreui/icons-vue';
// import CoreuiVue from '@coreui/vue';
// Vue.use(CoreuiVue);
export default {
    components: {
        // CButton,
    // CCard,
    // CCardBody,
    // CCardGroup,
    // CCol,
    // CContainer,
    // CRow
    },
    name: "TheHeader",
    data() {
        return {
        title: "Toyota Incubation"
        }
    }
}
</script>