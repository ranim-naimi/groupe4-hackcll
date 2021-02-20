<template>
  <div id="psidebar">
    <ul id="navigation">
      <li v-for="(item, index) in navigation" :key="'item'+index">
        <i v-if="item.subnav" class="far"
          :class="{'fa-plus-square':!item.open,
                    'fa-minus-square':item.open}"></i>
        <div class="title" @click="item.open = !item.open">
          {{ item.title }}
        </div>
        <Dropdown v-if="item.subnav" :list="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
 import Dropdown from './Dropdown'
  export default {
    computed: {
      navigation() {
        return this.$store.getters.navigation;
      }
    },
    components: {
      Dropdown
    }
  }
</script>

<style>
#sidebar {
	width: 100%;
	max-width: 350px;
	min-height: 100vh;
	background-color: #fefefe;
	box-shadow: 10px 0 20px rgba(0, 0, 0, .2);
}
#navigation {
	list-style: none;
	border-bottom: 1px solid #dedede;
}
#navigation li {
 position: relative;
	color: #555;
	border-top: 1px solid #dedede;
	cursor: pointer;
}
#navigation li .title {
 padding: 10px 0;
	text-indent: 20px;
}
#navigation li i {
	position: absolute;
	top: 12px;
	right: 10px;
}
</style>