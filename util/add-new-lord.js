"use strict";

import {fetchData} from './fetch-data.js';

export async function addNewLord(allHousesData, houseName){

    const selectHouse = allHousesData.filter(houses => houses.name === houseName);

    const swornMembersArray = selectHouse[0].swornMembers;
    const newRandomLord = swornMembersArray[Math.floor(Math.random() * swornMembersArray.length)];

    const endpoint = newRandomLord;
    const newLordObj = await fetchData(endpoint);

    return newLordObj;

}
