import type { AxiosInstance, AxiosResponse } from 'axios'
import type { keywordSearchInnerParams, SearchResult } from './types'
import axios from 'axios'
import config from '../config'

export class AmapClient {
  private instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: config.amap.baseUrl,
    })
  }

  keywordSearch(
    params: keywordSearchInnerParams
  ): Promise<AxiosResponse<SearchResult>> {
    return this.instance.get(config.amap.apiPrefix.keywordSearch, {
      params: {
        ...params,
        key: config.amap.key,
        show_fields: 'children,business,photos'
      },
    })
  }
}

let client: AmapClient

export function getAmapClient() {
  if (!client) {
    client = new AmapClient()
  }

  return client
}
