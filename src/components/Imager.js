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
      
      </div>
    )
  }
}