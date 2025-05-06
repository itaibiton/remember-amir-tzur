"use client";

import React, { useEffect, useRef, useMemo } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Point } from './PointCard';
import ReactDOMServer from 'react-dom/server';
import { useMapStore } from '../store/map-store';
import { MapPin } from 'lucide-react';
import MapboxLanguage from '@mapbox/mapbox-gl-language';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

// const initializeRTLTextPlugin = () => {
//     // @ts-ignore - the mapboxgl types don't include the RTL plugin
//     if (!mapboxgl.getRTLTextPluginStatus || mapboxgl.getRTLTextPluginStatus() === 'unavailable') {
//         // @ts-ignore
//         mapboxgl.setRTLTextPlugin(
//             'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
//             null!,
//             true // Lazy load the plugin
//         );
//     }
// };

const MapSection = ({ points }: { points: Point[] }) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);

    const {
        setMapInstance,
        initializeRTLPlugin,
        customizeMapLayers,
        addMarker,
        clearMarkers,
        flyTo,
        easeTo,
        resetMap
    } = useMapStore();

    const center = useMemo(() => {
        const first = points.find(
            p => p.location.lat && p.location.long && !isNaN(Number(p.location.lat)) && !isNaN(Number(p.location.long))
        );
        return first ? [Number(first.location.long), Number(first.location.lat)] : [34.8259390, 32.2337946];
    }, [points]);

    useEffect(() => {
        if (map.current) return;
        initializeRTLPlugin();
        customizeMapLayers();
        mapboxgl.accessToken = MAPBOX_TOKEN;
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: center as LngLatLike,
            zoom: 8,
        });

        // Add this after map is created:
        map.current.on('style.load', () => {
            map.current!.addControl(new MapboxLanguage({ defaultLanguage: 'he' }));
            const mapInstance = map.current!;
            mapInstance.getStyle().layers?.forEach(layer => {
                if (layer.type === 'symbol' && layer.layout && 'text-field' in layer.layout) {
                    mapInstance.setLayoutProperty(layer.id, 'text-field', [
                        'coalesce',
                        ['get', 'name:he'],
                        ['get', 'name'],
                        ['get', 'name:en']
                    ]);
                }
            });
        });

        // Add markers for each point
        const markers: mapboxgl.Marker[] = [];
        points.forEach(point => {
            const lat = Number(point.location.lat);
            const lng = Number(point.location.long);
            if (!isNaN(lat) && !isNaN(lng)) {
                // Create a container div for the marker and label
                const markerContainer = document.createElement('div');
                markerContainer.style.display = 'flex';
                markerContainer.style.flexDirection = 'column';
                markerContainer.style.alignItems = 'center';

                // Create the marker icon element using Lucide
                const markerEl = document.createElement('div');
                markerEl.innerHTML = ReactDOMServer.renderToString(
                    <MapPin size={32} strokeWidth={2.5} />
                );
                markerEl.style.display = 'flex';
                markerEl.style.justifyContent = 'center';
                markerEl.style.alignItems = 'center';

                // Create the label element
                const labelEl = document.createElement('div');
                labelEl.textContent = point.title;
                labelEl.dir = 'rtl';
                labelEl.style.direction = 'rtl';
                labelEl.style.fontFamily = 'Heebo, Arial, sans-serif';
                labelEl.style.marginTop = '4px';
                labelEl.style.background = 'white';
                labelEl.style.padding = '8px 12px';
                labelEl.style.borderRadius = '8px';
                labelEl.style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)';
                labelEl.style.fontSize = '14px';
                labelEl.style.whiteSpace = 'nowrap';
                labelEl.style.color = '#222';
                labelEl.style.fontWeight = 'bold';

                // Add marker and label to container
                markerContainer.appendChild(markerEl);
                markerContainer.appendChild(labelEl);

                const marker = new mapboxgl.Marker({ element: markerContainer })
                    .setLngLat([lng, lat])
                    .addTo(map.current!);
                markers.push(marker);
            }
        });

        return () => {
            markers.forEach(marker => marker.remove());
            map.current?.remove();
        };
    }, [center, points]);

    return (
        <div className="w-full h-[524px] rounded-[24px] flex items-center justify-center mb-10 overflow-hidden ">
            <div ref={mapContainer} className="w-full h-full rounded-[24px]" />
        </div>
    );
};

export default MapSection;
