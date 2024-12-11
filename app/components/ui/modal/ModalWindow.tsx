// "use client"
//
// import {FC, ReactNode, useEffect, useRef} from "react";
// import useModalWindow from "@/store/useModalWindow";
// import styles from "./modal.module.css";
//
// type ModalWindowProps = {
//     children: ReactNode;
//     stylesClass: string;
// }
//
// export const ModalWindow: FC<ModalWindowProps> = ({children, stylesClass}) => {
//     const { isOpen, closeModal } = useModalWindow();
//     const dialogRef = useRef<HTMLDialogElement>(null);
//
//     useEffect(() => {
//         isOpen ? dialogRef.current?.showModal() : dialogRef.current?.close()
//     }, [isOpen]);
//
//     useEffect(() => {
//         const dialog = dialogRef.current;
//
//         const handleOutsideClick = (event: MouseEvent) => {
//             console.log(event);
//             if (dialog && !dialog.contains(event.target as Node)) {
//
//                 closeModal();
//             }
//         };
//
//         if (isOpen) {
//             document.addEventListener('click', handleOutsideClick);
//         } else {
//             document.removeEventListener('click', handleOutsideClick);
//         }
//
//         return () => {
//             document.removeEventListener('click', handleOutsideClick);
//         };
//     }, [isOpen, closeModal]);
//
//     const handleClose = () => {
//         dialogRef.current?.close();
//         closeModal()
//     }
//
//     return(
//         <dialog
//             ref={dialogRef}
//             onClose={handleClose}
//             className={`${stylesClass} ${styles.modal}`}
//         >
//             {children}
//             <button onClick={handleClose}>Close</button>
//         </dialog>
//     )
// }
