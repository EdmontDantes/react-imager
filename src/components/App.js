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
    const valueOfCurrImage = this.state.mainContentImage
    let extractValueCurrImageNum = Number(valueOfCurrImage.replace('/images/', '').replace('.jpg', ''))
    let newCurrNum = (extractValueCurrImageNum === 1) ? 12 : extractValueCurrImageNum - 1
    this.setState({
      mainContentImage: `/images/${newCurrNum}.jpg` 
    })

  }

  handleRightScrollImage = () => {
    const valueOfCurrImage = this.state.mainContentImage
    let extractValueCurrImageNum = Number(valueOfCurrImage.replace('/images/', '').replace('.jpg', ''))
    let newCurrNum = extractValueCurrImageNum > 11 ? 1 : extractValueCurrImageNum + 1
    this.setState({
      mainContentImage: `/images/${newCurrNum}.jpg` 
    })
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
  
  <Imager thumbnails={this.state.thumbnails} 
          handleThumbnailClick={this.handleThumbnailClick} 
          mainContentImage={this.state.mainContentImage} 
          handleRandomImage={this.handleRandomImage} 
          handleLeftScrollImage={this.handleLeftScrollImage}
          handleRightScrollImage={this.handleRightScrollImage} />
  
  </div>






)
  }
}

export default App