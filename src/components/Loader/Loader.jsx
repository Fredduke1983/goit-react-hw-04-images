import { CircleLoader } from 'react-spinners';

export function Loader() {
  return (
    <CircleLoader
      color="#fff"
      cssOverride={{
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '15px',
        left: '10px',
        zIndex: '1100',
      }}
    />
  );
}
