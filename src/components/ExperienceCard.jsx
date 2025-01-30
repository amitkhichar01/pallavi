function ExperienceCard({ role, companyName, year, location }) {
  return (
    <div
      className="bg-[#131F22] w-full h-auto py-15 mb-15 flex flex-row justify-evenly items-center rounded-tl-[20px] rounded-br-[20px]"
      style={{ boxShadow: "20px 20px rgba(254, 229, 181, 0.05)" }}
    >
      <div>
        <h4 className="text-[#FEE5B5] font-bold mb-3">{role}</h4>
        <h3 className="text-xl font-bold">{companyName}</h3>
      </div>
      <div>
        <h4 className="text-[#FEE5B5] font-bold mb-3">{year}</h4>
        <h4 className="font-bold">{location}</h4>
      </div>
    </div>
  );
}

export default ExperienceCard;
