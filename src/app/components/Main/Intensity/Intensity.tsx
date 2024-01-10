import React, {FC} from "react";
import {IIntensity} from "./IIntensity";
import "./Intensity.scss";


export const Intensity:FC<IIntensity> = ({title}) => {
    return <div className="Intensity">
        {title}
        <div className="Scale">
            <label className="Label" htmlFor="one">1
                <input className="Input" type="radio" id="one" name="one" value="1"/>
            </label>
            <label className="Label" htmlFor="two">2
                <input className="Input" type="radio" id="two" name="two" value="2"/>
            </label>
            <label className="Label" htmlFor="three">3
                <input className="Input" type="radio" id="three" name="three" value="3"/>
            </label>
            <label className="Label" htmlFor="four">4
                <input className="Input" type="radio" id="four" name="four" value="4"/>
            </label>
            <label className="Label" htmlFor="five">5
                <input className="Input" type="radio" id="five" name="five" value="5"/>
            </label>
            <label className="Label" htmlFor="six">6
                <input className="Input" type="radio" id="six" name="six" value="6"/>
            </label>
            <label className="Label" htmlFor="seven">7
                <input className="Input" type="radio" id="seven" name="seven" value="7"/>
            </label>
            <label className="Label" htmlFor="eight">8
                <input className="Input" type="radio" id="seven" name="eight" value="8"/>
            </label>
            <label className="Label" htmlFor="nine">9
                <input className="Input" type="radio" id="nine" name="nine" value="9"/>
            </label>
            <label className="Label" htmlFor="ten">10
                <input className="Input" type="radio" id="ten" name="ten" value="10"/>
            </label>
        </div>
    </div>
}