import React, {Component} from 'react'
import images from './data/ImagesData'


class Imager extends Component {
  state = {
    thumbnails: images.slice(),
    mainContentImage: images.slice(0)
  }

  render() {
    return(
      <div>
      <h1>Hello Imager Nice to meet you 1234567890</h1>
      </div>
    )
  }
}

export default Imager