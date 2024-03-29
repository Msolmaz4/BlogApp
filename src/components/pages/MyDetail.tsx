import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useGetAllBlogMutation, useDeletBlogMutation, useGetAllBlogsQuery } from "../../redux/blogs";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdOutlineCommentBank } from "react-icons/md";
import UpdateModal from "./UpdateModal";
import { toast } from "react-toastify";

const MyDetail:React.FC<In> = ({ darkTheme, theme }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { state } = useLocation();
 
  
//  console.log(state.state, "useLocation");
  const [getAllBlog] = useGetAllBlogMutation("");
  const [delethApi] = useDeletBlogMutation();
  const authToken = localStorage.getItem("authToken");
  const {refetch  } = useGetAllBlogsQuery("");
  const [veri, setVeri] = useState([]);
  const [info, setInfo] = useState({
    id: "",
    token: "",
  });

    const dert = async () => {
      const dert = await getAllBlog({ id: state.state._id, token: authToken });
      setVeri(dert?.data);
      setInfo({ id: state.state._id, token: authToken });
    };

  useEffect(() => {
    dert();
  }, []);

  const control = () => {
    if (authToken) {
      handleShow();
    } else {
      toast("login muss");
    }
  };

  const delet = async () => {
    await delethApi(info);
    await  refetch();
    navigate("/");
  };

  const update = async()=>{
    await  refetch();
    dert()
    console.log(" byrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
  }
  return (
    <div>
      <Navbar darkTheme={darkTheme} theme={theme} />
      <div className="border-4 border-indigo-500/100">
        <p>{state.state.title}</p>
        <div className=" h-[260px] w-[400px]">
          <img src={state.state.image} alt="" />
        </div>
        <div className="text-xm">
          Update datum: {state.state.updatedAt.slice(0, 10)}
        </div>
        <div className="text-xm">{state.state.content}</div>
        <div className="mt-6 gap-2 justify-between flex">
          <div className="flex gap-4 "></div>
        </div>
        <div className="flex gap-3">
          <CiHeart size={24} />
          <FaEye size={24} />
          <MdOutlineCommentBank size={24} />{" "}
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button onClick={control}>update</button>
        <UpdateModal
          show={show}
          handleClose={handleClose}
           update = {update}
          state= {state?.state}
      
        />
        <button onClick={delet}>delete</button>
      </div>
    </div>
  );
};

export default MyDetail;
