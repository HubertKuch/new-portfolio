import React from "react";

function Checkbox({
                      name,
                      label
                  }) {
    return <label>
        <input type="checkbox" name={name} id=""/>
        <span className="checkbox"></span>
        {label}
    </label>;
}

export default Checkbox;