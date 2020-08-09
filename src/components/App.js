import React, {Component} from 'react'
import Imager from './Imager'
import images from './data/ImagesData'
import './App.css'
class App extends Component {
  state = {
    thumbnails: images.slice(),
    mainContentImage: images[0]
  }

  handleLeftScrollImage = () => {

  }

  handleRightScrollImage = () => {

  }

  handleRandomImage = () => {
    const imageNum = Math.ceil(Math.random() * 12)
    this.setState ({
      mainContentImage: `/images/${imageNum}.jpg`
    })
  }

  handleThumbnailClick = (imageTxtLink) => {

    this.setState ({
      mainContentImage: imageTxtLink
    })
  }

  render() {
return(
  <div>
  
  <Imager thumbnails={this.state.thumbnails} handleThumbnailClick={this.handleThumbnailClick} mainContentImage={this.state.mainContentImage} handleRandomImage={this.handleRandomImage}/>
  
  </div>






)
  }
}

export default App