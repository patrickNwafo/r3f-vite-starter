export const Menu = (props) => {
    const { onSectionChange, menuOpened, setMenuOpened } = props;

    return (
        <>
            <button onClick={() => setMenuOpened(!menuOpened)} className="fixed z-20 p-3 bg-indigo-600 rounded-md md:top-12 w-11 h-11 md:right-12 top-4 right-4">
                <div
                    className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45 translate-y-0.5" : ""}`}
                />
                <div
                    className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? "hidden" : ""}`}
                />
                <div
                    className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""}`}
                />
            </button>
            <div className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex-col flex ${menuOpened ? "md:w-80 w-full" : "w-0"}`}>

                <div className="flex flex-col items-start justify-center flex-1 gap-6 p-8">
                    <MenuButton label="About" onClick={() => onSectionChange(0)} />
                    <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
                    <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
                    <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
                </div>
            </div>
        </>
    );
};


const MenuButton = (props) => {
    const { label, onClick } = props;
    return (
        <button onClick={onClick}
            className="text-2xl font-bold transition-colors cursor-pointer hover:text-indigo-600"
        >
            {label}
        </button>
    )

}