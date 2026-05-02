import React, {useState} from "react";
import "../../index.css"
import ContrastButton from "./ContrastButton";
import SizeButton from "./SizeButton";

export default function AccessOpts(){
    return(
        <div className="flex flex-col gap-2 p-2 bg-white shadow-lg border border-gray-200 rounded-md">
            <SizeButton />
            <ContrastButton />
        </div>
    )
}
