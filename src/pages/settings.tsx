import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

type CSSSettings = {
  "--background-color": string;
  "--background-light": string;
  "--primary-color": string;
  "--shadow-color": string;
  "--text-color": string;
  "--text-light": string;
  "--font-size": string;
  "--animation-speed": number;

  [key: string]: string | number;
};
const LOCAL_STORAGE_KEY = "myAppSettings";

export default function Settings(){
    const [settings, setSettings] = useState<CSSSettings>(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (saved) {
            try {
                return JSON.parse(saved) as CSSSettings
            } catch {

            }
        }
        return {
            "--background-color": "#ffffff",
            "--background-light": "#ffffff",
            "--primary-color": "rgb(255, 0, 86)",
            "--shadow-color": "rgba(0, 0, 0, 0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757",
            "--font-size": "16px",
            "--animation-speed": 1
        }
    })
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(settings))
    }, [settings])

    useEffect(() => {
        if (settings["--background-color"] === "#ffffff") {
        setTheme("light");
        } else {
        setTheme("dark");
        }
        const primaryIndex = primaryColors.findIndex(
            (color) => color === settings["--primary-color"]
        )
        if (primaryIndex !== -1) setPrimaryColor(primaryIndex);
            const fontIndex = fontSizes.findIndex(
        (size) => size.value === settings["--font-size"]
        );
        if (fontIndex !== -1) setFontSize(fontIndex);
            const speedIndex = animationSpeeds.findIndex(
        (speed) => speed.value === settings["--animation-speed"]
        );
        if (speedIndex !== -1) setAnimationSpeed(speedIndex);
    }, [settings])

    useEffect(() => {
        const root = document.documentElement
        for(let key in settings){
            root.style.setProperty(key, String(settings[key]))
        }
    }, [settings])
    const themes: Partial<CSSSettings>[] = [
        {
            "--background-color": "#ffffff",
            "--background-light": "#ffffff",
            "--shadow-color": "rgba(0, 0, 0, 0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0, 0, 0, 0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea"
        }
    ]
    const [theme, setTheme] = useState("light")
    function changeTheme(i: number){
        const _theme = {...themes[i]}
        setTheme(i === 0 ? "light" : "dark")
        let _settings = {...settings}
        for(let key in _theme){
            _settings[key] = String(_theme[key])
        }
        setSettings(_settings)
    }
    const primaryColors = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)",
        "rgb(104, 104, 104)"
    ]
    const [primaryColor, setPrimaryColor] = useState(0)
    function changeColor(i: number){
        const _color = primaryColors[i]
        let _settings = {...settings}
        _settings["--primary-color"] = _color
        setPrimaryColor(i)
        setSettings(_settings)
    }
    const fontSizes = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        },
        {
            title: "Jumbo",
            value: "32px"
        }
    ]
    const [fontSize, setFontSize] = useState(1)
    function changeFontSize(i: number){
        const _size = fontSizes[i]
        let _settings = {...settings}
        _settings["--font-size"] = _size.value
        setFontSize(i)
        setSettings(_settings)
    }
    const animationSpeeds = [
        {
            title: "Slow",
            value: 2
        },
        {
            title: "Medium",
            value: 1
        },
        {
            title: "Fast",
            value: .5
        },
        {
            title: "Snail",
            value: 5
        }
    ]
    const [animationSpeed, setAnimationSpeed] = useState(1)
    function changeAnimationSpeed(i: number){
        let _speed = animationSpeeds[i]
        let _settings = {...settings}
        _settings["--animation-speed"] = _speed.value
        setAnimationSpeed(i)
        setSettings(_settings)
    }
    return(
        <div>
            <div className="section d-block">
                <h2>Preferred Theme</h2>
                <div className="options-container">
                    <div className="option light" onClick={() => changeTheme(0)}>
                        { theme === "light" && (
                            <div className="check">
                                <FaCheck />
                            </div>
                        )}
                    </div>
                    <div className="option dark" onClick={() => changeTheme(1)}>
                        { theme === "dark" && (
                            <div className="check">
                                <FaCheck />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="section d-block">
                <h2>Primary Color</h2>
                <div className="options-container">
                    {primaryColors.map((color, index) => (
                        <div className="option light" style={{backgroundColor: color}} onClick={() => changeColor(index)}>
                            { primaryColor === index && (
                                <div className="check">
                                    <FaCheck />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="options-container">
                    {fontSizes.map((size, index) => (
                        <button className="btn" onClick={() => changeFontSize(index)}>
                            {size.title}
                            { fontSize === index && <span><FaCheck /></span>}
                        </button>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Animation Speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((speed, index) => (
                        <button className="btn" onClick={() => changeAnimationSpeed(index)}>
                            {speed.title}
                            { animationSpeed === index && <span><FaCheck /></span>}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}