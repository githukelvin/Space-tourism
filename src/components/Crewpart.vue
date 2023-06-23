
<script setup>
import { ref, watch, onMounted } from "vue";
import data from "/src/data.json";

let all = data.crew;
const destination = ref(null);
const dest = ref([]);


function getText(e) {
    let privo = document.querySelector(".activ");
    
    privo.classList.remove("activ")
    destination.value = e.target.getAttribute('title');
    e.target.classList.add("activ")
}

watch(destination, (newValue) => {
    dest.value = data.crew.filter((item) => item.name === newValue);
});

onMounted(() => {
    dest.value = data.crew.filter((item) => item.name === "Douglas Hurley");
    let moon = document.querySelector(".mon");
    moon.classList.add("activ")
});

</script>

<template>
    <div class="content">
        <div class="bar">
            <ul>
                <li :title="all[0].name" class="mon" @click="getText"></li>
                <li :title="all[1].name" @click="getText"></li>
                <li :title="all[2].name" @click="getText"></li>
                <li :title="all[3].name" @click="getText"></li>
            </ul>
        </div>
        <div class="divs" v-for="item in dest" :key="item.name">
            <div class="left">
                <h3>{{ item.role }}</h3>
                <h1>{{ item.name }}</h1>
                <p>{{ item.bio }}</p>
            </div>
            <div class="right">
                <img :src=" '.' + item.images.png" :alt=" item.name ">
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
}

.content {
    width:calc( 85% + .5em);
    margin-inline:auto;
    position: relative;

    .divs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3.5em;
        .left {
            width: 532px;
            margin-top:9.6em;
            h3{
             
                font-family: 'Bellefair';
                font-style: normal;
                font-weight: 200;
                font-size: 32px;
                line-height: 37px;
                text-transform: uppercase;
                color: #FFFFFF;
                mix-blend-mode: normal;
                opacity: 0.5;   
            }
            h1{
                font-family: 'Bellefair';
                font-style: normal;
                font-weight: 300;
                margin-top:.3em;
                font-size: 56px;
                line-height: 64px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            p{
                font-family: 'Barlow', sans-serif;
                font-style: normal;
                font-weight: 200;
                margin-top:1.355em;
                font-size: 18px;
                line-height: 32px;
                color: #D0D6F9;
                width: 85%;
            }
        }

        .right {
            position: relative;
            z-index: 22;
           width: min-content;
            margin-top: -2.9em;
            width: 568.07px;
                height: 690px;
            img{
                width: 100%;
                height: 690px;
                object-fit: contain;
               aspect-ratio: .5;
               position: absolute;
               bottom: 0;
            }

        }
    }

    .bar {
        position: absolute;
        width: 132px;
        height: 15px;
        bottom:83px;
       
        ul {
            list-style: none;
            display: flex;
            gap: 1.5em;
            width: 132px;
            // justify-content: space-evenly;

            li {
                width: 15px;
                height: 15px;
                left: 284px;
                top: 791px;
                border-radius: 50%;
                background: #FFFFFF;
                mix-blend-mode: normal;
                opacity: 0.17;
                cursor: pointer;
                &.activ{
                    background: #FFFFFF;
                    mix-blend-mode: normal;
                    opacity: 1;
                }
                &:hover{
                    background: #FFFFFF;
                    mix-blend-mode: normal;
                    opacity: 0.5
                }
            }
        }
    }
}</style>