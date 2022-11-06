import { useEffect, useState } from "react"

const SingleBlog = (props) => {
	const {urlEndpoint, blogs} = props
	const [singleBlog, setSingleBlog] = useState({})
	const [id, setId] = useState("dcc2102d-a20a-4765-8dc4-9079af4vsc96")

	useEffect(()=>{
		const fetchBlog = async () => {
			console.log("fetchBlog")
			const result = await fetch(`${urlEndpoint}/blogs/get-one/${id}`)
			const blogPayload = await result.json()
			console.log(blogPayload)
			setSingleBlog(blogPayload.blog)
		}
		fetchBlog()
	}, [id])

	console.log("ID outside of jsx ", id)

	return (
		<div className="single-blog">
			<h2>Single Blog</h2>
			<p className="single-title">Title: {singleBlog.title}</p>
			<p className="single-id">ID: {singleBlog.id}</p>
			<p className="single-text">{singleBlog.text}</p>
			<input value={id} type="text" onChange={(e)=>{
				setId(e.target.value)
			}}/>
			<br></br><br></br>
			<label for="blogs">Choose a Blog ID </label>
			<br></br>
			<select value={id}onChange={(e)=>{
				setId(e.target.value)
			}}>
				<option selected></option>
				{blogs.map((blog, index)=>{
					return <option key={index}>{blog.id}</option>
				})}
				{/* <option>Blog 1</option>
				<option>Blog 2</option>
				<option>Blog 3</option>
				<option>Blog 4</option> */}
			</select>
			<hr/>
		</div>
	)
}

export default SingleBlog