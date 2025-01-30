function TestimonialCard ({name, role, msg}) {
    return(
        <div className="bg-[#131F22] py-12 px-15 rounded-tl-[20px] rounded-br-[20px] text-center"
        style={{ boxShadow: "30px 30px rgba(254, 229, 181, 0.05) "}}>
            <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <h3 className="text-[#FFFFFF99]">{role}</h3>
            </div>
            <p className="mt-6 text-lg text-[#FFFFFF99] leading-7 tracking-wide">
               &#39;&#39;{msg}&#39;&#39;
            </p>
        </div>
    )
}

export default TestimonialCard;