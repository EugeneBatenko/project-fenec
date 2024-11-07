import { create } from "zustand";

interface MenuState {
    isOpen: boolean;
    toggleMenu: () => void;
}

const useMobileMenu = create<MenuState>((set) => ({
    isOpen: false,
    toggleMenu: () =>
        set((state) => {
            document.documentElement.style.overflow = !state.isOpen ? "hidden" : "unset";
            return { isOpen: !state.isOpen };
        }),
}))

export default useMobileMenu;
