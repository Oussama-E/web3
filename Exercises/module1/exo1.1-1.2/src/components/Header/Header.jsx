import logo from './stack_img.png'

const Header = (props) => {

    console.log(props)
    return (
      <div>
        <img src= {logo} ></img>
        <h1>
          {props.course}
        </h1>
      </div>
    )
  }

  export default Header