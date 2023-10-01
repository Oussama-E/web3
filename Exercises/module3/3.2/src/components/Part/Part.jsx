const Part = ({part, exercises}) => {

    console.log('Part: part= ', part, 'exercises=', exercises)
    return (
      <div>
          <p>{part} {exercises}</p> 
      </div>
    )
  }

  export default Part