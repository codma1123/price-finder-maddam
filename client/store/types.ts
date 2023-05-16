

// 비동기 관련 타입

import { GeocodeReverseResponse } from "~/types/api"
import { LatLng, StoreCard, StoreDetail } from "~/types/base"

export type Effect<T = any> = {  
  /**
   * 요청할 비동기 함수입니다.
   * @param arg 비동기 함수에 넣을 인자입니다.
   */
  callback: (arg?: any) => Promise<T>

  /**
   * 요청된 결과를 통해 행할 추가 작업입니다.
   * @param result callback 비동기함수에서 반환한 결과값입니다.
   */
  onLoaded?: (result: any) => void | null
  
  /**
   * 에러 처리 리터럴입니다.
   * @param error 
   */
  onError?: ((error: unknown | undefined) => void) | null
}


type AsyncState<T = any, E = unknown> = {
  data: T
  loading: boolean
  error: E
}

type StateTypes = LatLng | StoreCard[] | StoreDetail | string | GeocodeReverseResponse


// 비동기 상태들
type AsyncStates = {
  currentPosition: AsyncState<LatLng>,  // 현재 위치
  storeCards: AsyncState<StoreCard[]>,  // 업소 목록
  detailCard: AsyncState<StoreDetail>   // 업종 상세
  currentDoro: AsyncState<GeocodeReverseResponse>    // 현재 주솟값(도로명)
}

export {  
  StoreCard,  
  AsyncState,
  AsyncStates,
  StateTypes
}