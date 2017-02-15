<template>
    <div class="test">
        <li>{{live.country}}</li>
    </div>
</template>


<script>
export default{
    name: 'test',
    props: ["live"]
}
</script>