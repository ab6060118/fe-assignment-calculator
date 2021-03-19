import {
  useCallback, useMemo, useRef, useState,
} from 'react';

const space = 50;

const Modal = ({
  children,
  closeFn,
  initLeft,
  initTop,
  show,
}) => {
  const modalEl = useRef(undefined);
  const [isMoving, setIsMoving] = useState(false);
  const [position, setPosition] = useState({
    top: initTop || 0,
    left: initLeft || 0,
  });
  const [originPosition, setOriginPosition] = useState({
    top: 0,
    left: 0,
  });
  const [mouseDownPosition, setMouseDownPosition] = useState({
    top: 0,
    left: 0,
  });

  const handleMoving = useCallback(({ pageX, pageY }) => {
    const { left: mLeft, top: mTop } = mouseDownPosition;
    const { left: oLeft, top: oTop } = originPosition;
    const { innerWidth, innerHeight } = window;
    const { width, height } = modalEl.current.getBoundingClientRect();
    let top = oTop + pageY - mTop;
    let left = oLeft + pageX - mLeft;

    if (top < space - height) top = space - height;
    if (top > innerHeight - space) top = innerHeight - space;
    if (left < space - width) left = space - width;
    if (left > innerWidth - space) left = innerWidth - space;

    setPosition({
      top,
      left,
    });
  }, [modalEl, mouseDownPosition, originPosition]);

  const handleMouseUp = useCallback(() => {
    setIsMoving(false);
  }, []);

  const handleMouseDown = useCallback(({ pageX, pageY }) => {
    const { left, top } = modalEl.current.getBoundingClientRect();
    setIsMoving(true);
    setMouseDownPosition({
      top: pageY,
      left: pageX,
    });
    setOriginPosition({
      top,
      left,
    });
  }, []);

  const handleClose = useCallback(({ target }) => {
    if (!modalEl.current.contains(target)) closeFn();
  }, [modalEl]);

  useMemo(() => {
    if (isMoving) {
      document.addEventListener('mousemove', handleMoving);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMoving);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isMoving, handleMoving]);

  useMemo(() => {
    if (show) {
      document.addEventListener('mousedown', handleClose);
    } else {
      document.removeEventListener('mousedown', handleClose);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="modal"
      ref={modalEl}
      onMouseDown={handleMouseDown}
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      {children}
    </div>
  );
};

export default Modal;
