'use client';
import {useState, useLayoutEffect} from 'react';

export const useWindowDimensions = () =>{
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0})
    
    useLayoutEffect(() => {
        function handleResize(){
            const {innerWidth: width, innerHeight: height} = window;
            setWindowDimensions({width, height})
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowDimensions;
}