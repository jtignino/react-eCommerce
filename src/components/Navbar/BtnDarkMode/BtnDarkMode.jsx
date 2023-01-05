import { useDarkModeContext } from "../../../context/DarkModeContext";

const BtnDarkMode = () => {
    const {toggleDarkMode} = useDarkModeContext();

    return (
        <div className="form-check form-switch ms-4">
            <input className="form-check-input" onInput={() => toggleDarkMode()} type="checkbox"/>
        </div>
    );
}

export default BtnDarkMode;
