import {IconFirstAidKit} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";

interface Props {
    className?: string;
}

export default function Logo(props: Props) {
    const {className} = props;
    return (
      <Link
        href="/"
        className={`font-black cursor-pointer text-2xl items-center inline-block ${className ?? "text-gray-50"} flex gap-x-2 leading-6`}>
          <IconFirstAidKit stroke={2} size={35}/>
          Locumist
      </Link>
    )
}