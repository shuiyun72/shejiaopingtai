<template>
  <div class="detail">
    <el-dialog title="点击查看" :visible.sync="dialogVisible" width="90%" class="icon_caidan_dia">
      <div class="dia_body">
        <router-link tag="div" class="item" :to="{path:'/'}">首页</router-link>
        <router-link tag="div" class="item " :to="{path:'/list'}">资讯分类1</router-link>
        <router-link tag="div" class="item active" :to="{path:'/detail'}">资讯分类2</router-link>
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
        <!-- <div class="down_load">
          <span>点击下载</span>
        </div> -->
        <div class="pc_dia_body">
          <div class="pc_dia">
            <router-link tag="div" class="item" :to="{path:'/'}">首页</router-link>
            <router-link tag="div" class="item " :to="{path:'/list'}">资讯分类1</router-link>
            <router-link tag="div" class="item active" :to="{path:'/detail'}">资讯分类2</router-link>
            <router-link tag="div" class="item" :to="{path:'/about'}">资讯分类3</router-link>
            <div class="item">资讯分类4</div>
            <div class="item">资讯分类5</div>
            <div class="item">资讯分类6</div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail_body">
      <div class="left_detail">
        <div class="title">软文广告软文广告软文广告软文广告软文广告软文广告软文广告</div>
        <div class="fenxiang">
          <div class="date">2019-09-20</div>
          <div class="zan">
            <span class="iconfont icon-yulan"></span>
            <span class="t_num">2130</span>
            <span class="iconfont icon-xing"></span>
            <span class="t_num">213</span>
            <span class="iconfont icon-dianzan"></span>
            <span class="t_num">213</span>
          </div>
        </div>
        <p class="p">软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文</p>
        <p class="p">软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文</p>
        <p class="p">软文广告软文广告软 ( 软文广告软 )</p>
        <p class="p">软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文</p>
        <p class="p">软文广告软文广告软文</p>
        <p class="p">软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文</p>
        <p class="p">1.软文广告软文</p>
        <p class="p">软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文</p>
        <p class="p">2.软文广告软文</p>
        <p class="p">软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文</p>
        <p class="p">3.软文广告软文</p>
        <p class="p">软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文</p>
        <p class="p">软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文</p>
        <p class="p">⊙文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文软文广告软文广告软文广告软文广告软文</p>
        <div class="info">
          <p>文广告软文广告软文广告软文</p>
          <p>文广告软文广告软文广告软文</p>
        </div>
        <div class="page">
          <div class="pre">
            <span class="iconfont icon-jiantouarrowhead7"></span> 上一篇 : 软文广告软文广告软文
          </div>
          <div class="next">
            下一篇 : 软文广软文广告软文广告告软文
            <span class="iconfont icon-jiantouyou"></span>
          </div>
        </div>
        <div class="part_d_p2">
          <div class="p2_title">相关文章推荐</div>
          <ul class="part_d_p2_ul">
            <li>软文广软文广告软文广告告软文软文广告告软</li>
            <li>软文广软文广告</li>
            <li>软文广软文</li>
            <li>软文广软文广告软文广告告软文</li>
            <li>软文广软文广告软文广告告软文软文广告告软</li>
            <li>软文广软文广告软文广告告软文</li>
            <li>软文广软文广告软文广告告软文</li>
          </ul>
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
      <div class="t1_p1 " @click="toTop">
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
.detail {
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

  .detail_body {
    width: 84%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    .left_detail {
      width: 60%;
      .title {
        font-weight: bold;
        font-size: 18px;
        padding-bottom: 16px;
        border-bottom: 1px solid #ccc;
      }
      .fenxiang {
        display: flex;
        justify-content: space-between;
        color: #666;
        font-size: 12px;
        padding-top: 10px;
        .iconfont {
          margin: 0 4px 0 20px;
        }
      }
      .p {
        font-size: 14px;
        margin-top: 14px;
        color: #666;
      }
      .info {
        background-color: #eee;
        color: #999;
        padding: 4px 10px;
        font-size: 10px;
        margin: 40px 0 20px;
        p {
          line-height: 20px;
        }
      }
      .page {
        display: flex;
        justify-content: space-between;
        & > div {
          background-color: #eee;
          font-size: 12px;
          padding: 10px 20px;
          color: #999;
        }
        .iconfont {
          font-size: 12px;
        }
      }
      .part_d_p2 {
        .p2_title {
          font-weight: bold;
          font-size: 14px;
          border-bottom: 1px solid #ccc;
          margin: 40px 0 10px;
          padding-bottom: 6px;
        }
        .part_d_p2_ul {
          font-size: 12px;
          color: #999;
          padding-left: 16px;
          li {
            margin-bottom: 10px;
          }
        }
      }
    }
    .right_list {
      width: 32%;
      .title {
        .img {
          vertical-align: middle;
        }
        .text_l {
          margin-left: 20px;
          font-size: 20px;
          font-weight: bold;
        }
        border-bottom: 1px solid #999;
        padding-bottom: 6px;
        margin-bottom: 20px;
      }
      .list_ul {
        padding-left: 16px;
        li {
          color: #666;
          font-size: 20px;
          font-size: 14px;
          margin-bottom: 20px;
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) and (min-width: 376px) {
  .detail {
    .detail_body {
      width: 94%;
      display: block;
      .left_detail {
        width: 100%;
      }
      .right_list {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
@media screen and (max-width: 376px) {
  .detail {
    .detail_body {
      width: 94%;
      display: block;
      .left_detail {
        width: 100%;
      }
      .right_list {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
</style>
