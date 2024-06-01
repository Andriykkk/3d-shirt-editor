import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
    return (
        <div className='aipicker-container'>
            <textarea
                className='aipicker-textarea'
                value={prompt}
                rows={5}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder='Ask AI...'
            ></textarea>
            <div className='flex flex-wrap gap-3'>
                {generatingImg ? (
                    <CustomButton
                        type='outline'
                        title='Asking AI...'
                        handleClick={() => handleSubmit("logo")}
                        customStyles='text-sm'
                    />
                ) : (
                    <>
                        <CustomButton
                            type='outline'
                            title='AI Logo'
                            handleClick={() => handleSubmit("full")}
                            customStyles='text-sm'
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default AIPicker;
