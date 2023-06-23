<script setup>
import { ref, watch, onMounted } from "vue";
import data from "/src/data.json";
// let data = await fetch("https://api.npoint.io/6003b0fb97a1493208f5").then(res => res.json());
// console.log(data);
const technology = ref(null);
const tech = ref([]);
let all = data.technology;

let vWidth= ref('')

function getText(e) {
    let privo = document.querySelector(".act");
    privo.classList.remove("act")
    technology.value = e.target.getAttribute('crew');
    e.target.classList.add("act")
}

watch(technology, (newValue) => {
    tech.value = data.technology.filter((item) => item.name === newValue);

});

onMounted(() => {
    vWidth.value = window.innerWidth;
    tech.value = data.technology.filter((item) => item.name === "Launch vehicle");
    let moon = document.querySelector(".first");
    moon.classList.add("act");
});

</script>
<template>
    <div class="content">
        <div class="left">
            <div class="sideBar">
                <ul>
                    <li :crew="all[0].name" @click="getText" class="first">1</li>
                    <li :crew="all[1].name" @click="getText">2</li>
                    <li :crew="all[2].name" @click="getText">3</li>
                </ul>
            </div>
            <div class="info" v-for="item in tech" :key="item.name">
                <h4>the terminology ...</h4>
                <h1>{{item.name}}</h1>
                <p>{{ item.description }}</p>
            </div>
        </div>
        <div class="right" v-for="item in tech" :key="item.name">
            
            <img v-if=" vWidth >768" :src="'.'+item.images.portrait" :alt="item.name" >
            <img v-else :src="'.'+ item.images.landscape" :alt="item.name">
        </div>
         
    </div>
</template>  


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600&family=Barlow:wght@300;400;500;600&display=swap');
*{
    font-family: 'Barlow', sans-serif;
    font-family: 'Barlow Condensed', sans-serif;
}
@mixin responsive($size){
    @media (max-width: $size){
        @content;
    }
}
.content{
    display: flex;
    width: 100%;
    @include responsive(768px){
        flex-direction:column-reverse;
    }
    .left{
        display: flex;
        width: 50%;
        gap:5em;
        margin-left: 10.3em;
        margin-top:8.5em;

        @include responsive(768px){
            width: 100%;
            margin-left: 0;
            margin-top: -10.1em;
            gap: 0em;
            flex-direction: column;
        }
                .sideBar{
                    @include responsive(768px){
                        width:fit-content;
                        margin-inline:auto;
                        margin-bottom: 2.7em;
                        
                    }
                    
            ul{
                display:flex;
                flex-direction: column;
                gap: 2em;
                @include responsive(768px){
                    flex-direction: row;
                    gap: 1em;
                }
                li{
                    display: grid;
                    place-items: center;
                    $size:80px;
                    width:$size;
                    height: $size;
                    background: #0b0d1725;
                    cursor: pointer;
                    border-radius: 100%;
                    font-family: 'Bellefair';
                    font-size: 2em;
                    letter-spacing: 2px;
                    color:#fff;
                    border: .5px solid #fff;
                    &.act{
                        color:#0b0d17;
                        background: #fff;
                    }
                    @include responsive(768px){
                        width: 60px;
                        height: 60px;
                        font-size: 24px;
                        letter-spacing: 1.5px;
                    }
                }
            }
        }
        .info{
            @include responsive(768px){
                        width:458px;
                        margin-inline:auto;
                        padding-bottom: 2em;
                    }
           
        h4{
            letter-spacing: 2.7px;
            font-size: 1em;
            text-transform: uppercase;
            line-height: 1;
            font-weight:300;
            font-family: 'Barlow Condensed', sans-serif;
            color:#d0d6f9;
            margin-bottom: 1.1em;
            margin-top: 2px;
            @include responsive(768px){
                text-align: center;
                letter-spacing: 2.7px;
                line-height:auto;
                font-size: 16px;
                margin-bottom: 1.3em;

            }
        }
        h1{
            font-family: 'Bellefair';
            font-size: 56px;
            text-transform: uppercase;
            color:#fff;
            font-weight: 300;
            line-height: 1;
            margin-bottom: .35em;
            @include responsive(768px){
                text-align: center;
                font-size: 40px;
                line-height: auto;
                margin-bottom: .47em;
            }
           
        }
        p{
            font-family: 'Barlow', sans-serif;
            line-height: 32px;
            font-size: 18px;
            width: 80%;
            color:#d0d6f9;
            @include responsive(768px){
                text-align: center;
                line-height: 28px;
                font-size: 1em;
                width: 100%;
                margin-inline:auto;
            }
        }
        }
    }
    .right{
        width: 515px;
        margin-top:1.65em;
        height: 527px;
        margin-left: 7em;
        @include responsive(768px){
            margin-left: 0;
            margin-top:3.4em;
        }
        img{
            object-fit: cover;
            object-position: center;
        }
    }
}
</style>
