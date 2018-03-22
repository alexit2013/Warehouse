
export const clearString = (str) =>{
    return str
        .replace(/ /gi,'')
        .replace(/-/gi,'')
        .replace(/:/gi,'')
        .replace(/;/gi,'')
        .replace(/!/gi,'')
        .replace(/./gi,'')
        .replace(/,/gi,'');
};