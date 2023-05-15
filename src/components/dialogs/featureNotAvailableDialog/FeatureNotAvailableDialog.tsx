import "./FeatureNotAvailableDialog.scss";

import { forwardRef } from "react";
import BaseDialog, { BaseDialogRef } from "../BaseDialog";
import Button from "../../inputs/button/Button";

interface FeatureNotAvailableDialogProps {
    text: string;
    onClose: () => void;
}

const FeatureNotAvailableDialog = forwardRef<BaseDialogRef, FeatureNotAvailableDialogProps>(
    ({ text, onClose }: FeatureNotAvailableDialogProps, ref) => {
        const handleCloseDialog = () => {
            onClose();
        };

        return (
            <BaseDialog
                ref={ref}
                className="feature-not-available-dialog"
                onBackdropClick={handleCloseDialog}
            >
                <div className="feature-not-available-dialog__body">
                    <h1>{text}</h1>
                    <span>{"( this website is a demo )"}</span>
                </div>
                <div className="feature-not-available-dialog__footer">
                    <Button
                        className="feature-not-available-dialog__button"
                        theme="dark"
                        onClick={onClose}
                    >
                        Got it
                    </Button>
                </div>
            </BaseDialog>
        );
    }
);

FeatureNotAvailableDialog.displayName = "FeatureNotAvailableDialog";
export default FeatureNotAvailableDialog;
