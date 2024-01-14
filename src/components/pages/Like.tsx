import { CiHeart, CiVolumeHigh } from "react-icons/ci";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
import { useDislikeBlogMutation, useGetAllBlogsQuery, useLikeBlogMutation } from "../../redux/blogs";
import { useEffect, useState } from "react";

const Like = ({ setVeri, item }) => {
   // console.log(item._id,'likdeki')
   // console.log(veri,"likadiy")
  const [dol, setDol] = useState(false);
  const [likeBlog,{data}] = useLikeBlogMutation();
  const [dislikeApi] = useDislikeBlogMutation();
  const authToken = localStorage.getItem("authToken");
  const {refetch  } = useGetAllBlogsQuery("");

  useEffect(()=>{
const gun = async()=>{
  await refetch()
}
gun()
  },[dol])

  
  return (
    <div>
      <div className="flex gap-2">
        <div 
          onClick={() => authToken ?
            setVeri((deger) =>
              deger.map((son) => {
                if (son._id === item._id) {
                  setDol(!dol);
                  //console.log(dol, "dolllllll");
                  dol
                    ? dislikeApi({ id: item._id, token: authToken })
                    : likeBlog({ id: item._id, token: authToken });

                    
                  return {
                    ...son,
                    hear: !son.hear,
                  };
                }
                return son;
              })
            ) : toast("login musss")
          }
        >
         
    {data?.didUserLike ? <FaHeart size={24}/> : <CiHeart size={24}/>}
        </div>
        
      </div>

    </div>
  );
};

export default Like;
  //   item.hear ? (
        //     <div className="border-2 border-sky-500">
        //       <FaHeart size={24} />
        //       <p>{item?.likes.length}</p>
        //     </div>
        //   ) : (
        //     <div className="border-2 border-sky-500">
        //       <CiHeart size={24} /> {item?.likes.length}
        //     </div>
        //   )