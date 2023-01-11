import './index.css'

const RenderListImage = props => {
  const {eachItem, ImgClicked} = props
  const {imageUrl, id, category} = eachItem

  const ImgClickedCall = () => {
    ImgClicked(id)
  }

  return (
    <li className="imgINlist">
      <button type="button" onClick={ImgClickedCall}>
        <img src={imageUrl} className="imgSmall" alt={category} />
      </button>
    </li>
  )
}

export default RenderListImage
