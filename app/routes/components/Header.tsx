import header from "../assets/header.jpg";

export default function Header() {
  return (
    <div className="relative">
      <img
        className="w-full h-96 overflow-hidden object-cover"
        src={header}
        alt="header"
      />
      <div className="absolute w-full top-0 text-white text-center text-8xl pt-8">
        <p>This is My Header</p>
      </div>
      <div className="absolute w-full top-0 text-white text-center text-xl pt-40 p-10">
        <p className="font-medium">This is below My Header. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  );
}
