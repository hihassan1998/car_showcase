import { CarProps, FilterProps } from "@/types";
import { generateKey } from "crypto";

export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, model, fuel, limit } = filters;

    const headers = {
        'X-RapidAPI-Key': '82e0dce41emsh34e0d22e81aed3dp1cfebcjsndd8fc680f66b',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }


    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`
        , {
            headers: headers,
        });

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 500; // Base rental price per day in dollars
    const mileageFactor = 1.5; // Additional rate per mile driven
    const ageFactor = 25; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    angle && url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    return newPathname
}