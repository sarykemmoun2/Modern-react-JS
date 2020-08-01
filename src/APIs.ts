import data from './data.json'

export const getDataFromServer = () => {
    return Promise.resolve(() =>{
        return data;
    }).then(()=>{
        return data;
    })
}