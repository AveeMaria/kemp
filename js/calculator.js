//DAILY PRICES:

    let adult_tax = 2.5;
    let child_tax = 1.25;
    let priceChildren0to6 = 0
    let priceChildren6to14 = 8;
    let priceChildren14to18 = 12.5;
    let priceAdults = 12.5;
    let pricePets = 3;
    let priceOfElectricity = 4;
    let priceOfCar = 6;
    let priceOfCamper = 6;
    let priceOfTrailer = 6;

//NUMBER OF receipt ITEMS
    let adults = 0;

    let children14to18 = 0;

    let children6to14 = 0;

    let children0to6 = 0;
    
    let days = 0;

    let pets = 0;

    let electricity = false;

    let cars = 0;

    let campers = 0;

    let trailers = 0;


    //da mam quanitiy u arrayu (KVA?)
    let qtt = [];



function initValues() {
    /////use pozre ampak "number" input pa cudezno != integer

    days = parseInt(document.getElementById('days').value) || 0;
    adults = parseInt(document.getElementById('adults').value) || 0;
    children0to6 = parseInt(document.getElementById('children0to6').value) || 0;
    children6to14 = parseInt(document.getElementById('children6to14').value) || 0;
    children14to18 = parseInt(document.getElementById('children14to18').value) || 0;
    pets = parseInt(document.getElementById('pets').value) || 0;
    cars = parseInt(document.getElementById('cars').value) || 0;
    trailers = parseInt(document.getElementById('trailers').value) || 0;
    campers = parseInt(document.getElementById('campers').value) || 0;
    electricity = document.getElementById('electricity').value === 'true';//kr je boolean
    let qtt = [adults, children14to18, children6to14, children0to6, days, pets, Number(electricity), cars, campers, trailers];
}

function printValues() {
    console.log('adults: ', adults);
    console.log('children14to18: ', children14to18);
    console.log('children6to14: ', children6to14);
    console.log('children0to6: ', children0to6);
    console.log('days: ', days);
    //// 
    console.log('cars: ', cars);
    console.log('campers: ', campers);
    console.log('trailers: ', trailers);
    console.log('electricity: ', electricity);
    console.log('pets: ', pets);
}

//// PEOPLE

function calcAdults() {
    return adults * priceAdults * days; 
}

function calcChildren14to18() {
    return children14to18 * priceChildren14to18 * days; 
}

function calcChildren6to14() {
    return children6to14 * priceChildren6to14 * days;
}

function calcChildren0to6() {
    return children6to14 * priceChildren0to6 * days;
}

/////////// MISC
function calcElectricity() {
    //ker true false ni tko kt c++ bruh
    return electricity ? priceOfElectricity * days : 0;
}

function calcPets() {
    return pets * pricePets * days;
}

//// VEHICLES

function calcCars() {
    return cars * priceOfCar * days;
}

function calcCampers() {
    return campers * priceOfCamper * days;
}

function calcTrailers() {
    return trailers * priceOfTrailer * days;
}

//// I LOVE TAXES

function calcAdultTax() {
    return adults * adult_tax * days;
}

function calcChildTax() {
    return (children0to6 + children6to14 + children14to18) * child_tax * days;
}

function calcTOTAL() {
    return calcAdults() + calcChildren14to18() + 
    calcChildren6to14() + calcChildren0to6() + 
    calcPets() + calcCars() + calcCampers() + 
    calcTrailers() + calcElectricity() + 
    calcAdultTax() + calcChildTax();
}

////////DA ZAPISE U CELLE


function writeAdults() {
    if (calcAdults() == 0) {
        document.getElementById('receipt_adults').classList.add('removed');
        return;
    }

    document.getElementById('p_adults').textContent = calcAdults().toFixed(2) + " €";
    document.getElementById('u_adults').textContent = adults + "x";
    document.getElementById('receipt_adults').classList.remove('hidden');
}

function writeChildren14to18() {
    if (calcChildren14to18() == 0) {
        document.getElementById('receipt_children14to18').classList.add('removed');
        return;
    }

    document.getElementById('p_14to18').textContent = calcChildren14to18().toFixed(2) + " €";
    document.getElementById('u_14to18').textContent = children14to18 + "x";
    document.getElementById('receipt_children14to18').classList.remove('hidden');
}

function writeChildren6to14() {
    if (calcChildren6to14() == 0) {
        document.getElementById('receipt_children6to14').classList.add('removed');
        return;
    }
    
    document.getElementById('p_6to14').textContent = calcChildren6to14().toFixed(2) + " €";
    document.getElementById('u_6to14').textContent = children6to14 + "x";
    document.getElementById('receipt_children6to14').classList.remove('hidden');
}

function writeChildren0to6() {
    if (calcChildren0to6() == 0) {
        document.getElementById('receipt_children0to6').classList.add('removed');
        return;
    }
    
    document.getElementById('p_0to6').textContent = calcChildren0to6().toFixed(2) + " €";
    document.getElementById('u_0to6').textContent = children0to6 + "x";
    document.getElementById('receipt_children0to6').classList.remove('hidden');
}

////////

