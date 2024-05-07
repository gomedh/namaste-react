import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div  className=" flex items-center m-4 p-4 w-[300px] rounded-lg hover:cursor-pointer bg-gray-200 h-[500px] hover:bg-gray-300">
           <UserClass name={"Gomedh Tak - Class"} place={"london"} contact={"xcf@gmail.com"} />
        </div>
        </div>
    )
}


export default About;