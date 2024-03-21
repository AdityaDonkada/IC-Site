import React from "react";
import Image from "next/image";

const FeaturesComponent = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col gap-5">
          <div className="space-y-4 max-w-xl">
            <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-700 dark:text-gray-100">
              Feature
            </span>
            <h1 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
              Let's us help you growing your busines
            </h1>
          </div>
          <p className="text-gray-700 dark:text-blackcolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-8 xl:gap-10">
          <div className="md:w-96 lg:w-[26rem] space-y-5 flex flex-col md:py-6">
            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all before:ease-linear before:scale-x-105 before:scale-y-110 before:inset-0 before:bg-gray-100 dark:before:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-blackcolor relative">
                All in one tool
              </h2>
              <p className="relative text-gray-700 dark:text-blackcolor text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ut hic sunt quam enim
              </p>
            </div>
            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all hover:before:ease-linear hover:before:scale-x-105 before:scale-y-110 before:inset-0 hover:before:bg-gray-100 before:dark:hover:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-blackcolor relative">
                Cross plateforme app
              </h2>
              <p className="relative text-gray-700 dark:text-blackcolor text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ut hic sunt quam enim
              </p>
            </div>
            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all hover:before:ease-linear hover:before:scale-x-105 before:scale-y-110 before:inset-0 hover:before:bg-gray-100 before:dark:hover:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-blackcolor relative">
                Croud based app
              </h2>
              <p className="relative text-gray-700 dark:text-blackcolor text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ut hic sunt quam enim
              </p>
            </div>
            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all hover:before:ease-linear hover:before:scale-x-105 before:scale-y-110 before:inset-0 hover:before:bg-gray-100 before:dark:hover:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-blackcolor relative">
                All in one tool
              </h2>
              <p className="relative text-gray-700 dark:text-blackcolor text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ut hic sunt quam enim
              </p>
            </div>
          </div>
          <div className="flex-1 md:h-auto">
            <div
              className="flex-1 relative bg-gradient-to-tr from-sky-100 to-indigo-300 
                  p-6 rounded-lg aspect-[4/2.4] md:aspect-auto md:h-full overflow-hidden"
            >
              <Image
                src="/Teacher-Image.png"
                alt="illustration"
                width={1800}
                height={1200}
                className="wfull hauto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
