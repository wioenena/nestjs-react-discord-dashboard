import { Dna } from 'react-loader-spinner';

type Props = {
  width?: number;
  height?: number;
  centerScreen?: boolean;
};

const Loading = (
  { width, height, centerScreen }: Props = {
    width: 80,
    height: 80,
  }
) => {
  const options = {
    visible: true,
    width,
    height,
    ariaLabel: 'dna-loading',
    wrapperClass: 'dna-wrapper',
  };
  centerScreen = centerScreen ?? true;

  if (!centerScreen) return <Dna {...options} />;

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <Dna {...options} />
    </div>
  );
};

export default Loading;
