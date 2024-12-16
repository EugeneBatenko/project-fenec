import { create } from "zustand";

type MenuState = {
    isOpen: boolean;
    toggleMenu: () => void;
    setMenuState: (isOpen: boolean) => void; // State to prevent scroll lock after changing orientation or screen width
};

function debounce(func: () => void, wait: number): () => void {
    let timeout: ReturnType<typeof setTimeout>;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

const useMobileMenu = create<MenuState>((set) => ({
    isOpen: false,
    toggleMenu: () =>
        set((state) => {
            const newIsOpen = !state.isOpen;
            document.documentElement.style.overflow = newIsOpen ? "hidden" : "";
            return { isOpen: newIsOpen };
        }),
    setMenuState: (isOpen) =>
        set(() => {
            document.documentElement.style.overflow = isOpen ? "hidden" : "";
            return { isOpen };
        }),
}));

if (typeof window !== "undefined") {
    const handleResize = debounce(() => {
        console.log("resizer")
        const width = window.innerWidth;
        if (width > 767) {
            useMobileMenu.getState().setMenuState(false);
        }
    }, 200);

    window.addEventListener("resize", handleResize);
}

export default useMobileMenu;
