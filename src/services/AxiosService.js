// @ts-ignore
import axios from 'axios'

export const marsApi = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=kagd23pJg7fGksfClu5xwbzXOnYxNthFr4fm2k5n',
  timeout: 3000
})
