import {IconFirstAidKit} from "@tabler/icons-react";
import React from "react";

interface Props {
    color?: string;
}

export default function Logo(props: Props) {
    const {color} = props;
    return (
      <p className={`font-black text-2xl items-center ${color ?? "text-white"} flex gap-2 leading-6`}>
          <IconFirstAidKit stroke={2} size={35}/>
          Locumist
      </p>
    )
}