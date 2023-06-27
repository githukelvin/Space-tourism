
<script setup>
import { ref, watch, onMounted } from "vue";
import data from "/src/data.json";
// let data = await fetch("https://api.npoint.io/6003b0fb97a1493208f5").then(res=> res.json());
// console.log(data);
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
               
            </div>
            <div class="right">
                <h1>{{ item.name }}</h1>
                <p>{{ item.description }}</p>
                <div class="bottom">
                    <div class="stats">
                        <div class="stat">
                            <h2>avg. distance</h2>
                            <p v-text="item.distance " ></p>
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
@mixin response($size){
    @media (max-width: $size){
        @content;
    }
}
.content{
 margin-left: 2.2em;
 @include response(840px){
    margin-left: 0;;
 }
    @include response(440px){
        margin-left: 0;
        width:100%;
    }

  .divs{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9.8em;
    @include response(840px){
        grid-template-columns: 1fr;
        width:573px;
        margin-inline:auto;
        gap: 0;
    }
    @include response(440px){
        width:100%;
    }
      .left{
        padding-left: 1em;
        margin-top: 4em;
        width: min-content;
        width:460px;
        height: 460px;
        img{
            width: 100%;
            object-fit: contain;
            object-position: center;
        }
        @include response(840px){
            margin-inline:auto;
            margin-top: 1.5em;
            padding-left: 0;
            width: 39.1%;
            height: 39.1%;
        }
        @include response(440px){
            width: 170px;
            height: 170px;
        }
    }
    .right{
        margin-top:6.3em;
        width: 100%;

        @include response(840px){
            margin-top: 6.7em;
            margin-inline:auto;
            width:573px;
            
        }
        @include response(440px){
            width:87.2%;
            margin-top: 4em;
        }


       h1{
        
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 100px;
        line-height: 115px;
        text-transform: uppercase;
        margin-bottom: .15em;
        color: #FFFFFF;
        @include response(840px){
            font-size: 80px;
            line-height: auto;
            text-align: center;
            margin-bottom: 0em;
        }
        @include response(440px){
            font-size: 56px;
        }
       }
        p{
		font-size:18px;
		color:#d0d6f9;
		line-height: 32px;
		font-weight: 300;
		font-family: 'Barlow', sans-serif;
        @include response(840px){
            font-size: 16px;
            text-align: center;
            line-height: 28px;
            width: 95%;
            margin-inline:auto;
            margin-top:-5px;
        }
        @include response(440px){
            font-size: 15px;
            line-height: 25px;
            width:95%;
        }
	}
    .stats{
        display: flex;
        gap: 5em;
        margin-top:5.1em;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            width: 444px;
            height: 1px;
            background-color: #383B4B;
            top: -1.66em;
            @include response(840px){
                width:573px;
                top: -1.9em;
            }

            @include response(440px){
                width: 100%;
                margin-inline:auto;
                
            }
        }
        @include response(840px){
            display:grid;
            grid-template-columns: 1fr 1fr;
            padding-bottom: 2em;
        }
        @include response(440px){
            grid-template-columns: 1fr;
            padding-bottom: 4em;
            gap:2em;
        }
          .stat {
             h2{
                font-family: 'Barlow Condensed', sans-serif;
                font-style: normal;
                font-weight: 200;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 2.3625px;
                text-transform: uppercase;  
                color:#d0d6f9;
                @include response(840px){
                    line-height: auto;
                    letter-spacing: 2.36px;
                    text-align: center;
                }
                @include response(440px){
                    font-size: 14px;
                }   
                
            }
             p{
                margin-top:.5em;
                font-family: 'Bellefair';
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 32px;
                text-transform: uppercase;
                color: #FFFFFF;
                @include response(840px){
                    font-size: 28px;
                    line-height: auto;
                }
                @include response(440px){
                    font-size: 28px;
                }
            }}
        
    }
   
}
  }
 .bar{
    position: relative;
    left:617px;
    top: 64px;
    width:fit-content;
    @include response(840px){
        left: 0;
        margin-inline:auto;
        top:20.54em;
        // margin-top: 2em;
    }
    @include response(440px){
        top: 16.54em;
    }
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