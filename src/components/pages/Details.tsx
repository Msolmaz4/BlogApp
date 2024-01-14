import { useParams } from "react-router-dom";
import { useGetAllBlogMutation, useGetAllBlogsQuery } from "../../redux/blogs";

import { MdOutlineComment } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import {
  useGetcommentsMutation,
  usePostcommentMutation,
} from "../../redux/comments";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [text, setText] = useState(false);
  const authToken = localStorage.getItem("authToken");

  const { data,refetch  } = useGetAllBlogsQuery("");
  console.log(data?.data, "details");
  const sonuc = data?.data?.filter((item) => item._id === id);
  console.log(sonuc[0]?.comments, "dddddddddddd");

  const [inp, setInp] = useState("");
  const [getcomments, { data: commentsData }] = useGetcommentsMutation();
  const [postcomment] = usePostcommentMutation();
  const [getAllBlog] = useGetAllBlogMutation();
  const [comme, setCommen] = useState("");

  const verme = async () => {
    try {
      if (inp.length > 1) {
        const res = await getcomments(authToken);
        console.log(commentsData, "alladata");
        console.log(res?.data?.data, "ttttttttttt");
        const response = await postcomment({
          token: authToken,
          blogId: id,
          comment: inp,
        });
        console.log(response, "'''eee");
        refetch();
      }

      setText(false);
      setInp("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const erst = async () => {
      const fikir = await getAllBlog({ authToken, id });
      console.log(fikir?.data?.data?.comments, "errrrrrrrrrrrrrrrrrrrrrrrrrr");
      setCommen(fikir?.data?.data?.comments);
    };
    erst();
  }, [sonuc[0]?.comments]);

  return (
    <div>
      <Navbar />
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
                <div className=" flex justify-center mt-[-9px]">
                  <button onClick={() => verme()}  className="px-6 py-3 text-white duration-100 bg-indigo-600 rounded-lg shadow-md focus:shadow-none ring-offset-2 ring-indigo-600 focus:ring-2 mt-6">Add</button>
                </div>
              </div>
            )}
          </div>
          <div> 
            
            {text && (
              <div>
                <p className="flex justify-center text-2xl">Comment</p>
                {comme?.map((item) => (
                  <div className="border-1 border-indigo-500/100 mb-5 h-12 items-center flex ">{item.comment}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
