import {photoAttributes} from "../data/photo-attributes";

export const getImageAttribute = (imageName: string) => {
    return photoAttributes.find(item => item.imageName === imageName)
}