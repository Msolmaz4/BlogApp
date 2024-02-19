import { useEffect, useState } from "react";
import { useGetAllBlogsQuery } from "../../redux/blogs";
import { MdOutlineComment } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import NewProduct from "./NewProduct";
import PageNav from "./PageNav";
import Like from "./Like";

interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  countOfVisitors: number;
  comments: string[];
}

interface BlogsResponse {
  data: Blog[];
  isLoading:boolean;
  
}


const HomeCarts = () => {
  const { data, isLoading } = useGetAllBlogsQuery("") as BlogsResponse;
  //console.log(data?.data)
  const ter = data?.data ? [...data.data].reverse() : [];
//console.log(ter)
  const [veri, setVeri] = useState([]);
  const [page, SetPage] = useState<number>(1);

  const [text, setText] = useState("");

  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const storedData = localStorage.getItem("userData");
  const userDat = storedData ? JSON.parse(storedData) : null;
  console.log(userDat)

  useEffect(() => {
    const dert = async () => {
      if (data?.data?.length  > 8) {
        const durum = await ter.slice(
          (page - 1) * 8,
          (page - 1) * 8 + 8
        );
        setVeri(durum);
      }
    };
    dert();

  }, [data, page, text]);

  const hanglr = (id: string) => {
    if (!authToken) {
      toast("du must login");
    } else {
      navigate(`details/${id}`);
    }
  };

  return (
    <section>
      <header className="dark:bg-slate-700 dark:text-black space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">
            {userDat && 
              <div className="dark:text-gray-100">
                kullanici ismi : {userDat?.firstName}
              </div>
           }
          </h2>
        </div>

        <Search text={text} setText={setText} />
      </header>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {isLoading ? (
          <button type="button" className="bg-indigo-500 ..." disabled>
            <svg
              className="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Processing...
          </button>
        ) : (
          veri
            ?.filter((item) =>
              item.title.toLowerCase().includes(text.toLocaleLowerCase())
            )
            .map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-md h-[200px] w-[570px] ml-8 hover:bg-blue-200 flex "
              >
                <div className="flex-none w-52 relative">
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="ml-2">
                  <h3 className="text-slate-900 font-semibold text-center">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 text-justify">
                    {item.content.split(" ").slice(0, 10).join(" ")}....
                  </p>
                  <p className="text-slate-400 text-justify">
                    Published Date:{item.createdAt.slice(0, 10)}
                  </p>
                  <div className="mt-6 gap-2 justify-between flex">
                    <div className="flex gap-4">
                      <Like setVeri={setVeri} item={item} veri={veri} />
                      <FaEye size={24} />
                      <p>{item?.countOfVisitors}</p>
                      <MdOutlineComment size={24} />
                      <p>{item?.comments.length}</p>
                    </div>
                    <div>
                      <button
                        className="cta w-36 h-8 mt-[-7px]"
                        onClick={() => hanglr(item._id)}
                      >
                        <span className="span">Read </span>
                        <span className="second">
                          <svg
                            width="40px"
                            height="20px"
                            viewBox="0 0 66 43"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          >
                            <g
                              id="arrow"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                className="one"
                                d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                className="two"
                                d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                className="three"
                                d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                fill="#FFFFFF"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
        )}
        {!text.length && <NewProduct />}
      </div>
      <div className="flex justify-center gap-4 text-xl border border-sky-500 rounded-full w-24 h-12 items-center ml-[900px] mt-2  bg-sky-500 text-white">
        <PageNav setPage={SetPage} page={page} />
      </div>
    </section>
  );
};

export default HomeCarts;
