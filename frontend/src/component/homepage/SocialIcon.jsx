import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faRepeat, faThumbsUp, faComment } from "./Icons";

const SocialIcon = () => {
  const IconLists = [
    { icon: faThumbsUp, name: "like", num: 0 },
    { icon: faComment, name: "comment", num: 0 },
    { icon: faRepeat, name: "repeat", num: 0 },
    { icon: faShare, name: "share" },
  ];
  const [changeNum,setChangeNum] = useState(IconLists);

  const onClickEventHandler = (name) => {
  const gettingObj =   changeNum.find((icons)=>{
         return icons.name === name
    })
    gettingObj.num+1;
    console.log(gettingObj);
    //  setChangeNum((prev)=>[...prev,{...gettingObj,num:num+=1}])
    //  console.log(changeNum)
  };
  return (
    <div className="flex flex-row justify-between px-10">
      {IconLists.map((icons) => {
        return (
          <button
            key={icons.name}
            onClick={() => onClickEventHandler(icons.name)}
            className="text-2xl hover:text-gray-600 text-blue-400"
          >
            <span className="text-lg px-1 text-blue-500">{icons.num}</span>
            <FontAwesomeIcon icon={icons.icon}></FontAwesomeIcon>
          </button>
        );
      })}
    </div>
  );
};

export default SocialIcon;
