import type { PoiInfo } from './types'
import { getAmapClient } from './http-client'
import config from '../config'

export async function getCityBarInfo() {
  const {
    amap: { cityCodes },
  } = config
  const citynames = Object.keys(cityCodes) as (keyof typeof cityCodes)[]

  return (await Promise.all(citynames.map(cityname => getAllSingleCityBarInfo(cityCodes[cityname])))).reduce(
    (res, infos, idx) => {
      res[citynames[idx]] = infos
      return res
    },
    {} as Record<keyof typeof cityCodes, PoiInfo[]>,
  )
}

export function getSingleCityBarInfo(citycode: string, page = 1) {
  // return Promise.all(
  //   Object.values(config.amap.barTypes).map(types =>
  //     getAmapClient().keywordSearch(
  //       {
  //         types,
  //         page_num: page,
  //         region: citycode,
  //         page_size: 25,
  //       }
  //     ),
  //   ),
  // ).then(resArr => {
  //   return resArr.reduce((sr, res) => {
  //     if (res.status === 0) {
  //       console.log('error: ', res.statusText)
  //       return sr
  //     }

  //     return [...sr, ...res.data.pois]
  //   }, [] as PoiInfo[])
  // })
  return getAmapClient().keywordSearch({
    // types: Object.values(config.amap.barTypes).join('|'),
    keywords: '酒吧',
    page_num: page,
    region: citycode,
    page_size: 25,
  }).then((res) => {
    return res.data.pois
  })
}

async function getAllSingleCityBarInfo(citycode: string) {
  let page = 1
  let res: PoiInfo[] = []
  while (true) {
    const infos = await getSingleCityBarInfo(citycode, page)
    if (infos.length > 0) {
      res = [...res, ...infos]
      page++
    } else {
      break
    }
  }

  console.log('page', page)

  return res
}
