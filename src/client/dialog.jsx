import { useRef } from "react";

export function Dialog({ shouldOpen, onClose, className, children }) {
  const dialogRef = useRef(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      onClose();
    }
  };

  if (shouldOpen) {
    openDialog();
  }
  
  return (
    <div>
      <dialog id="dialog" ref={dialogRef} className={className}>
        {children}
        <button id="close" className="button primary close-bttn-dialog" onClick={closeDialog}>
          Close
        </button>
      </dialog>
    </div>
  );
}
