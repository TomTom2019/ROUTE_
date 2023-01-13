import { useParams,useLocation } from "react-router-dom";


const PostItem = () => {
  let params = useParams()
  let location = useLocation()

  console.log(params)
  console.log(useLocation)




    return (
        <>
            Post ID
        </>
    )
}

export default PostItem;