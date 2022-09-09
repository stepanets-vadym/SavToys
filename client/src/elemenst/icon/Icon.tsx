import { FC } from "react";

interface Props{
  name: string ;
} 

const Icon: FC<Props> = ({ name }) => {
  return (
    <svg className='icon'>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  );
};

export default Icon;
