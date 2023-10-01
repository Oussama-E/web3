import Part from '../Part/Part';

const Content = ({part, exercises}) => {

    console.log('Content: part=', part, 'exercises=', exercises)
    return (
      <div>
        <Part part = {part} exercises = {exercises} />
      </div>
    )
  }

  export default Content