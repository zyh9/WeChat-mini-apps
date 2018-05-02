import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        navigationBarTitleText: '我的小店',
        //上方导航栏颜色
        // navigationBarBackgroundColor:'#f00',
    }
}
