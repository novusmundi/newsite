import axios from 'axios'
const API = 'https://api.flotiq.com/api/v1/content/blogpost'
const generalConfig = {
    headers: {'X-AUTH-TOKEN': '4d95f8fffaa7e515a768ea3779242c66'}

}
function getPostList(page){
    return new Promise(async (resolve,reject) => {
        const config = {
            ...generalConfig,
            params:{
                page:page,
                limit:20,
                order_by:"internal.createdAt",
                order_direction:"asc"
            }
        }
        const response = await axios.get(API,config).catch((err) => {
            console.log(err);
            reject(err)
        });
        if(response && response.data) resolve(response.data);
    })
}

function getSinglePost(postId){
    return new Promise(async (resolve,reject) => {
        const config = {
            ...generalConfig

        }
        const url = `${API}/${postId}?hydrate=1`
        console.log(url)
        const response = await axios.get(API + "/" + postId,config).catch((err) => {
            console.log(err);
            reject(err)
        });
        if(response && response.data) resolve(response.data);
    })
}


export {
    getPostList,
    getSinglePost
}

