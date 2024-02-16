import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faRepeat, faThumbsUp, faComment } from "./Icons";

const SocialIcon = () => {
  const IconLists = [
    { icon: faComment },
    { icon: faRepeat },
    { icon: faShare },
    { icon: faThumbsUp },
  ];
const onClickEventHandler =() =>{

}
  return (
    <div className="flex flex-row justify-between px-10">
      {IconLists.map((icons) => {
       return <button onClick={onClickEventHandler} className="text-gray-500 text-2xl">
            <FontAwesomeIcon icon={icons.icon}></FontAwesomeIcon>
          </button>
      })}
    </div>
  );
};

export default SocialIcon;
