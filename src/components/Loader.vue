<template>
    <div class="loader-container">
        <section class="loader">

        </section>
    </div>
    
</template>

<script>
export default {
        
}
</script>

<style scoped>
    .loader-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }

    .loader {
        height: 10em;
        width: 10em;
        background-color: aquamarine;
        border-radius: 50%;
        animation: loading infinite 0.5s alternate;
    }

    @keyframes loading {
        from {
            transform: scale(0.2);
            opacity: 0.4;
        }

        to {
            transform: scale(2);
            opacity: 1;
        }
    }

</style>


