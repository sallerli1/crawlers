export interface PoiBaseInfo {
  id: string
  name: string
  location: string
  type: any // 兴趣点类型
  typecode: string // 兴趣点类型编码
  pname: string // poi所属省份
  cityname: string // poi所属城市
  adname: string // poi所属区县
  address: string
  pcode: string
  adcode: string
  citycode: string
}

export interface PoiChildrenInfo {
  id: string
  name: string
  location: string
  address: string
  subtype: string
  typecode: string
}

export interface PoiBusinessInfo {
  business_area: string
  opentime_today: string
  opentime_week: string
  tel: string
  tag: string
  rating: string
  cost: string
  parking_type: string
  alias: string
}

export interface PoiIndoorInfo {
  indoor_map: '0' | '1'
  cpid: string
  floor: string
  truefloor: string
}

export interface PoiNaviInfo {
  navi_poiid: string
  entr_location: string
  exit_location: string
  gridcode: string
}

export interface PoiPhotoInfo {
  title: string
  url: string
}

export interface PoiInfo {
  poi: PoiBaseInfo
  children: PoiChildrenInfo
  business: PoiBusinessInfo
  indoor: PoiIndoorInfo
  navi: PoiNaviInfo
  photos: PoiPhotoInfo
}

export interface Suggestion {
  keywords: string[]
  cities: {
    name: string
    num: number
    citycode: string
    adcode: string
  }[]
}

export interface SearchResult {
  status: 0 | 1
  info: string
  count: number
  suggestion: Suggestion
  pois: PoiInfo[]
}

export interface KeywordSearchParams {
  key: string
  keywords?: string
  types?: string
  region?: string
  show_fields?: string
  city_limit?: boolean
  page_size?: number
  page_num?: number
  sig?: string
  callback?: string
}

export type keywordSearchInnerParams = Omit<KeywordSearchParams, 'key' | 'show_fields'>