webpackJsonp([5],{316:function(e,n,t){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function i(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function s(i,a){try{var o=n[i](a),r=o.value}catch(u){return void t(u)}return o.done?void e(r):Promise.resolve(r).then(function(e){return s("next",e)},function(e){return s("throw",e)})}return s("next")})}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(300),o=s(a),r=t(317),u=s(r),c=t(318),d=s(c);t(319);var v=t(320),l=o["default"].extend({template:u["default"],init:function(){},ready:function(){$.init()},data:function(){return d["default"]},methods:{loadList:function(){var e=this;return i(regeneratorRuntime.mark(function n(){var t,s,i,a,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.$route.params.keyword,n.next=4,(0,v.searchLiveRoom)(t,e.page);case 4:if(s=n.sent,s&&s.responseHeader&&0==s.responseHeader.status){for(i=s.response[3].docs,a=s.response[3].numFound,e.huyaList.total=a,o=0;o<i.length;o+=1)e.huyaList.items.push(i[o]);e.page+=1}n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),$.toast("请求虎牙直播失败");case 11:case"end":return n.stop()}},n,e,[[0,8]])}))()}},computed:{isLoadOver:function(){return this.huyaList.items.length>=parseInt(this.huyaList.total)}},route:{data:function(e){e.to.params.keyword;this.loadList()},deactivate:function(e){this.huyaList={items:[],total:0},this.page=1,e.next()}}});n["default"]=l},317:function(e,n){e.exports='<div class="content huya">\n\n    <div class="row" style="margin: 0;">\n        <div class="col-50 video-box"\n             @click="goRoute(\'/video?url=\'+encodeURIComponent(\'http://m.huya.com/\'+item.game_privateHost),this)"\n             v-for="item in huyaList.items"\n             transition="video-box"\n             stagger="200">\n            <span class="video-tag video-tag-online">直播</span>\n            <div class="video-img">\n                <img :src.once="item.game_screenshot">\n            </div>\n            <div class="video-title">\n               {{{item.game_roomName}}}\n            </div>\n            <div class="video-info">\n                <span class="video-nickname">{{item.game_nick.substr(0,14)}}</span>\n                <span class="video-number">{{item.game_total_count}}</span>\n                <span class="video-cate">{{item.gameName}}</span>\n            </div>\n        </div>\n\n        <div class="col-50 video-box" v-if="!isLoadOver"\n             @click="loadList()">\n            <div class="video-img"></div>\n            <div class="load-more">加载更多</div>\n            <div class="video-title">\n                &emsp;\n            </div>\n            <div class="video-info">\n                <span class="">&emsp;</span>\n                <span class="">&emsp;</span>\n                <span class="">&emsp;</span>\n            </div>\n        </div>\n        <div class="col-50 video-box" v-else>\n            <div class="video-img"></div>\n            <div class="load-more">没有更多了</div>\n            <div class="video-title">\n                &emsp;\n            </div>\n            <div class="video-info">\n                <span class="">&emsp;</span>\n                <span class="">&emsp;</span>\n                <span class="">&emsp;</span>\n            </div>\n        </div>\n    </div>\n\n</div>'},318:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={date:(new Date).Format("yyyy-MM-dd"),huyaList:{items:[],total:0},page:1};n["default"]=t},319:function(e,n){},320:function(e,n){"use strict";function t(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function s(i,a){try{var o=n[i](a),r=o.value}catch(u){return void t(u)}return o.done?void e(r):Promise.resolve(r).then(function(e){return s("next",e)},function(e){return s("throw",e)})}return s("next")})}}Object.defineProperty(n,"__esModule",{value:!0});n.searchLiveRoom=function(){var e=t(regeneratorRuntime.mark(function n(e,t){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(n,s){$.ajax({type:"GET",url:"/huya/"+e+"?page="+t,success:function(e){n(e)},error:function(e){s("请求失败")}})}));case 1:case"end":return n.stop()}},n,this)}));return function(n,t){return e.apply(this,arguments)}}()}});
//# sourceMappingURL=5.1be047eb.js.map