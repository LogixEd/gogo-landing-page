<template>
  <div class="bg-gradient">
    <section class="section mt-0">
      <div class="container">
        <div class="gogo-about">
          <div class="card card-body mt-5">
            <div>
              <b-table small :fields="fields" :items="items" responsive="md">
                <!-- A virtual composite column -->
                <template #cell(dummy)="data">
                    {{data.item.dummy}}
                </template>
                <template #cell(gogo6)="data">
                    <div v-if="data.item.gogo6.img">
                        <b-img            
                            fluid
                            src="https://wiki-gogoboard.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MW--CG0R1EWQwVCjsCl%2F-MW-b79CbYtCAh0RpwdQ%2F-MW-gfjCGA-KO5XJPiv6%2FGoGo%206-mini.jpg?alt=media&token=a6d29d7e-3413-4f35-979f-3a7be9169f42"
                            alt="Image 1"
                        ></b-img>
                    </div>
                    <div v-else>
                        {{data.item.gogo6.value}}
                    </div>
                </template>
                <template #cell(gogo5)="data">
                    <div v-if="data.item.gogo5.img">
                        <b-img
                            fluid
                            src="https://wiki-gogoboard.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MW--CG0R1EWQwVCjsCl%2F-MW-oOdca7tF-AgJsr0D%2F-MW-qZkmEWMhSdEH6iH8%2FGoGo%205.jpg?alt=media&token=470b9292-0f1c-4cde-bb54-b61d756f7761"
                            alt="Image 2"
                        ></b-img>
                    </div>
                    <div v-else>
                        {{data.item.gogo5.value}}
                    </div>
                </template>
                <template #cell(gogoB)="data">
                    <div v-if="data.item.gogoB.img">
                        <b-img
                        fluid
                        src="https://wiki-gogoboard.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MW--CG0R1EWQwVCjsCl%2F-MW-rB7hEjw9E_d1M6p8%2F-MW-rjmDUem-Sa-cjRXI%2FGoGo%20Bright.jpg?alt=media&token=feb3f460-91ed-43fd-8de6-1074ebc28d8f"
                        alt="Image 1"
                        ></b-img>
                    </div>
                    <div v-else>
                        {{data.item.gogoB.value}}
                    </div>
                </template>
                <b-input>
                </b-input>
              </b-table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        // A column that needs custom formatting
        { key: "dummy", label: "#" },
        { key: "gogo6", label: "GoGo Board6" },
        { key: "gogo5", label: "GoGo Board5" },
        { key: "gogoB", label: "GoGo Bright" },
      ],
      items: [
          { dummy: "", gogo6:{img: true, value:""}, gogo5:{img: true, value:""}, gogoB:{img: true, value:""}},
          { dummy: "Release", gogo6:{img: false, value:"2021"}, gogo5:{img: false, value:"2016"}, gogoB:{img: false, value:"2019"}},
          { dummy: "Scratch Extension", gogo6:{img: false, value:"Scratch 3"}, gogo5:{img: false, value:"Scratch X"}, gogoB:{img: false, value:"Scratch X"}},
          { dummy: "Display", gogo6:{img: false, value:"128x169 TFT LCD"}, gogo5:{img: false, value:"7 Segment"}, gogoB:{img: false, value:"-"}},
          { dummy: "IoT Function", gogo6:{img: false, value:"On Board WiFi/ Bluetooth"}, gogo5:{img: false, value:"Pi connection"}, gogoB:{img: false, value:"-"}},
          { dummy: "Extension Board", gogo6:{img: false, value:"Raspberry Pi"}, gogo5:{img: false, value:"Raspberry Pi"}, gogoB:{img: false, value:"-"}},
          { dummy: "On Board Senor", gogo6:{img: false, value:"Yes"}, gogo5:{img: false, value:"-"}, gogoB:{img: false, value:"-"}},
          { dummy: "Remote Lab", gogo6:{img: false, value:"Yes"}, gogo5:{img: false, value:"-"}, gogoB:{img: false, value:"-"}},
          { dummy: "Work with iPad / tablet", gogo6:{img: false, value:"Yes"}, gogo5:{img: false, value:"-"}, gogoB:{img: false, value:"-"}},
          { dummy: "", gogo6:{img: false, value:"Buy Now on Lazada or Shopee"}, gogo5:{img: false, value:"Buy Now on Lazada or Shopee"}, gogoB:{img: false, value:"Buy Now on Lazada or Shopee"}},
          ]
    };
  },
};
</script>
<style scoped>
/* .gogo-about{
        margin-top: 7.5%;
    } */
.bg-gradient {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgb(163, 37, 125) 0%,
    rgb(218, 79, 106) 35%,
    rgb(222, 80, 59) 100%
  );
}
.hidden_header {
  display: none;
}
</style>