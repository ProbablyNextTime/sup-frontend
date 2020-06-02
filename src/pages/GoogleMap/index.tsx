import * as React from "react"
import GoogleMapReact from "google-map-react"

interface Coordinates {
  lat: number
  lng: number
}

const AnyReactComponent = ({ text }: any) => <div>{text}</div>

const SimpleMap = () => {
  const center: Coordinates = { lat: 11.0168, lng: 76.9558 }
  const zoom = 11

  return (
    <div style={{ height: "calc(100% - 85px)", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY || "" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={11.0168} lng={76.9558} text="My Marker" />
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
