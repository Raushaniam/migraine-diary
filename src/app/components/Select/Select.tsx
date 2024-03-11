import React, {FC, useCallback, useRef, useState} from "react";
import {ISelect} from "./ISelect";
import {Tag} from "../Tag/Tag";
import "./Select.scss";
import {Area} from "../Main/Localization/Area/Area";
import {useClickOutside} from "../../hooks/useClickOutside";

export const Select: FC<ISelect> = () => {
    const [show, setShow] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);
    const [activeAreas, setActiveAreas] = useState<string[]>([]);
    const areaRef = useRef();

    useClickOutside(areaRef, () => {
        setShow(false);
    })

    const showOptions = useCallback(() => {
        setShow(!show);
    }, [show])

    const dataInput = (event) => {
        if (event.key === 'Backspace') {
            removeTag(tags.length - 1);
        }
        if (event.key !== 'Enter') return;
        const value = event.target.value;
        if (!value.trim()) return;
        setTags([...tags, value.trim()]);
        event.target.value = '';
        event.preventDefault();
    }

    const addTag = (element, index) => {
        if (!activeAreas.includes(element) && !tags.includes(element)) {
            setActiveAreas([...activeAreas, element]);
            setTags([...tags, element]);
        } else {
            setActiveAreas(activeAreas.filter((item) => item !== element));
            if (tags.includes(element)) {
                setTags(tags.filter((tag) => tag !== element))
            }
        }
    }

    const removeTag = (index) => {
        const poppedTag: string = tags[index];
        setTags(tags.filter((tag, i) => i !== index));
        if (activeAreas.includes(poppedTag)) {
            setActiveAreas(activeAreas.filter((item) => item !== poppedTag));
        }
    }

    return <form ref={areaRef}>
        <div className="Select">
            <div className="TagContainer">
                <Tag onClickCross={(index) => removeTag(index)} tags={tags}/>
                <input className="Input" type="text" onKeyDown={dataInput}/>
            </div>
            <div className={show ? "Search" : "Icon"} onClick={showOptions}></div>
        </div>
        {show &&
            <div className="ListOfOptions">
                {
                    <Area activeAreas={activeAreas}
                          onClick={addTag}/>
                }
            </div>}
    </form>;
}