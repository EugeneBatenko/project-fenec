import { create } from "zustand";

type AccordionState = {
    expanded: number | null;
    toggle: (id: number) => void;
}

const useAccordion = create<AccordionState>((set) => ({
    expanded: null,
    toggle: (id: number) => set((state) => ({
        expanded: state.expanded === id ? null : id
    }))
}))

export default useAccordion;
