<template>
    <div class="wrap">
        <div class="box">
            <div class="top clearfix">
                <div class="login">
                    <i>已有账号？</i>
                    <span @click="$router.push({name:'Login'})">登录</span>
                </div>
            </div>
            <div class="getBackPassword">
                <span>密码找回</span>
                <i></i>
            </div>
            <div class="content">
                <input type="text" placeholder="请输入电话号码">
                <div class="dongtai">
                    <input type="text" placeholder="请输入验证码">
                    <span @click="getTime" v-if="active">获取动态密码</span>
                    <span v-else>{{time}}S后重新获取</span>
                </div>
                <input type="password" placeholder="请重新输入新密码">
                <input type="password" placeholder="确认密码">
            </div>
            <div class="button" @click="$router.push({name:'Login'})">
                <span>提交</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GetBackPassword",
        data(){
            return{
                time:60,
                active:true,
                nowActive:"获取动态密码"
            }
        },
        methods:{
            getTime(){
                this.active=!this.active;
                let timer=setInterval(()=>{
                    this.time--;
                    if(this.time==0){
                        this.active=!this.active;
                        this.nowActive='重新获取';
                        this.time=60;
                        clearInterval(timer);
                    }
                },1000)
            }
        }
    }
</script>

<style scoped>
    .wrap{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color:#ccc;
    }
    .box{
        width:1000px;
        height:600px;
        margin:5% auto 0;
        text-align:center;
        background-color: #fff;
    }
    .top{
        width:100%;
    }
    .login{
        float:right;
        font-size:16px;
        line-height:40px;
    }
    .login span{
        padding:5px 20px;
        border:1px solid #ccc;
        margin:0 10px;
        border-radius:5px;
        cursor:pointer;
        background-color: #fff;
        -webkit-box-shadow:1px 1px 15px 0 #ccc;
        -moz-box-shadow:1px 1px 15px 0 #ccc;
        box-shadow:1px 1px 15px 0 #ccc;
    }
    .login span:hover{
        background-color: #f80;
        color:#fff;
    }
    .getBackPassword{
        font-size:20px;
        line-height:60px;
        background-color: #2dbb55;
        color:#fff;
        text-align:center;
        position:relative;
    }
    .getBackPassword i{
        position:absolute;
        bottom: -30px;
        left: 50%;
        border-top: 25px solid #2dbb55;
        border-left: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-right: 15px solid transparent;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    .content{
        width:300px;
        margin:40px auto 0;
    }
    .content input{
        width:100%;
        margin-top:20px;
        height:40px;
        border-radius:10px;
        text-align:center;
    }
    .dongtai input{
        width:60%;
    }
    .dongtai span{
        display: inline-block;
        width:40%;
        line-height:40px;
        border:1px solid #ccc;
        border-radius:10px;
        color:#6c6c6c;
        cursor:pointer;
        background-color:#fff;
        -webkit-box-shadow:1px 1px 15px 0 #ccc;
        -moz-box-shadow:1px 1px 15px 0 #ccc;
        box-shadow:1px 1px 15px 0 #ccc;
    }
    .dongtai span:hover{
        background-color: #f80;
        color:#fff;
    }
    .button{
        width:300px;
        margin:20px auto 0;
        line-height:40px;
        font-size:18px;
        background-color: #f80;
        border-radius:10px;
        cursor:pointer;
    }
</style>
