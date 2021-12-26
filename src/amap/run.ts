import { writeFileSync } from 'fs'
import { getCityBarInfo } from './get-bar-info'

(async function() {
  const barinfos = await getCityBarInfo()

  console.log(barinfos.changsha.length, 11111111)

  writeFileSync('./result.json', JSON.stringify(barinfos))
})()