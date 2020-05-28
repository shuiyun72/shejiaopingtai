<template>
  <div class="about">
    <el-dialog title="点击查看" :visible.sync="dialogVisible" width="90%" class="icon_caidan_dia">
      <div class="dia_body">
        <router-link tag="div" class="item " :to="{path:'/'}">首页</router-link>
        <router-link tag="div" class="item " :to="{path:'/list'}">资讯分类1</router-link>
        <router-link tag="div" class="item " :to="{path:'/detail'}">资讯分类2</router-link>
        <router-link tag="div" class="item active" :to="{path:'/about'}">资讯分类3</router-link>
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
            <router-link tag="div" class="item " :to="{path:'/list'}">资讯分类1</router-link>
            <router-link tag="div" class="item" :to="{path:'/detail'}">资讯分类2</router-link>
            <router-link tag="div" class="item active" :to="{path:'/about'}">资讯分类3</router-link>
            <div class="item">资讯分类4</div>
            <div class="item">资讯分类5</div>
            <div class="item">资讯分类6</div>
          </div>
        </div>
      </div>
    </div>
    <div class="about_body">
      <div class="img_box">
        <div class="item">
          <img src="../assets/img/c1.jpg" alt />
          <p>图片名称</p>
        </div>
        <div class="item">
          <img src="../assets/img/c1.jpg" alt />
          <p>图片名称</p>
        </div>
        <div class="item">
          <img src="../assets/img/c1.jpg" alt />
          <p>图片名称</p>
        </div>
        <div class="item">
          <img src="../assets/img/c1.jpg" alt />
          <p>图片名称</p>
        </div>
      </div>
      <div class="pinglun">
        <div class="ping_title">热门评论</div>
        <div class="item" v-for="it in 5" :key="it+'960'">
          <div class="it_l">
            <img src="../assets/img/png.png" alt />
          </div>
          <div class="it_r">
            <div class="it_p1">深入了解一下</div>
            <div class="it_p2">深入了解一下深入了解一下,深入了解一下深入了解一下</div>
          </div>
        </div>
      </div>
    </div>
    <div class="part3">
      <div class="part3_flex">
        <div class="title">
          <span>资 讯</span>
        </div>
        <div class="p3_nav">
          <div class="item active">资讯分类1</div>
          <div class="item">资讯分类2</div>
          <div class="item">资讯分类3</div>
          <div class="item">资讯分类4</div>
        </div>
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
      dialogVisible:false
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
.about {
  .header_l {
    background-color: #464646;
    .h_content {
      width: 84%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      .down_load {
        display: inline-flex;
        justify-content: center;
        flex-direction: column;
        span {
          background-color: #f00;
          padding: 2px 20px;
          color: #fff;
          border-radius: 20px;
          cursor: pointer;
        }
      }
    }
  }
  .about_body {
    width: 84%;
    margin: 0 auto;
    .img_box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        width: 48%;
        padding: 40px 0 0;
        img {
          width: 100%;
        }
        p {
          padding: 10px 0;
        }
      }
    }
    .pinglun {
      padding-top: 30px;
      .ping_title {
        font-size: 16px;
        color: #f00;
        font-weight: bold;
        padding-bottom: 10px;
      }
      .item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0 16px;
        .it_l {
          width: 60px;
          img {
            width: 100%;
          }
        }
        .it_r {
          flex: 1;
          display: inline-flex;
          flex-direction: column;
          justify-content: space-around;
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
          padding-left: 6px;
          .it_p1 {
            font-size: 16px;
            font-weight: bold;
          }
          .it_p2 {
            font-size: 14px;
          }
        }
      }
    }
  }
}
.part3 {
  .part3_flex {
    display: flex;
    padding-top: 2%;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    border-bottom: 2px solid #ccc;
    .title {
      font-weight: bold;
      text-align: center;
      padding-bottom: 0px;
      width: 52px;
      position: relative;
      top: 2px;
      span {
        display: inline-block;
        padding-bottom: 10px;
        border-bottom: 2px solid #f00;
        font-size: 22px;
      }
    }
    .p3_nav {
      display: inline-flex;
      justify-content: space-between;
      width: 50%;
      padding: 0;
      position: relative;
      top: 2px;
      .item {
        display: inline-flex;
        border-bottom: 2px solid transparent;
        padding-bottom: 6px;
        &.active {
          border-bottom: 2px solid #f00;
          color: #f00;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) and (min-width: 376px) {
  .about {
    .about_body {
      width: 94%;
      .img_box {
        .item {
          width: 48%;
          padding: 16px 0 0;
          img {
            width: 100%;
          }
          p {
            padding: 10px 0;
          }
        }
      }
      .pinglun {
        padding-top: 16px;
        .item {
          .it_r {
            flex: 1;
            display: inline-flex;
            flex-direction: column;
            justify-content: space-around;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            padding-left: 6px;
            .it_p1 {
              font-size: 14px;
              font-weight: bold;
            }
            .it_p2 {
              font-size: 12px;
            }
          }
        }
      }
    }
    .part3 {
      padding-top: 2%;
      width: 94%;
      margin: 0 auto;
      .part3_flex {
        display: block;
        .title {
          font-weight: bold;
          text-align: center;
          padding-bottom: 20px;
          width: 100%;
          span {
            display: inline-block;
            padding-bottom: 10px;
            border-bottom: 2px solid #f00;
            font-size: 22px;
          }
        }
        .p3_nav {
          display: flex;
          padding: 0;
          justify-content: space-between;
          width: 100%;
          .item {
            display: inline-flex;
            border-bottom: 2px solid transparent;
            padding-bottom: 6px;
            flex:1;
            &.active {
              border-bottom: 2px solid #f00;
              color: #f00;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 376px) {
  .about {
    .about_body {
      width: 94%;
      .img_box {
        .item {
          width: 48%;
          padding: 16px 0 0;
          img {
            width: 100%;
          }
          p {
            padding: 4px 0;
          }
        }
      }
      .pinglun {
        padding-top: 16px;
        .item {
          .it_r {
            flex: 1;
            display: inline-flex;
            flex-direction: column;
            justify-content: space-around;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            padding-left: 6px;
            .it_p1 {
              font-size: 14px;
              font-weight: bold;
            }
            .it_p2 {
              font-size: 12px;
            }
          }
        }
      }
    }
    .part3 {
      padding-top: 2%;
      width: 94%;
      margin: 0 auto;
      .part3_flex {
        display: block;
        .title {
          font-weight: bold;
          text-align: center;
          padding-bottom: 20px;
          width: 100%;
          span {
            display: inline-block;
            padding-bottom: 10px;
            border-bottom: 2px solid #f00;
            font-size: 22px;
          }
        }
        .p3_nav {
          display: flex;
          padding: 0 0;
          justify-content: space-between;
          width: 100%;
          .item {
            display: inline-flex;
            border-bottom: 2px solid transparent;
            padding-bottom: 6px;
            flex:1;
            &.active {
              border-bottom: 2px solid #f00;
              color: #f00;
            }
          }
        }
      }
    }
  }
}
</style>
