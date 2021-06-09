import { useEffect } from 'react';

export const useClickOutside = (onClose, isOpen, ref, buttonRef) => {
  return useEffect(() => {
    const close = e => {
      if (
        buttonRef?.current.contains(e.target) ||
        ref.current.contains(e.target)
      ) {
        return;
      }
      onClose();
    };

    if (isOpen) {
      document.addEventListener('mousedown', close);
    } else {
      document.removeEventListener('mousedown', close);
    }

    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, [isOpen]);
};
