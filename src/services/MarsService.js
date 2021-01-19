import { AppState } from '../AppState'
import { marsApi } from './AxiosService'

class MarsService {
  async searchMars (query) {
    try {
      const res = await marsApi.get(query)
      console.log(res)
      Appstate.pictures = res.data.results
    } catch (error) {
      console.error(error)
    }
  }

  selectPicture (picture) {
    Appstate.activePicture = picture
  }
}

export const marsService = new MarsService()
