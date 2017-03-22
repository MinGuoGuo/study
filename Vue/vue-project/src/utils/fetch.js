import 'whatwg-fetch';

let Request = (url, data) => {
	// let param = {
 //        method: 'POST',
 //        headers: { 'Content-Type': 'text/plain' },
 //        body: JSON.stringify(data)
 //    };
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(data)
    })
    // .then( (response) => {
    //     return response.json()
    // })
    // .then((result)=>  {
    //     alert('删除成功！');
    //     this.getList(this.currentPage);
    // })
    // .catch((error) => {
    //     alert('删除失败')
    // });
}
export default Request;