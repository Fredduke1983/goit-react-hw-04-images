import styled from '@emotion/styled';

const LoaderStyle = styled.div`
  display: flex;
  position: sticky;
  top: 40%;
  z-index: 1100;
  width: 100%;
  justify-content: center;
  animation-name: loader;
  animation-duration: 1s;
  font-size: 30px;
  font-weight: 600;

  @keyframes loader {
    0% {
      color: #fff;
      opacity: 0.2;
      scale: 1;
    }
    25% {
      opacity: 1;
      scale: 1.1;
    }

    50% {
      opacity: 0.2;
      scale: 1;
    }

    75% {
      opacity: 1;
      scale: 1.1;
    }

    100% {
      color: #000;

      opacity: 0.2;
      scale: 1;
    }
  }
`;

export { LoaderStyle };
