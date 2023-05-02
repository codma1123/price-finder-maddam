export type ZoomType = 'in' | 'out'
export type Map = naver.maps.Map
export type Marker = naver.maps.Marker
export type MapOptions = naver.maps.MapOptions
export type InfoWindow = naver.maps.InfoWindow
export type InfoWindowOptions = naver.maps.InfoWindowOptions

type MarkerSize = naver.maps.Size | naver.maps.SizeLiteral
type ZoomControlOptions = naver.maps.ZoomControlOptions


const zoomControlStyleMap = Object.freeze({
  "SMALL": 2,
  "LARGE": 3  
})

const zoomControlPositionMap = Object.freeze<Record<string, number>>({
  "CENTER": 0,
  "TOP_LEFT": 1,
  "TOP_CENTER": 2,
  "TOP_RIGHT": 3,
  "LEFT_CENTER": 4,
  "LEFT_TOP": 5,
  "LEFT_BOTTOM": 6,
  "RIGHT_TOP": 7,
  "RIGHT_CENTER": 8,
  "RIGHT_BOTTOM": 9,
  "BOTTOM_LEFT": 10,
  "BOTTOM_CENTER": 11,
  "BOTTOM_RIGHT": 12,
})

const useMapOptions = () => {

  const ZOOM_CONTRAL_OPTIONS: ZoomControlOptions = {
    style: zoomControlStyleMap.SMALL,
    position: zoomControlPositionMap.TOP_RIGHT,
  }

  const DEFAULT_ZOOM_OPTIONS: MapOptions = {
    scaleControl: false,
    logoControl: false,
    mapDataControl: false,
    zoomControl: false,
    zoomControlOptions: ZOOM_CONTRAL_OPTIONS,
    minZoom: 6,
    zoom: 13
  }

  const DEFAULT_MARKER_SIZE: MarkerSize = {
    width: 100,
    height: 20
  }

  const DEFAULT_WINDOWINFO_OPTIONS: Omit<InfoWindowOptions, 'position' | 'content'> = {
    borderWidth: 0,
    disableAnchor: false,
    anchorSize: {
      width: 0,
      height: 0
    },
  }

  return {
    DEFAULT_ZOOM_OPTIONS,
    DEFAULT_MARKER_SIZE,
    DEFAULT_WINDOWINFO_OPTIONS,
  }
}

export default useMapOptions

