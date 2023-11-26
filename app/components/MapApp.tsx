"use client";

import React, { useState } from 'react'
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet"

import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import eventData from '../HistoryEvents';

import FlyToMarker from './FlyToMarker';
import Filter from './Filter';

const defailtPosition:[number,number]=[51.505,-0.09]

export interface historicalEvent{
    id:number;
    title:string;
    description:string;
    position:[number,number];
    category:string
}
const MapApp = () => {


    const [favourites,setFavourites]=useState<number[]>(()=>{
        const savedFav=localStorage.getItem('favourites');

        return savedFav? JSON.parse(savedFav):[]
    })


    const [selectedCategory,setSelectedCategory]=useState<string | null>(null)
    const [activeEvent,setActiveEvent]=useState<historicalEvent | null>(null)

    const handleFav=(eventId:number)=>{
        let updated=favourites.filter((id)=>id!==eventId)

        if(!favourites.includes(eventId)){
            updated=[eventId,...updated];
        }

        setFavourites(updated)
        localStorage.setItem('favourites',JSON.stringify(updated))
    }

    const icon:Icon=new Icon({
        iconUrl:"marker.svg",
        iconSize:[25,41],
        iconAnchor:[12,41]
    })

    const emptyStar=<i className='fa-regular fa-star'></i>
    const fullStar=<i className='fa-solid fa-star' style={{color:'#fdc401'}}></i>



    const HandlelistItemClick=(eventId:number )=>{
        const event=eventData.find((event)=>event.id===eventId)

        if(event){
            setActiveEvent(event)
        }
    }
   
  return (
    <div className='content'>
    <div className="flex flex-col gap-8 w-4/5 h-full">
      <div className="h-12">
        <Filter
        SetselectedCategory={setSelectedCategory}
        />
      </div>
        <MapContainer center={defailtPosition}
        zoom={3} 
        className="map-container"
        >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        
            {
                eventData.filter((event)=>!selectedCategory || event.category===selectedCategory).map((e)=>{
                    return(
                       <Marker key={e.id} position={e.position} icon={icon}
                       eventHandlers={{click:()=>{
                        setActiveEvent(e)
                       },}}/>
                    )
                })
            }

            {
                activeEvent &&  <Popup position={activeEvent.position}>
                <div className='popup-inner'>
                    <h2 className='popup-inner__title'>{activeEvent.title}</h2>
                </div>
                <p className='popup-inner__description'>{activeEvent.description}</p>
                <button className='popup-inner__button' onClick={()=>handleFav(activeEvent.id)}>
                    {favourites.includes(activeEvent.id)?<span>{fullStar} UnFavourite</span>:<span>{emptyStar} Favourite</span>}
                    </button>
                </Popup>
            }
            {
                activeEvent && <FlyToMarker position={activeEvent.position} zoomLevel={15}/>
            }
        </MapContainer>
    </div>

    <div className="liked-events">
        <h2 className='liked-events__title'>
            <i className='fa-solid fa-star'></i>
            Favourite Events
        </h2>
        <ul>
            {
                favourites.map((id)=>{
                    return eventData.find((event)=>event.id===id);
                    
                }).map((event)=>{
                    return(
                        <li className='liked-events__events' key={event?.id}
                        onClick={()=>HandlelistItemClick(event?.id as number)}
                        >
                            <h3>{event?.title}</h3>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  </div>
  )
}

export default MapApp