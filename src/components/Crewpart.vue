
<script setup>
import { ref, watch, onMounted } from "vue";
import data from "/src/data.json";

let all = data.crew;
console.log(all)
const destination = ref(null);
const dest = ref([]);

function getText(e) {
    let privo = document.querySelector(".activ");
    privo.classList.remove("activ")
    destination.value = e.target.textContent;
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
                <li :value="data.crew[0].name" class="mon" @click="getText"></li>
                <li :value="data.crew[1].name" @click="getText"></li>
                <li :value="data.crew[2].name" @click="getText"></li>
                <li :value="data.crew[3].name" @click="getText"></li>
            </ul>
        </div>
        <div class="divs" v-for="item in dest" :key="item.name">
            <div class="left">
                <h3>{{ item.role }}</h3>
                <h1>{{ item.name }}</h1>
                <p>{{ item.bio }}</p>
            </div>
            <div class="right">
                <img :src="item.images.png" :alt=" item.name ">
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
}

.content {

    .divs {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left {
            width: 90%;
        }

        .right {
            width: 90%;

        }
    }

    .bar {
        ul {
            list-style: none;
            display: flex;
            gap: 2em;

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
            }
        }
    }
}</style>