'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { Point } from './PointCard';
import ReactDOMServer from 'react-dom/server';
import { MapPinned, MapPin } from 'lucide-react';

const MapSection = ({ points }: { points: Point[] }) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);

    const center = useMemo(() => {
        return [Number(points[0]?.location?.long), Number(points[0]?.location?.lat)];
    }, [points]);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: center as LngLatLike,
            zoom: 8,
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