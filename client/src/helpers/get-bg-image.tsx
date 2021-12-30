import {getRandomNumber} from "./get-random-number";
import {attrib} from "../data/attributes";

export const getBgImageData = () => {
    return attrib[getRandomNumber(0, attrib.length)]
}