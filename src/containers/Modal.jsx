import {
  useCallback, useEffect, useRef, useState,
} from 'react';

const Modal = ({
  children, initTop, initLeft, id,
}) => {
  const modelEl = useRef(undefined);
  const [{ top, left }, setPosition] = useState({
    top: initTop || 0,
    left: initLeft || 0,
  });
  const [mouseDownPosition, setMouseDownPosition] = useState({
    top: 0,
    left: 0,
  });

  const handleMoving = useCallback((e) => {
    if (!modelEl) return;

    console.log(mouseDownPosition);

    // const { pageX, pageY } = e;
    // const {
    // elLeft: left, top, width, height,
    // } = modelEl.current.getBoundingClientRect();

    // console.log(pageX, pageY, modelEl.current.getBoundingClientRect(), mouseDownPosition);
    // setPosition({
    // top: kkkkk
    // })
  }, [modelEl, mouseDownPosition]);

  console.log(handleMoving);

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMoving);
    document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseDown = useCallback((e) => {
    const { pageX, pageY } = e;
    console.log(pageX);
    setMouseDownPosition({
      top: pageY,
      left: pageX,
    });
    document.addEventListener('mousemove', handleMoving);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  useEffect(() => {
    modelEl.current.addEventListener('mousedown', handleMouseDown);
    return () => {
      modelEl.current.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div
      className="modal"
      ref={modelEl}
      id={id}
      style={{
        top,
        left,
      }}
    >
      {children}
    </div>
  );
};

export default Modal;
