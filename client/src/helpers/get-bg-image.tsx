import {getRandomNumber} from "./get-random-number";
import {photoAttributes} from "../data/photo-attributes";

export const getBgImageData = () => {
    return photoAttributes[getRandomNumber(0, photoAttributes.length)]
}