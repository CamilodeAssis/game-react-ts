type Props = {
    text: string;
    icon?: any;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({ text, icon, onClick }: Props) => {
    return (
        <div onClick={onClick} className="w-4/5  flex bg-redValo md:w-full h-12 rounded cursor-pointer mt-4">
            {icon && <div className=" flex  justify-center items-center px-4 border-r border-beigeValo border-opacity-80 rounded">
                <img src={icon} alt="" width="20"  />
            </div>}
            <div role="button"  className=" w-full flex flex-1 justify-center items-center text-beigeValo text-xl">{text}</div>
        </div>
    );
};
