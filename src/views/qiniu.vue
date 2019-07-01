<template>
    <div>
        <p>本地音视频轨</p>
        <div id="remotetracks" style="width: 640px;"></div>
        <button @click="joinRoom()">加入房间</button>
        <audio src="" id="ad"></audio>
        <!-- 这里引入我们的 SDK -->
    </div>
</template>

<script>
    // import { TrackModeSession, deviceManager, version} from "pili-rtc-web";
    import * as QNRTC from "pili-rtc-web";
    export default {

        name: "qiniu",
        data(){
            return{
                myRoom:{}
            }
        },
        created(){
            let myRoom=new QNRTC.TrackModeSession();
            this.myRoom=myRoom.joinRoomWithToken('n83SJEyVTcxTlDas9qO3WR-68ew3AXwhudltt0gy:6u0N5klk2OQMa4_L7Mkk-Q6dddc=:eyJhcHBJZCI6ImU5djY3dmk1dyIsInJvb21OYW1lIjoiZnd5MTMiLCJ1c2VySWQiOiI4ODgiLCJleHBpcmVBdCI6MTU2MjAzMjUxMiwicGVybWlzc2lvbiI6InVzZXIifQ==');

            console.log(this.myRoom,9999988888)
        },
        methods: {
             joinRoom() {
                // 初始化一个房间 Session 对象, 这里使用 Track 模式
                const myRoom = new QNRTC.TrackModeSession();
                // 这里替换成刚刚生成的 RoomToken
                 myRoom.joinRoomWithToken('n83SJEyVTcxTlDas9qO3WR-68ew3AXwhudltt0gy:6u0N5klk2OQMa4_L7Mkk-Q6dddc=:eyJhcHBJZCI6ImU5djY3dmk1dyIsInJvb21OYW1lIjoiZnd5MTMiLCJ1c2VySWQiOiI4ODgiLCJleHBpcmVBdCI6MTU2MjAzMjUxMiwicGVybWlzc2lvbiI6InVzZXIifQ==');
                console.log("joinRoom success!");
                 this.autoSubscribe(myRoom);

            },
            async subscribe(myRoom, trackInfoList) {
                // 通过传入 trackId 调用订阅方法发起订阅，成功会返回相应的 Track 对象，也就是远端的 Track 列表了
                const remoteTracks =await myRoom.subscribe(trackInfoList.map(info => info.trackId));

                // 选择页面上的一个元素作为父元素，播放远端的音视频轨
                const remoteElement = document.getElementById("localtracks");
                // 遍历返回的远端 Track，调用 play 方法完成在页面上的播放
                for (const remoteTrack of remoteTracks) {
                    remoteTrack.play(remoteElement);
                }
            },
            autoSubscribe(myRoom) {
                const trackInfoList = myRoom.trackInfoList;
                console.log("room current trackInfo list", trackInfoList);

                // 调用我们刚刚编写的 subscribe 方法
                // 注意这里我们没有使用 async/await，而是使用了 Promise，大家可以思考一下为什么
                this.subscribe(myRoom, trackInfoList)
                    .then(() => console.log("subscribe success!"))
                    .catch(e => console.error("subscribe error", e));

                // 添加事件监听，当房间中出现新的 Track 时就会触发，参数是 trackInfo 列表
                myRoom.on("track-add", (trackInfoList) => {
                    console.log("get track-add event!", trackInfoList);
                    this.subscribe(myRoom, trackInfoList)
                        .then(() => console.log("subscribe success!"))
                        .catch(e => console.error("subscribe error", e));
                });
                // 就是这样，就像监听 DOM 事件一样通过 on 方法监听相应的事件并给出处理函数即可
            }


        }
    }
</script>

<style scoped>
    audio {
        visibility: hidden;
    }

    /* video 元素 */
    video {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .qnrtc-stream-player {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .fullscreen-player {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
    }
    .mini-player {
        width: 300px;
        height: 200px;
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: #000;
        z-index: 10;
    }
</style>
