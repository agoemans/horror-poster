import {vectorAttributes} from "../data/vector-attributes";

export const getVectorAttribute = (imageName: string) => {
    return vectorAttributes.find(item => item.imageName === imageName)
}