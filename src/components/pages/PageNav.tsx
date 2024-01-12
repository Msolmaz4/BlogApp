import { useState } from "react";

const PageNav = ({ setPage, page }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      {page != 1 && (
        <button onClick={() => setPage(page - 1)} className="gap-2">
          ---
        </button>
      )}
      {page + count}
      <div className="gap-2">
        <button onClick={() => setPage(page + 1)}> ++</button>{" "}
      </div>
    </div>
  );
};

export default PageNav;
