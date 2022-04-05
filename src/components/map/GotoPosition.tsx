import { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useAppState } from '../../AppState';
import { places } from '../../map';

export const GotoPosition: FC = () => {
    const [{ gotoPosition }, { clearGotoPosition }] = useAppState();
    const map = useMap();

    useEffect(() => {
        if (!gotoPosition) return;
        map.setView(places[gotoPosition].position);
        clearGotoPosition();
    }, [gotoPosition, map, clearGotoPosition]);

    return null;
};
