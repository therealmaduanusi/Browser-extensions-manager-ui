import React from "react";
import "../styles/List.css";

function List({ propsExtensionList, onHandleToggle, mode, onHandleDelete }) {
  let id = propsExtensionList.id;
  
  return (
    <div
      className={`listDemo ${
        mode ? "lightMode_list_bgColor" : "darkMode_list_bgColor"
      }`}
    >
      <div className={`extentionTitle`}>
        <img src={propsExtensionList.logo} alt={`${propsExtensionList.name}-logo`} />
        <div>
          <h4
            className={`${
              mode ? "lightMode_list_h4Color" : "darkMode_list_h4Color"
            }`}
          >
            {propsExtensionList.name}
          </h4>
          <p
            className={`${
              mode ? "lightMode_list_pColor" : "darkMode_list_pColor"
            } list_p`}
          >
            {propsExtensionList.description}
          </p>
        </div>
      </div>
      <div className={`filterEffect`}>
        <button onClick={() => onHandleDelete(id)} className={`removeList ${ mode ? "removeList_lightMode" : "removeList_darkMode"}`}>
          Remove
        </button>
        <div
          onClick={() => {
            // setIsActive((prevActive) => !prevActive)
            // console.log(propsExtensionList.isActive);
            onHandleToggle(id)
          }}
          className={`${propsExtensionList.isActive ? "true" : "false"} toggle ${mode ? 'toggle_lightMode' : ''}`}
        >
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default List;
