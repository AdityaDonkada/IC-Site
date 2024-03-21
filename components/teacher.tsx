import Image from "next/image";

const Classes = () => {
  return (
    <section className="py-24">
      <div className="w-[100rem] mx-auto px-5 sm:px-10 md:px-12 flex flex-col md:flex-row gap-x-[13rem]">
        <div className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300">
          <h1 className="text-gray-900 dark:text-blackcolor font-semibold text-2xl sm:text-3xl md:text-4xl">
            Learn with Specialized Courses
          </h1>
          <p className="text-xl text-blackcolor">
            Stay ahead of the curve with our up-to-date courses, designed to
            keep you abreast of the latest technology trends. Prepare yourself
            for the future by learning from our comprehensive curriculum,
            ensuring you're equipped with the skills and knowledge needed to
            thrive in tomorrow's tech-driven world.
          </p>
          <ul className="space-y-4 text-2xl text-blackcolor">
            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-2xl flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-blackcolor">
                ✓
              </span>
              Personalized
            </li>
            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-2xl flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-blackcolor">
                ✓
              </span>
              Completely Free
            </li>
            <li className="flex items-center gap-x-4 ">
              <span className="w-5 h-5 text-2xl flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-blackcolor">
                ✓
              </span>
              Flexible
            </li>
            <li className="flex items-center gap-x-4">
              <span className="w-5 h-5 text-2xl flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-blackcolor">
                ✓
              </span>
              Worldwide
            </li>
          </ul>
        </div>
        <div className="flex md:flex-1">
          <Image
            src="/Teacher-Image.png"
            width={600}
            height={600}
            alt="Picture of the author"
            className="w-[400rem] h-[50rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Classes;
