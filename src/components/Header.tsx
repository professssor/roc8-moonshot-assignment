import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Header() {
  return (
    <>
      <div className=" flex justify-between items-center w-full  p-4 md:p-8  mx-auto text-[#090F4E] ">
        {/* Left side: q logo */}
        <h3 className="text-3xl">🚀roc8 assignment</h3>

        {/* Right side: Navigation buttons */}
        <section className="flex md:space-x-12 items-center">
          <h5 className="hidden md:inline-flex">
            {" "}
            Menu{" "}
            <span className="text-[#378760]">
              <ExpandMoreIcon />
            </span>
          </h5>
          <h5 className="hidden md:inline-flex"> Contact us</h5>
          <button className="bg-white border-2 border-[#378760] rounded-3xl">
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M9.16665 6.33334H4.99998C4.55795 6.33334 4.13403 6.50894 3.82147 6.8215C3.50891 7.13406 3.33331 7.55798 3.33331 8.00001V15.5C3.33331 15.942 3.50891 16.366 3.82147 16.6785C4.13403 16.9911 4.55795 17.1667 4.99998 17.1667H12.5C12.942 17.1667 13.3659 16.9911 13.6785 16.6785C13.9911 16.366 14.1666 15.942 14.1666 15.5V11.3333M8.33331 12.1667L16.6666 3.83334M16.6666 3.83334H12.5M16.6666 3.83334V8.00001"
                  stroke="#378760"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              <span>Share Link</span>
            </div>
          </button>
        </section>
      </div>
      <hr />
    </>
  );
}

export default Header;
