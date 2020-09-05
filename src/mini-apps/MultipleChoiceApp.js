import * as Questions from '../StaticCards/Questions.js';
import React, { useState, useEffect } from 'react';
import Categories from '../Categories.js';
import Checkbox from '../Checkbox.js';

const CATEGORIES = ['csharp', 'html', 'css', 'sql'];

export default function MultipleChoiceApp() {
    const renderQuizBody = () => {
        return (
            <>
            {/* <p></p>
                <Quiz
                    question={}
                    answers={}                                  
                    onStartNewQuizClick={}
                    onSubmitAnswerClick={}
                /> */}
            </>
        )
    };

    return (
        <>
            {/* <div className="column left">
               
                <div className='addCustom'>
                    <AddCategory
                        handleConfirmCategory={handleConfirmCategory}
                        handleAddCategoryNameChange={handleAddCategoryNameChange}
                        handleNewCategoryClick={handleNewCategoryClick}
                        isAddingCategory={isAddingCategory}
                        addCategoryText={addCategoryText}
                    />
                    <AddMultipleChoice                      
                    />
                </div>
            </div>
            <div className="column center">
                {renderQuizBody()}
            </div>
            <div className="column right">
               
                <div className='addCustom'>

                </div>
            </div> */}
        </>
    )
}



