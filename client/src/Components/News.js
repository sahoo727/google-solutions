import React,{useState,useEffect} from 'react'
import Cards from './news/cards'
import db from '../firebase_db';


function News() {
  const [blogs,setBlogs]=useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [])


  const fetchBlogs=async()=>{
    const response=db.collection('News DB');
		const data = await response.get();
		data.docs.forEach(item=>{
			setBlogs([...blogs,item.data()])

			})

  }


  var doc_arr = [];
  var arr_length = 0;
  // db.collection('News DB').get().then(element => {arr_length = element.docs.length; console.log(arr_length)});
  return (
    <div>
		{
				blogs.map(blog=>{
          return(
            <div className="blog-container">
              <h4>{blog.Title}</h4>
              <p>{blog.Content}</p>
            </div>
          )
        })
        
		}
    </div>
  )
}

export default News

{/* <Cards/> */}
{/* {blog.title} */}