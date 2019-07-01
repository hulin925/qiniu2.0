<template>
    <div class="wrap">
        <div class="loginWrap">
            <div class="top">
                <a href="javascript:;" class="active">账户登录</a>
                <a href="javascript:;">扫码登录</a>
            </div>
            <div class="bottom">
                <div class="Input" v-if="action">
                    <div class="everyInput">
                        <i><img src="../assets/img/zhanghao.png" alt=""></i>
                        <input type="text" placeholder="账号">
                    </div>
                    <div class="everyInput">
                        <i><img src="../assets/img/denglumima.png" alt=""></i>
                        <input type="password" placeholder="密码">
                    </div>
                </div>
                <div class="Input Input1" v-else>
                    <div class="everyInput">
                        <i><img src="../assets/img/zhanghao.png" alt=""></i>
                        <input type="text" placeholder="请输入电话号码">
                    </div>
                    <div class="everyInput">
                        <i><img src="../assets/img/denglumima.png" alt=""></i>
                        <input type="password" placeholder="动态密码" class="short">
                        <span @click="timer" v-if="timeAction">{{password}}</span>
                        <span v-else>{{time}}S后重新获取</span>
                    </div>
                </div>
                <div class="Info clearfix">
                    <a href="javascript:;" @click="register">点击前往注册</a>
                    <a href="javascript:;">未拥有此账号？</a>
                </div>
                <div class="loginButton" @click="home">
                    <div>登录</div>
                </div>
                <div class="actions">
                    <a href="javascript:;" @click="$router.push({name:'getBackPassword'})">忘记密码？</a>
                    <a href="javascript:;" @click="actionClick" v-if="action">手机动态码登录？</a>
                    <a href="javascript:;" @click="actionClick" v-else>账号登录</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Login',
        data(){
            return{
                action:true,
                time:60,
                timeAction:true,
                password:'获取动态密码'
            }
        },
        methods:{
            register(){
                let Register=this.$router.resolve({
                    name:'Register'
                });
                window.open(Register.href,'_blank');
                // const {href}=this.$router.resolve({
                //     name:'Register'
                // });
                // window.open(href,'_blank');
            },
            home(){
                this.$router.push({name:'Home'});
            },
            actionClick(){
                this.action=!this.action;
            },
            timer(){
                this.timeAction=!this.timeAction;
                let timer=setInterval(()=>{
                    this.time--;
                    if(this.time==0){
                        this.timeAction=true;
                        this.password='重新获取';
                        clearInterval(timer);//关闭定时器
                        this.time=60;
                    }
                },1000)
            }
        }
    }
</script>

<style lang="less" scoped>

    .wrap{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: #cccc;
        overflow:hidden;
    }
    .loginWrap{
        width:400px;
        height:300px;
        border:1px solid #ddd;
        background-color: #fff;
        margin:15% auto 0;
    }
    .loginWrap .top{
        padding:10px 0;
        font-size:18px;
        display:flex;
        justify-content:space-around;
        border-bottom:1px solid #ddd;
    }
    .top a:first-child{
        border-right:1px solid #ccc;
    }
    .top a{
        color:#ccc;
        width:50%;
        text-align:center;
        line-height: 25px;
    }
    .loginWrap .active{
        color:#4bc233;
    }
    .bottom{
        padding:20px 40px 0;
    }
    .bottom img{
        width:20px;
    }
    .everyInput{
        position:relative;
    }
    .everyInput i{
        position:absolute;
        top:28px;
        left:10px;
    }
    .bottom input{
        width:100%;
        height:40px;
        border-radius:8px;
        margin-top:20px;
        padding-left:40px;
        font-size:14px;
    }
    .Info a{
        float:right;
        line-height:35px;
    }
    .Info a:first-child{
        color:#f80;
    }
    .loginButton div{
        width:100%;
        background-color: #f80;
        text-align:center;
        line-height:40px;
        font-size:18px;
        border-radius:8px;
        cursor: pointer;
    }
    .actions{
        margin-top:15px;
        display:flex;
        justify-content:space-between;
    }
    .actions a{
        color:#adadad;
    }
    .actions a:first-child:hover{
        color:#f80;
    }
    .actions a:hover{
        color:#4bc233;
    }
    .Input1 .short{
        width:200px;
    }
    .Input1 span{
        display: inline-block;
        text-align:center;
        line-height:40px;
        width:115px;
        border:1px solid #ccc;
        border-radius:8px;
        background-color: #fff;
        color:#555;
        cursor:pointer;
        -webkit-box-shadow:1px 1px 15px 0 #ccc;
        -moz-box-shadow: 1px 1px 15px 0 #ccc;
        box-shadow: 1px 1px 15px 0 #ccc;
    }
    .Input1 span:hover{
        background-color:#f80;
        color:#fff;
    }

</style>
