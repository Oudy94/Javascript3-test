"use strict";

import {fetchData} from './util/fetch-data.js';
import {addHosesToDOM, changeLordtoDOM} from './util/add-to-dom.js';
import {addNewLord} from './util/add-new-lord.js';

const houseIdList = [
    7, // Eyrie
    17, // Baratheon
    169, // Greyjoy
    229, // Lannister
    362, // Stark
    378, // Targaryen
    395, // Tully
    398, // Tyrell
];

async function main(){

    try {
        //fetch for houses name
        let allHousesObj = [];
        for(const houseID of houseIdList){
            const endpoint = `https://anapioficeandfire.com/api/houses/${houseID}`;
            const HousesObj = await fetchData(endpoint);

            allHousesObj.push(HousesObj);
        }

        //fetch for current lords name
        let allCurrentLordObj = [];
        for(const lordID of allHousesObj){
            if (lordID.currentLord){
                const endpoint = lordID.currentLord;
                const currentLordObj = await fetchData(endpoint);
                allCurrentLordObj.push(currentLordObj);
            }
            else{
                const newLord = await addNewLord(allHousesObj, "House Arryn of the Eyrie");
                allCurrentLordObj.push(newLord);
            }
        }

        //add houses to DOM
        addHosesToDOM(allHousesObj, allCurrentLordObj, houseIdList.length);

        //added event "click" to the button
        const killButton = document.getElementById("kill-random-lord-button");
        killButton.addEventListener("click", async()=> {
            const randomHouseLordKill = allHousesObj[Math.floor(Math.random() * allHousesObj.length)];
            const newLord = await addNewLord(allHousesObj, randomHouseLordKill.name);

            changeLordtoDOM(randomHouseLordKill.name, newLord.name)
        });       
    } catch (error) {

        console.log(error)
    }

}


window.addEventListener("load", main);