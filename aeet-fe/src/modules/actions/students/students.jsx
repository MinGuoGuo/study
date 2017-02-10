import urlConfig from '../../api';
import fetch from 'whatwg-fetch';

export const getList = () => {
    fetch(urlConfig.list, {
            method: 'POST',
            headers: {'Content-Type': 'text/plain'},
            body: JSON.stringify({page: this.state.pageNo, pagesize: 5, name: this.state.name, age: this.state.age})
        }).then( (response) => {
                return response.json();
            }).then((result)=>  {
                this.setState({
                    data: result.list,
                    count: result.count,
                    loading: false
                });
        }).catch((error) => {
            alert('请求失败！')
        })
}
