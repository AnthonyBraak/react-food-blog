export default function ImproveSkills(){
    const list = [
        "Learn new recepies",
        "Create your own recepies",
        "Get cooking tips",
        "Impress others",
        "Eat healthier",
    ]

    return(
        <div className="section skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Level Up Your Cooking Skills</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">Sign up!</button>
            </div>
        </div>
    )
}