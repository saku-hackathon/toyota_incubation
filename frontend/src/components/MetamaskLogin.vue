<template>
    <div class="metamask-login">
      <p v-if="!isMetamaskInstalled">Please install Metamask to use this feature.</p>
      <!-- <div v-if="!isMetamaskLoggedIn"> -->
        <CButton v-if="!isMetamaskLoggedIn" color="primary" @click="login()">Connect with Metamask</CButton>
      <!-- </div> -->
      <div v-else>
        <p>signed in with Metamask</p>
        <p>Account: {{ account }}</p>
      </div>
    </div>
</template>
  
  <script>
  import Web3 from 'web3';
  import { CButton } from '@coreui/vue';
  // import coreui from "coreui/coreui/scss/coreui";
  export default {
    components: {
      CButton,
      // CCard,
      // CCardBody,
      // CCardGroup,
      // CCol,
      // CContainer,
      // CRow
    },
    data() {
      return {
        isMetamaskInstalled: false,
        isMetamaskLoggedIn: false,
        web3: null,
        account: null
      }
    },
    mounted() {
      this.checkMetamaskInstalled();
      this.checkMetamaskLoggedIn();
    },
    methods: {
      async checkMetamaskInstalled() {
        if (typeof window.ethereum !== 'undefined') {
          this.isMetamaskInstalled = true;
          this.web3 = new Web3(window.ethereum);
        }
      },
      async checkMetamaskLoggedIn() {
        if (this.isMetamaskInstalled) {
          const accounts = await this.web3.eth.getAccounts();
          if (accounts.length > 0) {
            this.isMetamaskLoggedIn = true;
            this.account = accounts[0];
          }
        }
      },
      async login() {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          await this.checkMetamaskLoggedIn();
          // Perform login logic here
          console.log('Logged in with Metamask');
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  </script>
  
  <style>
  .metamask-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  p {
    margin-top: 20px;
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  