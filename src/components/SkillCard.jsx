import { FaRegCircleDot } from "react-icons/fa6";

function SkillCard ({text}) {
    return (
        <div className="bg-[#131F22] py-17 px-11 flex flex-col justify-center items-center rounded-tl-[20px] rounded-br-[20px]"
        style={{ boxShadow: "20px 20px rgba(254, 229, 181, 0.05)" }}
        >
                <FaRegCircleDot className="text-[#FEE5B5] w-[2.4rem] h-[1.9rem] "/>
                <h3 className="text-xl font-bold pt-7">{text}</h3>
        </div>
    )
}

export default SkillCard;