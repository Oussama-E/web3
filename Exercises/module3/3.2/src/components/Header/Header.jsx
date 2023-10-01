import logo from './stack_img.png'

const Header = ({name}) => {

    console.log('Header: name=', {name})
    return (
      <div>
        <img src= {logo} ></img>
        <h1>
          {name}
        </h1>
      </div>
    )
  }

  export default Header