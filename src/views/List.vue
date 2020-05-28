<template>
  <div class="list">
    <el-dialog title="点击查看" :visible.sync="dialogVisible" width="90%" class="icon_caidan_dia">
      <div class="dia_body">
        <router-link tag="div" class="item" :to="{path:'/'}">首页</router-link>
        <router-link tag="div" class="item active" :to="{path:'/list'}">资讯分类1</router-link>
        <router-link tag="div" class="item" :to="{path:'/detail'}">资讯分类2</router-link>
        <router-link tag="div" class="item" :to="{path:'/about'}">资讯分类3</router-link>
        <div class="item">资讯分类4</div>
        <div class="item">资讯分类5</div>
        <div class="item">资讯分类6</div>
      </div>
    </el-dialog>
    
    <div class="header_l">
      <div class="h_content">
        <div class="logo">
          <img src="../assets/img/logo.png" alt />
        </div>
        <div class="iconfont icon-caidan" @click="dialogVisible = true"></div>
        <div class="pc_dia_body">
          <div class="pc_dia">
            <router-link tag="div" class="item" :to="{path:'/'}">首页</router-link>
            <router-link tag="div" class="item active" :to="{path:'/list'}">资讯分类1</router-link>
            <router-link tag="div" class="item" :to="{path:'/detail'}">资讯分类2</router-link>
            <router-link tag="div" class="item" :to="{path:'/about'}">资讯分类3</router-link>
            <div class="item">资讯分类4</div>
            <div class="item">资讯分类5</div>
            <div class="item">资讯分类6</div>
          </div>
        </div>
      </div>
    </div>

    <div class="list_body">
      <div class="title_l_b">资讯分类1</div>
      <div class="list_b_c">
        <div class="left_list">
          <div class="part3">
            <div class="p3_content">
              <div class="item" v-for="t in 8" :key="t">
                <div class="date">
                  <div class="n">20</div>
                  <div class="d">2019-10</div>
                </div>
                <div class="text_l">
                  <div class="p3_title">你打谁看得见啊斯柯达将奥斯卡</div>
                  <div
                    class="p3_p"
                  >你打谁看得见啊斯柯达将奥斯卡你打谁看得见啊斯柯达将奥斯卡你打谁看得见啊斯柯达将奥斯卡你打谁看得见啊斯柯达将奥斯卡你打谁看得见啊斯柯达将卡</div>
                  <div class="zan">
                    <span class="iconfont icon-yulan"></span>
                    <span class="t_num">2130</span>
                    <span class="iconfont icon-xing"></span>
                    <span class="t_num">213</span>
                    <span class="iconfont icon-dianzan"></span>
                    <span class="t_num">213</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="more_more">加载更多</div>
          </div>
        </div>
        <div class="right_list">
          <div class="title">
            <img src="../assets/img/t_r_title.jpg" alt class="img" />
            <span class="text_l">推荐文章</span>
          </div>
          <ul class="list_ul">
            <li>分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号</li>
            <li>分享10个号分享10个号分享10个号分</li>
            <li>分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号</li>
            <li>分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号</li>

            <li>分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号</li>
            <li>分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号</li>

            <li>分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号</li>
            <li>分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号分享10个号</li>
          </ul>
        </div>
      </div>
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
    <div class="turn_top">
      <div class="t1_p1 "  @click="toTop">
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
    }
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
