<template>
    <div id="Composition">
        <div class="row mb-3">
            <div class="col-md-4" v-for="counter in counters" :key="counter.id"><Counter :counter="counter"></Counter></div>
        </div><!-- row -->
        <div class="mainbox">
            <div class="title"><i class="fas fa-filter"></i> Composition APIs</div>
            <div class="content">
                Here, we have an Composotion APIs for Vue.js 3
                
                <VueJsProgress title="bg='electronblue'" :percentage="82" bg="electronblue" :delay="600" :striped="true" :animation="true"></VueJsProgress >
                <VueJsCounter start="1000" end="2000"></VueJsCounter>
                <pre class="mt-3">
                    import { reactive, toRefs } from 'vue'
                    export default {
                        name: 'Composition',
                        setup(){
                            const state = reactive({
                                counters : [
                                    {start: 1000, end: 1999, duration: 5000, thousand: '.', decimal: ','},
                                    {start: 5, end: 100, duration: 10000, thousand: ',', decimal: '.'},
                                    {start: 25, end: 5500, duration: 1000, thousand: '.', decimal: ','}
                                ]
                            })
                            return {
                                ...toRefs(state),
                            }
                        }
                    }
                </pre>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import Counter from '@/components/Counter.vue'
export default {
    name: 'Composition',
    components: {
        Counter
    },

    setup(){
        const state = reactive({
            counters : [
                {start: 1000, end: 1999, duration: 5000, thousand: '.', decimal: ','},
                {start: 5, end: 100, duration: 10000, thousand: ',', decimal: '.'},
                {start: 25, end: 5500, duration: 1000, thousand: '.', decimal: ','}
            ]
        })
        
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
</style>