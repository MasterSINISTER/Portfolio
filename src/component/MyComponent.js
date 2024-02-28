import TypeIt from "typeit-react";
const MyComponent = () => {
  return (
    <TypeIt
      element="#header h1 #title span"
      options={{
        speed: 75,
        startDelay: 2000,
        waitUntilVisible: true,
        loop: false,
        lifeLike: true,
        deleteSpeed: 75
      }}
    />
  );
};

