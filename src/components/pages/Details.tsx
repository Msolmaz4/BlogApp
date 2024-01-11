import { useParams } from "react-router-dom";
import { useGetAllBlogsQuery } from "../../redux/blogs";

import { MdOutlineComment } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useGetcommentsMutation } from "../../redux/comments";


const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [text, setText] = useState(false);
  const authToken = localStorage.getItem("authToken");

  const { data } = useGetAllBlogsQuery("");
  console.log(data?.data, "details");
  const sonuc = data?.data?.filter((item) => item._id === id);
  const [inp, setInp] = useState("");
const [getcomments,{ isLoading, isError, isSuccess, data: commentsData }] = useGetcommentsMutation()


  const verme = async() => {
   
  try {
      const res=  await  getcomments(authToken)
     console.log(res,"ttttttttttt")
    setInp("");
    setText(false);
  } catch (error) {
    console.log(error,"getcommmmmmmmm")
  }
 
  };
  return (
    <div>
      <Navbar/>
      {sonuc.map((item) => (
        <div className="border-4 border-indigo-500/100">
          <p>{item.title}</p>
          <div className=" h-[260px] w-[400px]">
            <img src={item.image} alt="" />
          </div>
          <div className="text-xm">{item.content}</div>
          <div className="mt-6 gap-2 justify-between flex">
            <div className="flex gap-4 ">
              <div>
                {sonuc[0]?.likes?.length >= 1 ? (
                  <div className="flex">
                    {" "}
                    <FaHeart className="" size={24} />
                    <p>{sonuc[0]?.likes?.length}</p>
                  </div>
                ) : (
                  <CiHeart size={24} />
                )}
              </div>

              <FaEye size={24} />
              <p>{sonuc[0]?.countOfVisitors}</p>
              <MdOutlineComment size={24} onClick={() => setText(!text)} />
              <p>{sonuc[0]?.comments.length}</p>
            </div>
          </div>
          <div className="flex justify-center items-center   ">
            {text && (
              <div>
                <textarea
                  value={inp}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  style={{ height: "150px", width: "400px", resize: "none" }}
                  className="border-indigo-500/100 border-4 "
                  onChange={(e) => setInp(e.target.value)}
                ></textarea>
                <div>
                  <button onClick={() => verme()}>Ekle</button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
