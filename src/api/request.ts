import axios from "axios";
import {IDataType} from './common';


console.log(import.meta.env)
const $http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

// 请求拦截
// axios.interceptors.request.use(config=>{

// })

// 响应拦截
// axios.interceptors.response.use(response=>{
// })
interface PostData {
  url: string;
  data?: any;
  params?: object
}

const $post = async <T>(postda: PostData) => {
  const res = await $http.post<T>(postda.url, postda.data)
  return res.data
}
const $get = async <T>(postda: PostData) => {
  const res = await $http.get<T>(postda.url, {params: postda.params})
  return res.data
}
export {
  $post,
  $get
}
export default $http




