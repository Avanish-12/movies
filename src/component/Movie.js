

const Movie = (props) => {
  return (
    <div className='movie'>
        <img src={props.img}  alt=""/>
        <p>{props.title}</p>
        <p>Year:{props.year}</p>
        <a href={props.link}>Go To Your Movie</a>
    </div> 
  )
}

export default Movie