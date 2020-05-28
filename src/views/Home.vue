<template>
  <div class="home">
    <el-dialog title="点击查看" :visible.sync="dialogVisible" width="90%" class="icon_caidan_dia">
      <div class="dia_body">
        <router-link tag="div" class="item active" :to="{path:'/'}">首页</router-link>
        <router-link tag="div" class="item" :to="{path:'/list'}">资讯分类1</router-link>
        <router-link tag="div" class="item" :to="{path:'/detail'}">资讯分类2</router-link>
        <router-link tag="div" class="item" :to="{path:'/about'}">资讯分类3</router-link>
        <div class="item">资讯分类4</div>
        <div class="item">资讯分类5</div>
        <div class="item">资讯分类6</div>
      </div>
    </el-dialog>
    
    <div class="header">
      <div class="h_img">
        <img src="../assets/img/logo.jpg" alt />
      </div>
      <div class="iconfont icon-caidan" @click="dialogVisible = true"></div>
      <div class="h_content">
        <div class="h_nav">
          <div class="logo">
            <img src="../assets/img/logo.png" alt />
          </div>
          <div class="h_nav_bar">
            <router-link tag="div" class="item active" :to="{path:'/'}">首页</router-link>
            <router-link tag="div" class="item" :to="{path:'/list'}">资讯分类1</router-link>
            <router-link tag="div" class="item" :to="{path:'/detail'}">资讯分类2</router-link>
            <router-link tag="div" class="item" :to="{path:'/about'}">资讯分类3</router-link>
            <div class="item">资讯分类4</div>
            <div class="item">资讯分类5</div>
            <div class="item">资讯分类6</div>
          </div>
        </div>
        <div class="down_load">APK下载地址</div>
      </div>
    </div>
    <div class="part1">
      <div class="left">
        <div class="item">
          <div class="img">
            <img src="../assets/img/a1.jpg" alt />
          </div>
          <div class="text">
            <div class="e">PREMINM MBES</div>
            <div class="t">数万会员为你牵红线</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../assets/img/a2.jpg" alt />
          </div>
          <div class="text">
            <div class="e">PREMINM MBES</div>
            <div class="t">线上线下各种精彩活动</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../assets/img/a3.jpg" alt />
          </div>
          <div class="text">
            <div class="e">PREMINM MBES</div>
            <div class="t">圈内老司机在线解答</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../assets/img/a4.jpg" alt />
          </div>
          <div class="text">
            <div class="e">PREMINM MBES</div>
            <div class="t">丰富群聊解锁各种姿势</div>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="../assets/img/t1.jpg" alt />
      </div>
    </div>
    <div class="part2">
      <div class="p2_1">
        <div class="left">
          <img src="../assets/img/c1.jpg" alt />
          <img src="../assets/img/c2.jpg" alt />
        </div>
        <div class="center">
          <img src="../assets/img/c4.jpg" alt />
        </div>
        <div class="right">
          <img src="../assets/img/c6.jpg" alt />
          <img src="../assets/img/c7.jpg" alt />
        </div>
      </div>
      <div class="p2_2">
        <div class="left">
          <img src="../assets/img/c3.jpg" alt />
        </div>
        <div class="center">
          <img src="../assets/img/c5.jpg" alt />
        </div>
        <div class="right">
          <img src="../assets/img/c8.jpg" alt />
        </div>
      </div>
    </div>
    <div class="part3">
      <div class="title">
        <span>资 讯</span>
      </div>
      <div class="p3_nav">
        <div class="item active">资讯分类1</div>
        <div class="item">资讯分类2</div>
        <div class="item">资讯分类3</div>
        <div class="item">资讯分类4</div>
      </div>
      <div class="p3_content">
        <div class="item" v-for="t in 8" :key="t">
          <div class="date">
            <div class="n">20</div>
            <div class="d">2019-10</div>
          </div>
          <div class="text_l">
            <div class="p3_title">你打谁看得见啊斯柯达将奥斯卡</div>
            <div class="p3_p">你打谁看得见啊斯柯达将奥斯卡你打谁看得见啊斯柯达将奥斯卡你打谁看得见啊斯柯达将奥斯卡你打谁看得见啊斯柯达将奥斯卡你打谁看得见啊斯柯达将卡</div>
          </div>
        </div>
      </div>
      <div class="more">更多</div>
    </div>
    <div class="footer">
      <div class="p_img">
        <img src="../assets/img/foot.jpg" alt />
        <div class="p_content">同城约会神器</div>
      </div>
      <div class="man">
        <div class="f_l">
          <div class="item" v-for="t in 7" :key="t+20">
            <img src="../assets/img/png.png" alt />
            <div class="p_content"></div>
          </div>
          <div class="item">
            <img src="../assets/img/png.png" alt />
            <div class="p_content">99+</div>
          </div>
        </div>
        <div class="f_r">APK下载地址</div>
      </div>
      <div class="link">
        <div class="f_l_p1">
          <el-button type="info" round size="mini">
            友情链接
            <i class="el-icon-arrow-down"></i>
          </el-button>
          <el-input placeholder="关键词" prefix-icon="el-icon-search" v-model="input2" size="mini"></el-input>
        </div>
        <div class="f_l_p2">
          <div class="text" v-for="t in 13" :key="t+203">约会神器</div>
        </div>
      </div>
    </div>
    <div class="turn_top"  @click="toTop">
      <div class="t1_p1 ">
        <div class="iconfont icon-huidaodingbu"></div>
        <div>顶部</div>
      </div>
      <div class="t1_p2">
        <div class="iconfont icon-xingzhuang"></div>
        <div>下载</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      dialogVisible: false
    };
  },
  methods:{
    toTop(){
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 20
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 20)
    }
  }
};
</script>
<style lang="less">

</style>
