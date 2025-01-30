function ServiceCard ({icon, title, text}) {
    return (
     <div className="bg-[#131F22] w-80 h-auto flex flex-col justify-start items-start px-10 py-13 rounded-tl-[20px] rounded-br-[20px]"
     style={{ boxShadow: "30px 30px rgba(254, 229, 181, 0.05)" }}>
        <div className="text-[#FEE5B5]">
            {icon}
        </div>
        <h2 className="my-6 text-2xl font-bold">{title}</h2>
        <p className="text-[#FFFFFF99] leading-6 tracking-wide">{text}</p>
     </div>
    )
}

export default ServiceCard;