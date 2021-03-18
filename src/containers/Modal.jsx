import { useEffect, useState } from 'react';

const useDraggable = (t, l, selector) => {
  const [top, setTop] = useState(top);
  const [left, setLeft] = useState(top);

  useEffect(() => () => {
  });
};

const Modal = ({
  children, initTop, initLeft, id,
}) => {
  useDraggable(initTop, initLeft, `#${id}`);

  return <div className="modal" id={id}>{children}</div>;
};

export default Modal;
