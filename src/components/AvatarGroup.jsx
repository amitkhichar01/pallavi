import React, { useState } from "react";

const avatars = [
  {
    id: 1,
    src: "https://media.licdn.com/dms/image/v2/C4E03AQFoR9G7FjaXGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1630072620878?e=2147483647&v=beta&t=EbhuoWkseksel7BQMz6wfuLhkFueMrD36CGC5Rrh4Yo",
    alt: "Avatar 1",
  },
  {
    id: 2,
    src: "https://media.licdn.com/dms/image/v2/C5103AQGhyosPQ-EhLQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1562049471409?e=1743033600&v=beta&t=zbT5XXva8h7Et65srCqxzXPNO9C9pQYZuVZMjizkGH4",
    alt: "Avatar 2",
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?ga=GA1.1.2114907676.1736685557&semt=ais_hybrid",
    alt: "Avatar 3",
  },
  
];

const testimonials = [
    {
      id: 1,
      bgColor: "bg-[#0f0f0ffb]",
      text: "Pallavi Salian provided invaluable insights and strategies for our expansion. She developed a detailed marketing roadmap and delivered a comprehensive report outlining essential website changes to boost user engagement and conversions.",
      name: "David Bruno",
      position: "Founder, International Marking group of Utica",
    },
    {
      id: 2,
      bgColor: "bg-[#0f0f0ffb]",
      text: "Pallavi Salian not only helped us design a sleek and intuitive app and website but also managed our social media presence with creativity and precision. Her designs and strategies significantly enhanced our online visibility and user engagement.",
      name: "Amit Vora",
      position: "Founder & CEO, Waya Financial Technologies",
    },
    {
      id: 3,
      bgColor: "bg-[#0f0f0ffb]",
      text: "Working with Pallavi Salian was a game-changer for our brand. They took the time to understand our vision and transformed it into a sleek, user-friendly design. The final product not only exceeded our expectations but also boosted user engagement by 40%.",
      name: "Umesh Poojary",
      position: "Founder, Shobhana Electronics",
    },
  ];
const AvatarGroup = () => {
  const [selectedId, setSelectedId] = useState(3); // Default selected avatar (center)

  const handleAvatarClick = (id) => {
    if (id !== selectedId) {
      setSelectedId(id);
    }
  };

  return (
    <div>
      <div className=" relative flex items-center justify-center space-x-4 p-8 rounded-lg">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            onClick={() => handleAvatarClick(avatar.id)}
            className={`relative h-24 w-24 rounded-[0.75rem] overflow-hidden transition-all duration-50 cursor-pointer ${
              selectedId === avatar.id
                ? "p-1 bg-gradient-to-tr from-purple-500 to-orange-300 shadow-xl"
                : "filter blur-[1px]  hover:blur-[0.5px]"
            }`}
          >
            <img
              src={avatar.src}
              alt={avatar.alt}
              className={`object-cover h-full w-full rounded-[0.75rem] transition-transform duration-50 ${
                selectedId === avatar.id ? "transform scale-105" : "grayscale"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="relative flex justify-center mt-10 h-[200px]">
      {testimonials.map((testimonial) => (
         <div key={testimonial.id} className={`absolute top-0 w-1/2 ${testimonial.bgColor} ${selectedId === testimonial.id ? " z-10 " : "z-0 opacity-0"}`}>
         <p className="text-[#d5d4d9] tracking-wider leading-7  text-center">
           &quot;{testimonial.text}&quot;
         </p>

         <div className="text-center mt-5">
           <h5 className="text-lg">{testimonial.name}</h5>
           <h6 className="text-[#cbcbcb] text-sm tracking-wide">{testimonial.position}</h6>
         </div>
       </div>
      ))};
      </div>
    </div>
  );
};

export default AvatarGroup;
