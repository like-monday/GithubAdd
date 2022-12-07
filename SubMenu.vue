<template>
  <div class="menu">
    <div class="card" @click="changeClass($event)">
      <div
        v-for="(item, index) in classList"
        :key="index"
        :class="{ Action: item.isTrue }"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      class: 'JGB',
      classList: [
        {
          value: 'JGB',
          label: '菁幹班',
          isTrue: true
        },
        {
          value: 'BGB',
          label: '标杆班',
          isTrue: false
        },
        {
          value: 'ZB',
          label: '专班',
          isTrue: false
        },
        {
          value: 'SXS',
          label: '本科实习生',
          isTrue: false
        }
      ]
    }
  },
  mounted () {
    // this.differenceClass()
  },
  methods: {
    // 点击了哪个班别
    changeClass (e) {
      switch (e.target.innerText) {
        case '菁幹班':
          this.class = 'JGB'
          this.classList.forEach((item) => {
            item.isTrue = false
          })
          this.classList[0].isTrue = true
          break
        case '标杆班':
          this.class = 'BGB'
          this.classList.forEach((item) => {
            item.isTrue = false
          })
          this.classList[1].isTrue = true
          break
        case '专班':
          this.class = 'ZB'
          this.classList.forEach((item) => {
            item.isTrue = false
          })
          this.classList[2].isTrue = true
          break
        case '本科实习生':
          this.class = 'SXS'
          this.classList.forEach((item) => {
            item.isTrue = false
          })
          this.classList[3].isTrue = true
          break
      }
      this.$emit('sendClass', this.class)
    }
    // 判断当前选择哪一个班别
    // differenceClass () {
    //   console.log(this.$refs.BGB)
    //   switch (this.class) {
    //     case 'JGB':
    //       for
    //       break
    //     case 'BGB':
    //       this.$refs.BGB.style.background = '#162b47'
    //       break
    //     case 'ZB':
    //       this.$refs.ZB.style.background = '#162b47'
    //       break
    //     case 'SXS':
    //       this.$refs.SXS.style.background = '#162b47'
    //       break
    //   }
    // }
  }
}
</script>

<style scoped lang='scss'>
.card {
  margin-right: 20px;
  padding: 10px 5px;
  background-color: rgb(240, 239, 239);
  box-shadow: 5px 5px 3px #adaeae, -5px -5px 3px #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  div {
    transition: all 0.5s;
    font-size: 16px;
    color: #fff;
    text-align: center;
    width: 120px;
    background-color: #c0504d;
    padding: 7px 0px;
    cursor: pointer;
    // #c0504d 红 #162b47
  }
  .Action {
    background-color: #162b47;
  }
}
</style>
