import {FC} from 'react';
import useAccordionStore from "@/store/useAccordion";
import {AccordionContentTypes, NumberId} from "@/types";


export const AccordionToggle: FC<NumberId & {className: string}> = ({id, className}) => {
    const expandedAcc = useAccordionStore(state => state.expanded);
    const toggleAcc = useAccordionStore(state => state.toggle);

    const isExpanded = expandedAcc === id;

    return (
        <button onClick={() => toggleAcc(id)}
                className={isExpanded ? className + " show" : className}>
            {isExpanded ? "Show less" : "Show more"}
        </button>
    )
}

export const AccordionContent: FC<AccordionContentTypes> = ({id, children, className}) => {
    const expandedAcc = useAccordionStore(state => state.expanded);
    const isExpanded = expandedAcc === id;

    return (
        <div className={isExpanded ? className + " show" : className}>
            {children}
        </div>
    )
}

export const Accordion: FC<AccordionContentTypes> = ({children}) => {
    return <>{children}</>
}
