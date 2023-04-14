import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Icon from "../Icon";
import Button from "../Button/Button";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ onClose, children }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalWrapperRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backDropHandler = (e: MouseEvent) => {
      if (modalWrapperRef.current === null) return;
      if (!modalWrapperRef?.current?.contains(e.target as Node)) {
        onClose();
      }
    }

    setIsBrowser(true);

    window.addEventListener('click', backDropHandler);
    return () => window.removeEventListener('click', backDropHandler);
  }, [onClose]);

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <StyledModalOverlay>
      <StyledModalWrapper ref={modalWrapperRef}>
        <StyledModal>
          <StyledModalHeader>
            Rules
          </StyledModalHeader>
          <StyledModalBody>
            {children}
            <Button onClick={handleCloseClick} styleSheet={{ backgroundColor: 'transparent' }}>
              <Icon name="close" viewBox="0 0 20 20" styleSheet={{ color: '#D0D6F9', height: '36px', width: '20px' }}/>
            </Button>
          </StyledModalBody>
        </StyledModal>
      </StyledModalWrapper>
    </StyledModalOverlay>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.nav`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  text-transform: uppercase;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 700;
`;

const StyledModal = styled.div`
  background: #FFF;
  height:100%;
  width:100%;
  padding: 100px 30px 70px 30px;
`;

const StyledModalWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
