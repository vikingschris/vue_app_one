<template>
    <div id="vue-app">
        <p>{{vorname}}</p>
        <p>{{nachname}}</p>
        <p>{{zeitalter}}</p>
        <ul>
            <test v-for="t in visits" v-bind:live="t"></test>
        </ul>
        <sport></sport>
        <grant></grant>
    </div>
</template>


<script>

import Test from "./Test.vue";
import Sport from "./Sport.vue";
import Grant from "./external_test/wish.vue";

export default{
    name: "vue-app",
    data(){
        return{
            vorname: "jane",
            nachname: "doe",
            zeitalter: 20,
            w_out: "div vue-app, error stats, component template should contain exactly one root element",
            visits: [
                {
                    country: "canada"
                },
                {
                    country: "germany"
                },
                {
                    country: "france"
                }
            ]
        }
    },
    components: {
        Test,
        Sport,
        Grant
    }
}
</script>