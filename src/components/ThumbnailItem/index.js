// Write your code here.

import './index.css'

const ThumbnaillItem = props => {
  const {eachItem, isActive, displayClickedImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachItem
  const thumbnailImages = isActive ? 'active' : 'nonActive'

  const onChangeImage = () => {
    displayClickedImage(id)
  }

  return (
    <li>
      <button type="button" className="thumblinebutton">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailImages}
          onClick={onChangeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnaillItem
