import React from 'react';
import CustomButtom from './CustomButton';

const AIpicker = ({ prompt, setPrompt, generatingImg, handleSubmit, tabOpen }) => {
    return (
        <>
            {tabOpen && (
                <div className='aipicker-container'>
                    <textarea className='aipicker-textarea' placeholder='Ask AI...' rows={5}
                        value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                    <div className='flex flex-wrap gap-3'>
                        {generatingImg ? (
                            <CustomButtom type='outline' title='Assking AI...' customStyles='text-xs' />
                        ) : (
                                <>
                                    <CustomButtom type='outline' title='AI Logo' customStyles='text-xs'
                                        handleClick={() => handleSubmit('logo')} />
                                    <CustomButtom type='filled' title='AI Full' customStyles='text-xs'
                                        handleClick={() => handleSubmit('full')} />
                                </>
                            )}
                    </div>
                </div>
            )}
        </>
    );
}

export default AIpicker;
