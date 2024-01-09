
import { useGetAllBlogsQuery } from "../../redux/blogs";
const HomeCarts = () => {

    const{data} = useGetAllBlogsQuery("");
    console.log(data)
  return (
    <div>HomeCarts</div>
  )
}

export default HomeCarts