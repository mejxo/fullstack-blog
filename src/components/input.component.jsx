import { useState } from "react";

import eyeIcon from "../icons/eye.svg"
import eyeCrossedIcon from "../icons/eye-crossed.svg"

const InputBox = ({name, type, id, value, placeholder, icon}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <div className="relative w-[100%] mb-4">

            <input 
            id={id} 
            name={name} 
            type={type == "password" ? passwordVisible ? "text" : "password" : type} 
            placeholder={placeholder} 
            defaultValue={value} 
            className="input-box"/>

            <img src={icon} className="input-icon w-4 h-auto"/>

            {
                type == "password" ? <img onClick={() => setPasswordVisible(currentVal => !currentVal)} src={!passwordVisible ? eyeCrossedIcon : eyeIcon} class="input-icon left-[auto] right-4 w-4 h-auto cursor-pointer"/> : ""
            }

        </div>
    ) 
}

export default InputBox;