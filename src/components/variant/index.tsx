import { Checkbox, Typography, Card } from 'antd';
import cn from 'classnames';

import s from "./styles.module.scss"
import { useState } from 'react';
import { useAppDispatch } from 'storage/hook';
import { decrementAction, incrementAction } from 'storage/actions/quizGame-actions';

const { Title, Text } = Typography;

export type TVarianProps = {
    isDisable: boolean, 
/*     handleClickVariant: (answer: number) => void, 
 */    correctAnswer: number, 
    index: number, 
    variant: string,
    activeCheckbox: number,
}

function Variant({isDisable, /* handleClickVariant, */ correctAnswer, index, variant, activeCheckbox}:TVarianProps) {    

    const dispatch = useAppDispatch();
    
    
    const handleClickVariant = (answer: number) => {

        

        if (activeCheckbox) {
            if (answer === correctAnswer) {
                if (activeCheckbox === correctAnswer) {
                    return
                } else {
                    dispatch(incrementAction(1))
                    
                }
            } else {
                if (activeCheckbox !== correctAnswer) {
                    return
                } else {
                    dispatch(decrementAction(1))
                    
                }
            }
        } else {
            if (answer === correctAnswer) {
                dispatch(incrementAction(1))
                
            } else {
                return
            }
        }              

    }




    return (
        <>
            <Checkbox disabled={isDisable} onChange={() => handleClickVariant(index + 1)} checked={index + 1 === activeCheckbox}>
                <Text className={cn({ [s['colorGreen']]: isDisable && index + 1 === correctAnswer }, { [s['colorRed']]: isDisable && index + 1 !== correctAnswer })}>{variant}</Text>
            </Checkbox>
        </>
    )
}

export default Variant