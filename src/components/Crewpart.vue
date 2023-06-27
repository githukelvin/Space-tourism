
<script setup>
import { ref, watch, onMounted } from "vue";
import data from "/src/data.json";
// let data = await fetch("https://api.npoint.io/6003b0fb97a1493208f5").then(res => res.json());

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
@mixin responsive($size){
    @media (max-width: $size){
        @content;
    }
}
.content {
    width:calc( 85% + .5em);
    margin-inline:auto;
    position: relative;

    @include responsive(840px){
        width: 100%;
    }


    .divs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3.5em;
        @include responsive(840px){
            grid-template-columns: 1fr;
            gap: 1.5em;
        }
        @include responsive(440px){
            display: flex;
            flex-direction: column-reverse;
        }
        .left {
            width: 532px;
            margin-top:9.6em;
            @include responsive(840px){
                width: 59.64%;
                margin:0 auto;
                margin-top: 3.15em;
            }
            @include responsive(440px){
                width: 87.2%;
                margin:0 auto;
                margin-top: 3.15em;
                padding-bottom: 4em;
            }
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
                @include responsive(840px){
                    text-align: center;
                    font-size:24px;
                    line-height:auto;
                }
                @include responsive(440px){
                    font-size: 16px;
                    letter-spacing: 1px;
                    font-weight: 300;
                }
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
                @include responsive(840px){
                    text-align: center;
                    font-size:40px;
                    line-height:auto;
                    margin-top: -0.15em;

                } 
                @include responsive(440px){
                    font-size: 24px;
                }
                
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
                @include responsive(840px){
                    text-align: center;
                    font-size:16px;
                    width:100%;
                    line-height: 28px;
                    margin-top:0.33em;
                } 
                @include responsive(440px){
                    font-size: 15px;
                    line-height: 25px;
                }
            }
        }

        .right {
            position: relative;
            z-index: 22;
            width: min-content;
            margin-top: -2.9em;
            width: 568.07px;
            position: relative;
            height: 690px;
            img{
                width: 100%;
                height: 690px;
                object-fit: contain;
               aspect-ratio: .5;
               position: absolute;
               object-position: center;
               bottom: 0;
            }
            @include responsive(840px){
                width: 456.37px;
                height: 556px;
                margin-top: 5em;
                margin-inline:auto;
                img{
                    width: 100%;
                    height: 556px;
                    object-fit: contain;
                    aspect-ratio: 1;
                    // position: absolute;
                    object-position: center;
                    // bottom: 0;
                    
                }
            }
            @include responsive(440px){
                width:87.5%;

                margin-top: -19em;

                img{
                    height: 13.9375rem;
                }
                &::after{
                    content: '';
                    width:100%;
                    height:1px;
                    background: #383B4B;
                    position: absolute;
                    bottom:0;
                    left:0;

                    }
            }

        }
    }

    .bar {
        position: absolute;
        width: 132px;
        height: 15px;
        bottom:83px;

        @include responsive(840px){
            width: 100%;
            left: 18em;
            margin-inline:auto;
            top:17.5em;
            // margin-top: 2.5em;
        }
        @include responsive(440px){
            width: fit-content;
            position: relative;
            left: 0;
            margin-inline:auto;
            top: 19em;
        }
       
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
                @include responsive(840px){
                    width: 10px;
                    height: 10px;
                }
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