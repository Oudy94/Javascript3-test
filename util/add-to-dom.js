"use strict";

export function addHosesToDOM(allHousesData, currentLordsData, length){

    //add house name
    const houseList = document.getElementById("got-house-list");

    let houseContainer = ``;
    for(let i=0; i < length; i++){
        const houseName = allHousesData[i].name
        const houseNameWithoutSpace = houseName.replace(/\s+/g, '');
    
        houseContainer += `
        <div class="got-house">
            <h1 class="got-house__title">${allHousesData[i].name}</h1>
            <span class="got-house__current-lord" id="lord-of-${houseNameWithoutSpace}">${currentLordsData[i].name}</span>
        </div>
        `;
    }
    
    houseList.innerHTML = houseContainer;
}

export function changeLordtoDOM(houseName, newLordName){

    const houseNameWithoutSpace = houseName.replace(/\s+/g, '');
    const selectHouseName = document.getElementById(`lord-of-${houseNameWithoutSpace}`);

    selectHouseName.innerHTML= newLordName;

}