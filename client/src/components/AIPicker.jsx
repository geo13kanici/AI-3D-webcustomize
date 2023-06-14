/* eslint-disable no-unused-vars */
import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI for a specific..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="flex flex-wrap gap-3 items-center justify-center">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="AI is generating image..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={(e) => handleSubmit('logo')}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={(e) => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
