import Image from "next/image";

const classNamees = () => {
  return (
    <section className="py-20 text-blackcolor">
      <div className="w-auto mx-[10rem] px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-gray-900 dark:text-blackcolor font-semibold text-4xl">
            What we offer
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-2xl">
            Don't see something that you need help with? Our mission is to help you,
            so let us know!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
 
            <div className="mt-6 space-y-4 relative">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-blackcolor">
                Exploring Computer Science
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-md">
                Exploring Computer Science is an engaging course designed for
                young learners, offering a fun introduction to computer science
                concepts. Through interactive activities on code.org, students
                delve into the basics of JavaScript programming, fostering early
                interest and understanding in the world of computing.
              </p>
            </div>
            <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
          </div>
          <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
            
            <div className="mt-6 space-y-4 relative">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-blackcolor">
                AI Mastery
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-md">
                Our bi-monthly AI release offers a strategic roadmap for
                maximizing AI's benefits. Delving into subject-specific AI
                tools, we empower users to leverage AI effectively. Each edition
                introduces a new AI tool per subject, providing actionable
                insights for enhanced productivity and problem-solving. Through
                clear explanations and practical examples, we demystify AI,
                enabling individuals to unlock its full potential for growth.
              </p>
            </div>
            <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
          </div>
          <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
           
            <div className="mt-6 space-y-4 relative">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-blackcolor">
                Start a Chapter
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-md">
                Elevate your school's educational landscape by applying for an
                Impact Code Club. Joining forces with us, your school will gain
                access to a transformative program aimed at fostering digital
                literacy, critical thinking, and problem-solving skills among
                students
              </p>
            </div>
            <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default classNamees;
