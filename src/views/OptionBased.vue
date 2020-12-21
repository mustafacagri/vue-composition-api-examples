<template>
    <div id="OptionBased">
        <div class="row mb-3">
            <div class="col-md-4" v-for="counter in counters" :key="counter.id"><Counter :counter="counter"></Counter></div>
        </div><!-- row -->
        <div class="mainbox">
            <div class="title"><i class="fas fa-filter"></i> Option-Based APIs</div>
            <div class="content">
                Here, we have an Option-based APIs for Vue.js 3
                <pre class="mt-3">
                    export default {
                        name: 'OptionBased',
                        data(){
                            return{
                                counters: [
                                    {start: 1000, end: 1999, duration: 5000, thousand: '.', decimal: ','},
                                    {start: 5, end: 100, duration: 10000, thousand: ',', decimal: '.'},
                                    {start: 25, end: 5500, duration: 1000, thousand: '.', decimal: ','}
                                ]
                            }
                        }
                    }
                </pre>
            </div>
        </div>
        
    </div>
</template>
<script>
import Counter from '@/components/Counter.vue'
export default {
    name: 'OptionBased',
    data(){
        return{
            counters: [
                {start: 1000, end: 1999, duration: 5000, thousand: '.', decimal: ','},
                {start: 5, end: 100, duration: 10000, thousand: ',', decimal: '.'},
                {start: 25, end: 5500, duration: 1000, thousand: '.', decimal: ','}
            ]
        }
    },
    components: {
        Counter
    }
}
</script>

<style lang="scss" scoped>
</style>