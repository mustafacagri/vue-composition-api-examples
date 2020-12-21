<template>
    <div class="Counter">
        <div class="mainbox bottomredborder">
            <div class="title withoutline">
                <i class="fas fa-flag"></i> {{title}}
                <div class="right"><VueJsCounter :start="counter.start" :end="counter.end" :duration="counter.duration" :thousand="counter.thousand" :decimal="counter.decimal"></VueJsCounter></div>
            </div>
        </div>
    </div>
</template>

<script>
import VueJsCounter from 'vue-js-counter'
export default {
    name: 'Counter',
    props: {
		title: {type: String, default: "Counter"},
        counter: {type: Object},
    },
    components:{
        VueJsCounter
    },
}
</script>