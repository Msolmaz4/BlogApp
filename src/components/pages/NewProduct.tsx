import { useState } from "react";
import NewModal from "./NewModal";
import { toast } from "react-toastify";

const NewProduct = () => {
  const [show, setShow] = useState(false);
  const authToken = localStorage.getItem("authToken");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const control = () => {
    if (authToken) {
      handleShow();
    } else {
      toast("login muss");
    }
  };

  return (
    <div>
      <button
        onClick={control}
        className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 h-[200px] w-[570px]"
      >
        <svg
          className="group-hover:text-blue-500 mb-1 text-slate-400"
          width="20"
          height="20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New project
      </button>
      <NewModal show={show} handleClose={handleClose} handleShow={handleShow} />
    </div>
  );
};

export default NewProduct;
