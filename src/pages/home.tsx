import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkillSection";
import Quote from "../components/QuoteSection";
import Chef from "../components/ChefSection";

export default function Home(){
    return(
        <div>
            <HeroSection />
            <ImproveSkills />
            <Quote />
            <Chef />
        </div>
    )
}