function writeAdultTax() {
    if (calcAdultTax() == 0) {
        document.getElementById('receipt_adult_tax').classList.add('removed');
        return;
    }
    
    document.getElementById('p_adult_tax').textContent = calcAdultTax().toFixed(2) + " €";
    document.getElementById('u_adult_tax').textContent = adults + "x";
    document.getElementById('receipt_adult_tax').classList.remove('hidden');
}

function writeChildrenTax() {
    if (calcChildTax() == 0) {
        document.getElementById('receipt_children_tax').classList.add('removed');
        return;
    }
    
    document.getElementById('p_child_tax').textContent = calcChildTax().toFixed(2) + " €";
    document.getElementById('u_child_tax').textContent = (children0to6 + children6to14 + children14to18) + "x";
    document.getElementById('receipt_children_tax').classList.remove('hidden');
}

//////

function writePets() {
    if (calcPets() == 0) {
        document.getElementById('receipt_pets').classList.add('removed');
        return;
    }
    
    document.getElementById('p_pets').textContent = calcPets().toFixed(2) + " €";
    document.getElementById('u_pets').textContent = pets + "x";
    document.getElementById('receipt_pets').classList.remove('hidden');
}

function writeElectricity() {
    if(electricity === true) {
        document.getElementById('u_electricity').textContent = "yes";
        document.getElementById('p_electricity').textContent = calcElectricity().toFixed(2) + " €";
        document.getElementById('receipt_electricity').classList.remove('hidden');
    }
    else {
        document.getElementById('receipt_electricity').classList.add('removed');
        //document.getElementById('u_electricity').textContent = "no";
    }
    
}

/////////

function writeCars() {
    if (calcCars() == 0) {
        document.getElementById('receipt_cars').classList.add('removed');
        return;
    }
    
    document.getElementById('p_cars').textContent = calcCars().toFixed(2) + " €";
    document.getElementById('u_cars').textContent = cars + "x";
    document.getElementById('receipt_cars').classList.remove('hidden');
}

function writeCampers() {
    if (calcCampers() == 0) {
        document.getElementById('receipt_campers').classList.add('removed');
        return;
    }
    
    document.getElementById('p_campers').textContent = calcCampers().toFixed(2) + " €";
    document.getElementById('u_campers').textContent = campers + "x";
    document.getElementById('receipt_campers').classList.remove('hidden');
}

function writeTrailers() {
    if (calcTrailers() == 0) {
        document.getElementById('receipt_trailers').classList.add('removed');
        return;
    }
    
    document.getElementById('p_trailers').textContent = calcTrailers().toFixed(2) + " €";
    document.getElementById('u_trailers').textContent = trailers + "x";
    document.getElementById('receipt_trailers').classList.remove('hidden');
}

function writeTotal() {
    /*if (calcTOTAL() == 0) {
        document.getElementById('receipt_table_footer').classList.add('removed');
        return;
    }*/
    
    document.getElementById('totalprice').textContent = calcTOTAL().toFixed(2) + " €";
    document.getElementById('receipt_table_footer').classList.remove('hidden');
}

function writeDailyTotal() {
    /*if (calcTOTAL() == 0) {
        document.getElementById('receipt_table_footer').classList.add('removed');
        return;
    }*/
    
    document.getElementById('dailyprice').textContent = (calcTOTAL() / days).toFixed(2) + " €";
    document.getElementById('receipt_table_footer_daily').classList.remove('hidden');
}

function writePrices() {
    writeAdults();
    writeChildren14to18();
    writeChildren6to14();
    writeChildren0to6();
    writeAdultTax();
    writeChildrenTax();
    writePets();
    writeElectricity();
    writeCars();
    writeCampers();
    writeTrailers();
    writeTotal();
    writeDailyTotal();
}

function removeRemovedClass() {
    document.getElementById('receipt_adults').classList.remove('removed');
    document.getElementById('receipt_children14to18').classList.remove('removed');
    document.getElementById('receipt_children6to14').classList.remove('removed');
    document.getElementById('receipt_children0to6').classList.remove('removed');

    document.getElementById('receipt_adult_tax').classList.remove('removed');
    document.getElementById('receipt_children_tax').classList.remove('removed');

    document.getElementById('receipt_cars').classList.remove('removed');
    document.getElementById('receipt_campers').classList.remove('removed');
    document.getElementById('receipt_trailers').classList.remove('removed');

    document.getElementById('receipt_pets').classList.remove('removed');
    document.getElementById('receipt_electricity').classList.remove('removed');
}

document.getElementById('calculate').addEventListener('click', function() {
    initValues();

    /*removeRows();
    addRows(qtt.length - countEmptyRows());
    */
    removeRemovedClass();

    printValues();
    writePrices();

    
});





function countEmptyRows() {
    let zeroCount = 0;

    // arrow funkcija :3
    qtt.forEach(value => {
        if (value === 0) {
            zeroCount++;
        }
    });

    return zeroCount;
}

// da bo un total skos na istem mestu
function addRows(rowcount) {
    const table = document.getElementById('receipt');
    
    for (let i = 0; i < rowcount; i++) {
        const newRow = document.createElement('tr');
        newRow.classList.add('removedByJS');

        for (let j = 0; j < rowcount; j++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }

        table.appendChild(newRow);
    }
}

function removeRows() {
    //najde use rowse
    const rows = document.querySelectorAll('#receipt tr.removedByJS');
    
    rows.forEach(function(row) {
        row.remove();
    });
}
