import { useState } from 'react';

export const VideoModal = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <div className="video-modal">
          <div>VIDEO</div>
          <button onClick={handleClose}>close</button>
        </div>
      )}
    </>
  );
};
