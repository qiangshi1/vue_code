// 6. axios的封装用法
import axios from 'axios';
export function request1(config, success, failure) {
    const ins = axios.create({
        url: config.url,
    });
    ins.get(config.url).then(res => {
        // console.log(res);
        success(res.data);
    }).catch(res => {
        // console.log('failed: ' + res);
        failure(res.data);
    });
}



// export function request2(){

// }