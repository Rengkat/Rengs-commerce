import React from "react";

function Contact() {
  return (
    <div>
      <div className="h-[20vh] relative w-full flex justify-center items-center">
        <div className="absolute inset-0 bg-green-900 opacity-70 "></div>
        <h1 className="font-bold text-4xl text-white z-30">Contact Us</h1>
      </div>
      <div className="flex">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cum
            accusamus perferendis, dolorem nobis cumque unde illum, animi quos
            corporis maiores vitae suscipit consequatur doloremque vel nemo
            beatae illo cupiditate!
          </p>
          <form>
            <div className="label"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
