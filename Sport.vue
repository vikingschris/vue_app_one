<template>
    <div class="sport">
        <h1>Hello Template Test</h1>
        <ul>
            <li v-for="x in sport">{{x.team}}</li>
        </ul>
    </div>
</template>


<script>
export default{
    name: "sport",
    props: ["tm"],
    data(){
        return {
            sport: [
                {
                    team: "vikings",
                    color: "purple"
                },
                {
                    team: "magic",
                    color: "blue"
                },
                {
                    team: "milan",
                    color: "red"
                }
            ]
        }
    }
}
</script>