import {useState, useEffect} from "react";
import SingleBlog from "./Pages/SingleBlog";
import './App.css';

const urlEndpoint = "http://localhost:4000"

function App() {
  const [blogs, setBlogs] = useState([])
  const [id, setId] = useState("043328c9-1e49-42c1-ac88-8177eb548b81")
  const [blog, setBlog] = useState({})

  // This useEffect is for the "all" route. Its fetching the url, which is making a database request via http, waits for a promise. It comes back to await result.json() which we are setting to variable fetchedBlogs.
  useEffect(()=>{
    const fetchBlogs = async () => {
      const response = await fetch(`${urlEndpoint}/blogs/all`)
      const fetchedBlogs = await response.json()
      // console.log("fetchedBlogs" fetchedBlogs)
      setBlogs(fetchedBlogs.blog)
    }
    fetchBlogs()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <br></br>
      <SingleBlog urlEndpoint={urlEndpoint}
      blogs={blogs}/>
        {blogs.map((blog, index)=>{
          return (
            <div key={index}>
              <p>Title: {blog.title}</p>
              <p>ID: {blog.id}</p>
            </div>
          )
        })}
        {/* <input type="text" onChange={(e) => {setId(e.target.value)}}></input> */}
        <br></br>
      </header>
    </div>
  );
}

export default App;
