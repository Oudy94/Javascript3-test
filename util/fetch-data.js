"use strict";

export async function fetchData(url){

    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            return data;     
        }
        else{
            throw 'something went error';
        }          
    } catch (error) {
        console.log(error);
    }
      
}
