import { create } from "zustand";

type ModalState = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const useModalWindow = create<ModalState>((set) => ({
    isOpen: false,
    openModal: () => set(() => {
        document.documentElement.style.overflow = "hidden";
        return { isOpen: true }
    }),
    closeModal: () => set(() => {
        document.documentElement.style.overflow = ""
        return { isOpen: false }
    }),
}))

export default useModalWindow;
