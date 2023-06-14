/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSnapshot } from 'valtio';
import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ title, type, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 text-slate-100 rounded-md ${customStyles} border border-[#d19200] shadow-lg shadow-black/25`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
