import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="md:pt-16 pt-14">
        <Image
          src="/hero.png"
          width={1920}
          height={1080}
          alt="hero-image"
          className="object-cover"
        />
      </div>
      <div className="w-full px-4">
        <div className="container mx-auto shadow-xl py-6 rounded-md bg-[#11101d] text-white text-center my-6">
          <p className="text-sm md:text-lg">
            At <span className="text-blue-600">Vision</span>, we understand that
            a home is not just a place to live; it's a personal sanctuary, a
            space that reflects your taste, lifestyle, and dreams. That's why we
            are dedicated to crafting homes that are not only beautiful and
            functional but also tailored to meet the unique needs and
            aspirations of each of our clients. With a commitment to excellence,
            innovation, and personalized service, we are here to bring your
            dream home into reality.
          </p>
        </div>
      </div>
    </>
  );
};
