
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
                            <h2>est. travel time</h2>
                            <p>{{ item.travel }}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
      
    </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
}
.content{
 margin-left: 2.2em;

  .divs{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9.8em;

      .left{
        padding-left: 1em;
        margin-top: 4em;
        width: min-content;
    }
    .right{
    margin-top:6.3em;
        width: 100%;

       h1{
        
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 100px;
        line-height: 115px;
        text-transform: uppercase;
        margin-bottom: .15em;
        color: #FFFFFF;
       }
        p{
		font-size:18px;
		color:#d0d6f9;
		line-height: 32px;
		font-weight: 300;
		font-family: 'Barlow', sans-serif;

	}
    .stats{
        display: flex;
        gap: 5em;
        margin-top:5.1em;
          .stat  h2{
                font-family: 'Barlow Condensed', sans-serif;
                font-style: normal;
                font-weight: 200;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 2.3625px;
                text-transform: uppercase;  
                color:#d0d6f9;
                
            }
           .stat  p{
                margin-top:.5em;
                font-family: 'Bellefair';
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 32px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
        
    }
   
}
  }
 .bar{
    position: relative;
    left:617px;
    top: 64px;
    width:fit-content;
        ul{
            list-style: none;
            display: flex;
            gap: 2em;
            li{
               text-transform: uppercase;
                cursor: pointer;
                letter-spacing:2.7px;
                font-weight: 400;
                color: #D0D6F9;
                padding-bottom: .7em;
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