import {attrib} from "../data/attributes";

export const getImageAttribute = (imageName: string) => {
    return attrib.find(item => item.imageName === imageName)
}