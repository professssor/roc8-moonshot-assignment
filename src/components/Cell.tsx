import clsx from "clsx";

interface Props extends React.PropsWithChildren {
  className?: string;
  isActive?: boolean; 
  onClick?: () => void;
}

const Cell: React.FC<Props> = ({
  onClick,
  children,
  className,
  isActive = false,
}) => {
  return (
    <div
      onClick={!isActive ? onClick : undefined}
      className={clsx(
        "h-10 flex items-center justify-center select-none transition-colors mb-[3px] font-medium hover:rounded-3xl hover:bg-gray-300  duration-500 ease-in-out",
        {
          "cursor-pointer hover:bg-gray-100 active:bg-gray-200":
            !isActive && onClick,
          " text-white bg-[#378760] rounded-3xl": isActive,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Cell;