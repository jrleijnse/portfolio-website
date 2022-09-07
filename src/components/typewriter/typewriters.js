import Typewriter from "typewriter-effect";

const Typewriters = () => {
  return (
    <h1 className="tc mt5 mb0">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("</Jeroen Leijnse>").start();
        }}
      />
    </h1>
  );
};

export default Typewriters;
