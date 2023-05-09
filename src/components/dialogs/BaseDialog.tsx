import "./BaseDialog.scss";

import { withClassNames } from "../../utilities/WithClassNames";
import { forwardRef, ReactNode, useImperativeHandle, useRef, useState } from "react";

export interface BaseDialogRef {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

interface BaseDialogProps
    extends React.DetailedHTMLProps<
        React.DialogHTMLAttributes<HTMLDialogElement>,
        HTMLDialogElement
    > {
    children?: ReactNode;
    animationDuration?: number;
    onBackdropClick?: () => void;
}

const BaseDialog = forwardRef<BaseDialogRef, BaseDialogProps>(
    ({ children, animationDuration = 0.5, onBackdropClick, ...dialogProps }, ref) => {
        const [isOpen, setIsOpen] = useState(false);

        const dialogRef = useRef<HTMLDialogElement>();

        useImperativeHandle(ref, () => ({
            isOpen: dialogRef.current?.open,
            open: handleOpen,
            close: handleClose
        }));

        const handleOpen = () => {
            dialogRef.current?.showModal();
            setIsOpen(true);
        };

        const handleClose = () => {
            setIsOpen(false);
        };

        const handleClickDialog = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
            const dialogRect = dialogRef.current.getBoundingClientRect();
            const isInDialog =
                dialogRect.top <= e.clientY &&
                e.clientY <= dialogRect.top + dialogRect.height &&
                dialogRect.left <= e.clientX &&
                e.clientX <= dialogRect.left + dialogRect.width;

            if (isInDialog) {
                dialogProps.onClick?.(e);
            } else {
                onBackdropClick?.();
            }
        };

        const handleTransitionEnd = () => {
            if (!isOpen) {
                dialogRef.current?.close();
            }
        };

        const handleForwardRef = (node: HTMLDialogElement) => {
            dialogRef.current = node;
            if (node) {
                node.style.setProperty(
                    "--base-dialog-animation-duration",
                    `${animationDuration.toString()}s`
                );
            }
        };

        return (
            <dialog
                {...dialogProps}
                ref={handleForwardRef}
                className={withClassNames([
                    "base-dialog",
                    dialogProps.className,
                    isOpen ? "base-dialog--opened" : "base-dialog--closed"
                ])}
                onClick={handleClickDialog}
                onTransitionEnd={handleTransitionEnd}
            >
                {children}
            </dialog>
        );
    }
);

BaseDialog.displayName = "BaseDialog";
export default BaseDialog;
