import { useState, useEffect } from "react";
 
const UpdateBlogForm = (props) => {

    const {urlEndpoint, blogs} = props

    const [id, setId] = useState("")
    const [blogToUpdate, setBlogToUpdate] = useState({}) 

    useEffect(() => {
      const fetchBlogToUpdate = async () => {
          const result = await fetch(`${urlEndpoint}/blogs/get-one/${id}`)
          const fetchedBlogToUpdate = await result.json()
          setBlogToUpdate(fetchedBlogToUpdate.blog)
        }
      fetchBlogToUpdate()
    }, [id])

    const handleUpdateBlog = async () => {
        const response = await fetch(`${urlEndpoint}/blogs/update-one/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...blogToUpdate }),
        }) 
    }
    

    // const [title, setTitle] = useState("")
    // const [text, setText] = useState("")
    // const [author, setAuthor] = useState("")
    // const [category, setCategory] = useState("")
    // const [categories, setCategories] = useState([])
    // const [successMessage, setSuccessMessage] = useState("")

    // const handlePostBlog = async () => {
    //     setSuccessMessage("")
    //     const response = await fetch(`${urlEndpoint}/blogs/create-one`, {
    //         method: "POST",
    //         body: JSON.stringify({
    //             title,
    //             text,
    //             author,
    //             categories
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     if (response.ok !== true) {
    //         setSuccessMessage("There was a network problem creating the blog")
    //         return;
    //     }
    //     const payload = await response.json()
    //     if (payload.success !== true) {
    //         setSuccessMessage(`There was a server problem creating the blog. Error: ${payload.error}`)
    //         return;
    //     }
    //     setSuccessMessage("Successfully created the blog")
    // }

    return (
        <div>
        <h1>Update Blog Form</h1>
        <label>Title </label>
        <input value={blogToUpdate.title} type="text" onChange={(e)=>{
            // setTitle(e.target.value)
            const blogToUpdateCopy = {
                ...blogToUpdate,
                title: e.target.value
            }
            setBlogToUpdate(blogToUpdateCopy)
        }}/>
        <br/>
        <label>Author </label>
        <input value={blogToUpdate.author} type="text" onChange={(e)=>{
            // setAuthor(e.target.value)
            const blogToUpdateCopy = {
                ...blogToUpdate,
                author: e.target.value
            }
            setBlogToUpdate(blogToUpdateCopy)
        }}/>
        <br/>
        <label>Text </label>
        <textarea value={blogToUpdate.text} onChange={(e)=>{
            // setText(e.target.value)
            const blogToUpdateCopy = {
                ...blogToUpdate,
                text: e.target.value
            }
            setBlogToUpdate(blogToUpdateCopy)
        }}/>

        <br/>
        {/* <label>Category </label>
        <input type="text" onChange={(e)=>{
            setCategory(e.target.value)
        }}/>
        <button onClick={()=>{
            const newCategories = [...categories, category]
            setCategories(newCategories)
        }}>Add Category</button> */}

        <br/>
        <button onClick={()=>{
            handleUpdateBlog()
        }}>Update Blog</button>
        <br/>
        <select value={id}onChange={(e)=>{
				setId(e.target.value)
			}}>
				<option></option>
				{blogs.map((blog, index)=>{
					return <option key={index}>{blog.id}</option>
				})}
		</select>
        <hr/>
        </div>
    )
}

export default UpdateBlogForm