<script setup>
import data from "/public/data.json"
console.log(data)
let dest = data.destinations;

function getText(event) {
    console.log(event);
        alert("i was clicked");
}

</script>

<template>
   <div class="content ">
      <div class="bar">
            <ul>
                <li @click="getText(e)">moon</li>
                <li @click="getText(e)">mars</li>
                <li @click="getText(e)">europa</li>
                <li @click="getText(e)">titan</li>
            </ul>
        </div>
     <div class="left" >
            <!-- <img src="dasdsadasd" alt=""> -->
        </div>
        <div class="right">
          <p>fkdksnfdsafsafasd</p>
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
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    .left{

    }
    .right{
   
}
 .bar{
    position:absolute;
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
                &.active{
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