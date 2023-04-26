import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Icon from "../Icon";
import Button from "../Button/Button";
import Box from "../Box/Box";

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
            <Button 
              onClick={handleCloseClick} 
              styleSheet={{ 
                backgroundColor: 'transparent', 
                position: { md: 'absolute' },
                top: '15px', 
                right: '5px',
              }}>
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
 
const StyledModalBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box 
      tag="nav"
      styleSheet={{
        paddingTop: { xs: '100px', md: '20px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      {children}
    </Box>
  )
}

const StyledModalHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box 
      styleSheet={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '25px',
        textTransform: 'uppercase',
        fontFamily: "'Barlow Semi Condensed', sans-serif",
        fontWeight: '700',
        alignItems: { xs: 'center', md: 'flex-start' },
      }}
    >
      {children}
    </Box>
  )
}

const StyledModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box 
      styleSheet={{
        background: '#FFF',
        width: '100%',
        paddingHorizontal: '30px',
        height: { xs: '100%', md: 'auto' },
        paddingTop: { xs: '100px', md: '20px'},
        paddingBottom: { xs: '70px', md: '20px' },
        borderRadius: { xs: 'none', md: '5%' },
        position: { xs: 'static', md: 'relative' }
      }}
    >
      {children}
    </Box>
  )
}

const StyledModalWrapper = React.forwardRef(({ children }: { children: React.ReactNode }, ref) => {
  return (
    <Box 
      styleSheet={{
        justifyContent: 'center',
        height: { xs: '100%', md: 'auto' },
        width: { xs: '100%', md: 'auto' },
      }}
      ref={ref}
    >
      {children}
    </Box>
  )
})

StyledModalWrapper.displayName = 'StyledModalWrapper'

const StyledModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box 
      styleSheet={{
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: { xs: 'flex-end', md: 'center' },
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      {children}
    </Box>
  )
}

export default Modal;
