/* eslint-disable */
import React,{useState, useEffect} from 'react'
import {getSinglePost} from '../requests/blog/blog.js'
import {useParams} from 'react-router-dom'
import PostComp from '../components/blog/PostComp'
import Layout from '../components/general/Layout'
export default function Post(props){
    const {id}  = useParams()
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);    
    async function loadContent(){
      const _data  = await getSinglePost(id).catch((err) => {
        setError(true)
      })
      if(_data){
        console.log(_data)
        setData(_data)
      }
    }

    useEffect(() => {
      setError(false)
    },[props])

    useEffect(() => {
             // eslint-disable-next-line
      loadContent()
    // eslint-disable-next-line
    },[id])
    return(
      <Layout>
      {
        error?(
          <div>
            <h1>ERROR</h1>
          </div>
        ):data?(
          <div>
            <PostComp {...data} />
          </div>
        ):null
      }
      </Layout>
      
    )
}
