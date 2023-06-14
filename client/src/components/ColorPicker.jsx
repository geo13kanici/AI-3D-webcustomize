/* eslint-disable no-unused-vars */
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          '#ebe9e9',
          '#d6d5d5',
          '#a2a0a0',
          '#787d7c',
          '#000000',
          '#d19200',
          '#e6d094',
          '#aa7b0f',
          '#3d4761',
          '#c77345',
          '#8c082c',
          '#b3c81c',
          '#f10606',
          '#d308e8',
          '#6d08e8',
          '#4f088c',
          '#57da0f',
          '#08e8b8',
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
