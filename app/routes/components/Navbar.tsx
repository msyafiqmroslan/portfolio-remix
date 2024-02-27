import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar text-white">
      <div className="flex flex-1 justify-start items-center">
        <img className="h-24 m-4 cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <p className="m-2 hover:text-gray-300">
          <a href="#overview">About Me</a>
        </p>
        <p className="m-2 hover:text-gray-300">
          <a href="#experiences">Experience</a>
        </p>
        <p className="m-2 hover:text-gray-300">
          <a href="#skills">Skills</a>
        </p>
        <p className="m-2 hover:text-gray-300">
          <a href="#educations">Educations</a>
        </p>
        <p className="m-2 hover:text-gray-300">
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <button className="  bg-white text-gray-700 font-bold m-10 p-4 border rounded-full hover:bg-gray-300 hover:text-gray-700">Hire Me!</button>
      </div>
    </nav>
  );
}
