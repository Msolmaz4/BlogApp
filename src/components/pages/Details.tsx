import { useParams } from "react-router-dom"


const Details = () => {

  const {id} = useParams()
  console.log(id)
  return (
    <div>Details


      {id}
    </div>
  )
}

export default Details