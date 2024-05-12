export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '82e0dce41emsh34e0d22e81aed3dp1cfebcjsndd8fc680f66b',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }


    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers, 
    });

    const result = await response.json();

    return result;
}

