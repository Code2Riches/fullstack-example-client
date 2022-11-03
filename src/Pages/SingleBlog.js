import { useEffect, useState } from "react"

/* 
Instead of a text input handler that we need to copy/paste the blog id into, create an option/select dropdown that will have all of the id's of our blogs as options. And when the select onChange event is triggered, we want to fetch the blog that the user selected. I.E. Create a dropdown menu of blog id's and then when the user selects particular blog id in the dropdown, that blog should display to the page in <SingleBlog/>.

*/
const SingleBlog = (props) => {
	const {urlEndpoint} = props
	const [singleBlog, setSingleBlog] = useState({})
	const [id, setId] = useState("4a571289-6d5c-4300-9614-53c6e1237d81")

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
		<div>
			Single Blog
			<p>{singleBlog.title}</p>
			<p>{singleBlog.id}</p>
			<p>{singleBlog.text}</p>
			<input type="text" onChange={(e)=>{
				setId(e.target.value)
			}}/>
			<hr/>
		</div>
	)
}

export default SingleBlog