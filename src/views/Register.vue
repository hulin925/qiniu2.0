<template>
    <div class="wrap">
        <div class="register">
            <div class="top">
                <span>手机注册</span>
            </div>
            <div class="line">
                <div class="lineTop">
                    <span>√ </span>
                    <div></div>
                    <i>2</i>
                </div>
                <div class="lineBottom">
                    <div>设置密码</div>
                    <div>注册成功</div>
                </div>
            </div>
            <ul>
                <li class="clearfix">
                    <span>电话号码：</span>
                    <input type="text">
                </li>
                <li class="clearfix">
                    <span style="white-space:pre;">密       码：</span>
                    <input type="password">
                </li>
                <li class="clearfix">
                    <span>确认密码：</span>
                    <input type="password">
                </li>
                <li class="clearfix">
                    <span>验  证  码 ：</span>
                    <input type="text">
                    <i @click="getTime" v-if="active">{{nowActive}}</i>
                    <i v-else>{{time}}S后重新获取</i>
                </li>
            </ul>
            <div class="registerButton">
                <button @click="login">下一步</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return{
                active:true,
                time:60,
                nowActive:'获取动态验证码'
            }
        },
        methods:{
            login(){
                this.$router.push({name:'Login'});
            },
            getTime(){
                this.active=!this.active;
                let timer=setInterval(()=>{
                    this.time--;
                    if(this.time==0){
                        this.nowActive='重新获取';
                        this.active=!this.active;
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
        overflow: hidden;
    }
    .register{
        width:1000px;
        height:600px;
        background-color: #fff;
        margin:5% auto;
    }
    .top{
        text-align:center;
        background-color: #43b413;
        line-height:60px;
        font-size:24px;
        color:#fff;
    }
    .line{
        width:100%;
        padding:0 60px;
        margin-top:20px;
    }
    .lineTop{
        position:relative;
        padding:24px;
        text-align:center;
        line-height:20px;
        font-size:18px;
    }
    .lineTop span{
        position:absolute;
        left:0;
        top:12px;
        color:#43b413;
        width:25px;
        height:25px;
        border-radius:50%;
        border:2px solid #43b413;
    }
    .lineTop i{
        position:absolute;
        right:0;
        top:12px;
        width:25px;
        height:25px;
        border-radius:50%;
        border:2px solid #555;
    }
    .lineTop div{
        width:100%;
        border-bottom:2px solid #ccc;
    }
    .lineBottom{
        margin-left:-18px;
        width:104%;
        display:flex;
        font-size:16px;
        justify-content:space-between;
    }
    .lineBottom div:first-child{
        color:#43b413;
    }
    .register ul{
        width:500px;
        margin:100px auto 0;
        font-size:16px;
    }
    .register ul li{
        margin-top:10px;
    }
    .register li span{
        width:80px;
        float:left;
        line-height:30px;
    }
    .register li input{
        float:left;
        border:1px solid #ccc;
        height:30px;
        width:240px;
        border-radius:5px;
        padding:0 10px;
    }
    .register li i{
        float:left;
        border-radius:5px;
        background-color: orange;
        color:#fff;
        line-height:30px;
        padding:0 15px;
        margin-left:15px;
        cursor:pointer;
    }
    .registerButton{
        width:100px;
        margin:40px auto 0;
    }
    .registerButton button{
        width:100px;
        height:30px;
        cursor:pointer;
    }
</style>
