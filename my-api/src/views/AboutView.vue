<template>
  <div>
    <h1>chart bar</h1>
    <ChartBar />
    <h1>chart Line</h1>
    <ChartLine />
    <h1>chartMultiline</h1>
    <ChartMultiLine />
  </div>
</template>

<script>
import ChartBar from "@/components/chart/ChartBar.vue";
import ChartLine from "@/components/chart/ChartLine.vue";
import ChartMultiLine from "@/components/chart/ChartMultiLine.vue";

export default {
  name: "App",
  components: { ChartBar, ChartLine, ChartMultiLine },
};
</script>
<style scoped>
h1 {
  margin-left: 500px;
}
</style>
