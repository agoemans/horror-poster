import {fontStyles} from "../data/font-data";
import {getRandomNumber} from "./get-random-number";
import {iFontStyle} from "../types";

export const getFontStyles = () => {
    const fontStyle: { [key: string]: string } = {};
    for (const [key,value] of Object.entries(fontStyles)){
        fontStyle[`${key}Font`] = value[getRandomNumber(0, value.length)];
    }
    return fontStyle;
}