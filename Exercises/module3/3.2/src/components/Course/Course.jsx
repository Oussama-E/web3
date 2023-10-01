import Content from "components/Content/Content";
import Header from "components/Header/Header";

const Course = ({ course }) => {
    console.log('course=', course);
    return (
    <div>   
        <Header key={course.id} name={course.name} />
        {course.parts.map(part =>
            <Content key={part.id} part={part.name} exercises={part.exercises}/>
            )}
    </div>
    )
}

export default Course