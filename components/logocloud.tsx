import Image from "next/image";
const LogoCloud = () => {
  return (
    <div className=" pt-[4rem]">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <p className="mb-[1rem] text-center text-lg text-blackcolor md:text-xl">
          <span className="text-blackcolor">Thank You to our Partners</span>
          <br className="hidden md:block" />
        </p>
        <div className="mt-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {/* LOGO 4 */}
            <li>
              <Image
                src="/amazon.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="rounded-lg"
              />
            </li>
            <li>
              <Image
                src="/github.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="rounded-lg"
              />
            </li>
            <li>
              <Image
                src="/brightsparks.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="rounded-lg"
              />
            </li>
            <li>
              <Image
                src="/google.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="rounded-lg"
              />
            </li>
            {/* ... More Logos */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
