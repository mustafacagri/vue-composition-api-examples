<template>
    <div id="ReusableComposition">
        <div class="row mb-3">
            <div class="col-md-4" v-for="counter in counters" :key="counter.id"><Counter :counter="counter.data" :title="counter.title"></Counter></div>
        </div><!-- row -->
        
        <div class="row mb-3">
            <div class="col-md-4" v-for="progress in progresses" :key="progress.id"><Progress :progress="progress.data" :title="progress.title"></Progress></div>
        </div><!-- row -->

        <div class="mainbox mb-3">
            <div class="title"><i class="fas fa-filter"></i> Reusable Composition APIs</div>
            <div class="content">
                There are tons of methods to use Reusable Composition APIs. However, I used only one method to show it. It will be may developed more in future.
                <pre class="mt-4">
                    import { reactive, toRefs } from 'vue'
                    import Counter from '@/components/Counter.vue'
                    import Progress from '@/components/Progress.vue'
                    import { useProgressData } from '@/composable/progress-data.js'
                    export default {
                        name: 'ReusableComposition',
                        components: {
                            Progress,
                            Counter
                        },
                        
                        setup(){
                            const { stateProgressData } = useProgressData()
                            const state = reactive({
                                counters : [
                                    {title:'Counter 1', data: {start: 1000, end: 1999, duration: 5000, thousand: '.', decimal: ','}},
                                    {title:'Counter 2', data: {start: 5, end: 100, duration: 10000, thousand: ',', decimal: '.'}},
                                    {title:'Counter 3', data: {start: 25, end: 5500, duration: 1000, thousand: '.', decimal: ','}}
                                ],
                                ...stateProgressData
                            })
                            
                            return {
                                ...toRefs(state)
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
import Progress from '@/components/Progress.vue'
import { useProgressData } from '@/composable/progress-data.js'
export default {
    name: 'ReusableComposition',
    components: {
        Progress,
        Counter
    },
    
    setup(){
        const { stateProgressData } = useProgressData()
        const state = reactive({
            counters : [
                {title:'Counter 1', data: {start: 1000, end: 1999, duration: 5000, thousand: '.', decimal: ','}},
                {title:'Counter 2', data: {start: 5, end: 100, duration: 10000, thousand: ',', decimal: '.'}},
                {title:'Counter 3', data: {start: 25, end: 5500, duration: 1000, thousand: '.', decimal: ','}}
            ],
            ...stateProgressData
        })
        
        return {
            ...toRefs(state)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>