import React, {Component} from 'react'
import Imager from './Imager'
import images from './data/ImagesData'
import './App.css'
class App extends Component {
  state = {
    thumbnails: images.slice(),
    mainContentImage: images.slice(0)
  }

  handleLeftScrollImage = () => {

  }

  handleRightScrollImage = () => {

  }

  handleRandomImage = () => {

  }

  handleThumbnailClick = () => {
    
  }

  render() {
return(
      <div>
      
        <Imager />
      
      </div>
      



)
  }
}

export default App