<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <Item
          v-for="barangs in barang"
          :key="barangs.nama"
          :benda="barangs"
          class="col-4 mt-3 border border-dark p-2 mr-2"
        />
      </div>
    </div> 
    <!-- <div>
      <Desk :desk="barang" />
    </div> -->
  </div>
</template>
<script>
import Item from "@/components/product/Item.vue";
// import Desk from "@/components/product/Desk.vue";

export default {
  components: {
    Item,
    // Desk,
  },
  data() {
    return {
      barang: [
        {
          nama: "Nike  Peaceminusone",
          price: "$ 180 USD",
          merek: "Nike",
          image:
            "https://i.pinimg.com/564x/43/d6/fe/43d6fed7baa1795ff5e4f22517759263.jpg",
        },
        {
          nama: "adidas Forum Low sneakers",
          price: "$ 76.85 USD",
          merek: "adidas",
          image:
            "https://i.pinimg.com/564x/ac/08/7d/ac087d758b03f1d5a194d35569c430ad.jpg",
          deskripsi:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, blanditiis maiores. Similique ex ullam consectetur molestias, accusamus est quo iure quisquam dolor doloribus veritatis quibusdam explicabo fuga nemo maiores libero. Corrupti dolor voluptas illo eum aut deleniti delectus dicta? Facere.",
        },
        {
          nama: "Chuck 70 Ox Sneakers",
          price: "$ 66.25 USD",
          merek: "converse",
          image:
            "https://i.pinimg.com/564x/22/43/4b/22434bd86578abdb713df29eb3339835.jpg",
        },
        {
          nama: " swetter ysl white",
          price: "$ 230 USD",
          merek: "YSL",
          image:
            "https://i.pinimg.com/564x/20/c0/30/20c030cdbd56b121b964be18e12c3036.jpg",
        },
        {
          nama: "channel swetter",
          price: "$ 280 USD",
          merek: "channel",
          image:
            "https://i.pinimg.com/564x/08/bc/b2/08bcb23106064ea76e0769394c1d68ef.jpg",
        },
        {
          nama: "Prada pink bag",
          price: "$ 130 USD",
          merek: "Prada",
          image:
            "https://i.pinimg.com/564x/26/0a/e8/260ae8060b18333100d346d70d3866c2.jpg",
        },
      ],
    };
  },
};
</script>

