import React from "react";
import about from "../../assets/about_us.jpg";
import pic1 from "../../assets/lgbtq1.jpg";
import pic2 from "../../assets/lgbtq2.jpg";
import pic3 from "../../assets/lgbtq3.jpg";
import pic4 from "../../assets/lgbtq4.jpg";
const About = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <div className="md:flex gap-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-red-700 text-4xl font-bold">About Us</h1>
          <p className="py-8 text-justify">
            Welcome to Viracore.ca – Your Gateway to a Connected World! At
            Viracore.ca, we believe in the power of meaningful connections that
            transcend boundaries, creating a vibrant and inclusive online
            community. Our platform is designed to be more than just a social
            networking website; it's a virtual space where individuals from
            diverse backgrounds come together to share, inspire, and build
            lasting relationships.
          </p>
          <p>
            Founded on the principles of innovation, inclusivity, and
            user-centricity, Viracore.ca is committed to providing a dynamic and
            secure online environment for our members. Whether you're here to
            reconnect with old friends, expand your professional network, or
            forge new friendships, Viracore.ca is the place where your social
            journey begins.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img className="mx-auto" src={about} alt="" />
        </div>
      </div>

      {/* <div className="text-center text-white my-16 px-5 md:px-10 py-10 bg-gradient-to-r from-[#FF5200] from-20% via-[#0FBA00] via-40% to-[#660191] to-80%">
        <h1 className="text-xl">CONNECTING FOR FUN</h1>
        <p className="text-xl mt-5">
          We believe connnecting should be fun ! with discussion cummunities and
          pride events , you can find your people without tiring out your thumbs
          .
        </p>
      </div> */}
    </div>
  );
};

export default About;
