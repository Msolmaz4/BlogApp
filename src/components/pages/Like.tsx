
import { CiHeart } from "react-icons/ci";

import { FaHeart } from "react-icons/fa";
import { useDislikeBlogMutation, useLikeBlogMutation } from "../../redux/blogs";
import { useState } from "react";


const Like = ({setVeri ,item}) => {
    const [dol,setDol] = useState(false)
    const  [likeBlog] = useLikeBlogMutation()
    const [dislikeApi] = useDislikeBlogMutation()
    const authToken = localStorage.getItem("authToken");
  return (
    <div>

<div className="flex gap-4">
                      <div
                        //ben b urda sonradan farkettim  allt bir cart acsaydim bunu yazmamgerek kalmiyacakti

                        onClick={() =>
                          setVeri((deger) =>
                            deger.map((son) => {
                              if (son._id === item._id) {
                                  setDol(!dol)
                                  console.log(dol,"dolllllll")
                                  dol ? (dislikeApi({id:item._id,token:authToken})):(likeBlog({id:item._id,token:authToken}))
                                return {
                                  ...son,
                                  hear: !son.hear,
                                };
                              }
                              return son;
                            })
                          )
                        }
                      >
                        {item.hear ? (
                          <div className="border-2 border-sky-500"  >
                         
                            <FaHeart size={24}  />
                            <p>{item?.likes.length }</p>
                          </div>
                        ) : (
                          <div  className="border-2 border-sky-500">
                            <CiHeart size={24}  /> {item?.likes.length}
                          </div>
                        )}
                      </div> 

</div>
    </div>
  )
}

export default Like