<template>
    <div class="Progress">
        <div class="mainbox bottomredborder">
            <div class="title">
                <i class="fas fa-flag"></i> {{title}} 
                <div class="right">{{progress.percentage}}%</div>
            </div>
            <div class="content"><VueJsProgress :percentage="progress.percentage" :bg="progress.bg" :delay="progress.delay" :striped="progress.striped" :animation="progress.animation"></VueJsProgress></div>
        </div>
    </div>
</template>

<script>
import VueJsProgress from 'vue-js-progress'
export default {
    name: 'Progress',
    props: {
		title: {type: String, default: "Progress"},
        progress: {type: Object},
    },
    components:{
        VueJsProgress
    },
}
</script>