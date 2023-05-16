import { LatLng, Product, StoreCard } from "./base"

// 업소 자세한 정보 요청
export type StoreDetailResponse = {
  storeInfo: string
  storeNumber: string
  storeWayToCome: string
  storeUrl: string
  products: Product[]
}

// 매장명 또는 상품 검색 요청
export type StoreSearchResponse = StoreCard[]
export type StoreSearchRequestBody = {
  searchInput: string
  address: string
  page: number
}

// 홈에서 더보기 요청
export type NeighborhoodsStoreResponse = StoreCard[]
export type NeighborhoodsStoreRequestBody = {
  userPlace: LatLng
  address: string
  page: number 
}

// 지도에서 현 위치 찾기
export type CurrentPlaceStoreResponse = StoreCard[]
export type CurrentPlaceStoreRequestBody = {
  leftUpPlace: LatLng
  rightDownPlace: LatLng
  userPlace: LatLng
  storeName: string | null
  storeType: number | null
  page: number
}


// 검색 페이지에서 카테고리 선택
export type CategorySearchResponse = StoreCard[]
export type CategorySearchRequestBody = {
  storeType: number
  address: string
  page: string
}


// 네이버 geocoding 
export interface GeocodeReverseResponse {
  addresses: Address[]
  errorMessage: string
  meta: Meta
  status: string
}

interface Address {
  addressElements: AddressElement[]
  roadAddress: string
  jibunAddress: string
  englishAddress: string
  x: string
  y: string
}

interface Meta {
  totalCount: number
  page: number
  count: number
}

interface AddressElement {
  types: string[]
  longName: string
  shortName: string
  code: string  
}

