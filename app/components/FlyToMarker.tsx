import { useMap } from "react-leaflet"
import { useEffect } from "react"

const FlyToMarker=({position,zoomLevel}:any)=>{
    const map=useMap()


    useEffect(() => {
        if(position){
            const zoom=zoomLevel??map.getZoom();
            map.flyTo(position,zoom,{
                duration:1
            })
        }
    }, [map,position,zoomLevel])

    return null
}

export default FlyToMarker