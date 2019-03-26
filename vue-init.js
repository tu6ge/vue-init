/**
 * Created by ZHIYUAN on 2019/3/13.
 */

const instance = axios.create({
    timeout: 30000,
});

instance.interceptors.request.use(
    config => {
        if (config.method === 'post' || config.method === 'put') {
            config.data = Qs.stringify(config.data);
        }
        return config;
    },
);
const myaxios = {
    install:function(Vue,options){
        Vue.prototype.$reqPost = (url, data, config = {}) => instance.post(url, data, config);
        Vue.prototype.$reqGet = (url, params, config = {}) =>
            instance.get(url, {
                params,
                ...config
            });
    }
};
Vue.use(myaxios);