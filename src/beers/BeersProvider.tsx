import React, { useState, useEffect, createContext, useContext } from "react";
import { fetchBeers, TBeer } from "../punkapi";

export type TBeersContext = {
    beers: TBeer[];
    loading: boolean;
    error: string;
}

const BeersContext = createContext<TBeersContext>({
    beers: [],
    loading: false,
    error: ''
});

export const BeersProvider: React.FC = ({ children }) => {
    const [beers, setBeers] = useState<TBeer[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setBeers(await fetchBeers());
            } catch(e) {
                setError('Unable to fetch the beers');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return <BeersContext.Provider value={{ beers, error, loading }}>{ children }</BeersContext.Provider>
}

export const useBeers = () => {
    return useContext(BeersContext);
}