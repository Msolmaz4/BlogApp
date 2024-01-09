import { useEffect, useState } from "react";
import { useGetAllBlogsQuery } from "../../redux/blogs";

const HomeCarts = () => {
  const { data ,isLoading} = useGetAllBlogsQuery("");
  console.log(data?.data);
  const [veri ,setVeri] = useState([])
   const [page,SetPge] = useState<number>(1)
  useEffect(()=>{
    if(data?.data.length > 8){
        console.log("first")
        setVeri(data?.data.slice(0,8))
    }
 
},[data,page])
  return (
    <section>
      <header className="dark:bg-slate-700 dark:text-black space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900"> kullanici ismi</h2>
        </div>
        <form className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Filter Blog..."
          />
        </form>
      </header>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
      { isLoading ? "loading......" :( veri?.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md h-[200px] w-[550px] ml-8 hover:bg-blue-200">
            <h3 className="text-slate-900 font-semibold">{item.title}</h3>
            <p className="text-slate-700">dert</p>
           
          </div>
        ))) }
 <a href="/" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
        <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New project
      </a>
</div>





      <p>{page}</p>
    </section>
  );
};

export default HomeCarts;
