
<script setup>
import { ref, watch, onMounted } from "vue";
import data from "/src/data.json";

const destination = ref(null);
const dest = ref([]);

function getText(e) {
    let privo = document.querySelector(".activ");
    privo.classList.remove("activ")
    destination.value = e.target.textContent;
    e.target.classList.add("activ")
}

watch(destination, (newValue) => {

    dest.value = data.destinations.filter((item) => item.name === newValue);

});

onMounted(() => {
    dest.value = data.destinations.filter((item) => item.name === "Moon");
    let moon = document.querySelector(".mon");
    moon.classList.add("activ")
});

</script>




<template>
    <div class="content">
        <div class="bar">
            <ul>
                <li class="mon" @click="getText">Moon</li>
                <li  @click="getText">Mars</li>
                <li  @click="getText">Europa</li>
                <li  @click="getText">Titan</li>
            </ul>
        </div>
        <div class="divs" v-for="item in dest" :key="item.name">
            <div class="left">
                <img :src=" '.' + item.images.png " :alt="item.name">
                {{ img }}
            </div>
            <div class="right">
                <h1>{{ item.name }}</h1>
                <p>{{ item.description }}</p>
                <div class="bottom">
                    <div class="stats">
                        <div class="stat">
                            <h2>avg. distance</h2>
                            <p>{{ item.distance }}</p>
                        </div>
                        <div class="stat">
                            <h2>travel time</h2>
                            <p>{{ item.travel }}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
      
    </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
}
.content{

  .divs{
    display: grid;
    grid-template-columns: 1fr 1fr;
      .left{
         width:90%;
    }
    .right{
        width:90%;
   
}
  }
 .bar{
        ul{
            list-style: none;
            display: flex;
            gap: 2em;
            li{
               text-transform: uppercase;
                cursor: pointer;
                letter-spacing:2.7px;
                font-weight: 500;
                color: #D0D6F9;
                padding-block: .5em;
                &.activ{
                    border-bottom: 2px solid #fff;

                }
                &:hover{
                    border-bottom: 2px solid #D0D6F9;
                }
            }
        }
    }
}
</style>