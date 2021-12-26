export default {
  amap: {
    baseUrl: 'https://restapi.amap.com/v5/place/',
    key: '1e900f89a96e961d523c5f60bbc221e7',
    apiPrefix: {
      keywordSearch: 'text',
      around: 'around',
      polygon: 'polygon'
    },
    cityCodes: {
      changsha: '0731'
    },
    barTypes: {
      // nightClub: '080301',
      // disco: '080303',
      pub: '080304'
    }
  }
} as const

// https://restapi.amap.com/v3/place/text?key=1e900f89a96e961d523c5f60bbc221e7&city=0731&types=080301