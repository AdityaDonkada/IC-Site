import React from "react";

const TeamComponent = () => {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Aditya Donkada",
      title: "CTO",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Ayaan Sidky",
      title: "CEO",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Aryan Wadhera",
      title: "COO",
    },
  ];

  return (
    <section className="py-14 text-blackcolor text-2xl ml-[54rem]">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-20 h-20 mx-auto">
                  <img
                    src={item.avatar}
                    className="w-full h-full rounded-full"
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
