export const GifItem = ({id, title, url}) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}s</p>
    </div>
  )
}

