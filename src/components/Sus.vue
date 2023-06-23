<script setup>
// import '/public/style/spinkit.css'
</script>

<template>
    <Suspense>
        <template #default>
            <slot></slot>
        </template>

        <template #fallback>
            <div class="sk-grid">
                <div class="sk-grid-cube"></div>
                <div class="sk-grid-cube"></div>
                <div class="sk-grid-cube"></div>
                <div class="sk-grid-cube"></div>
                <div class="sk-grid-cube"></div>
                <div class="sk-grid-cube"></div>
                <div class="sk-grid-cube"></div>
                <div class="sk-grid-cube"></div>
                <div class="sk-grid-cube"></div>
            </div>
        </template>
    </Suspense>
</template>



