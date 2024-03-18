import React, {FC, useCallback, useRef, useState} from "react";
import {ISelect} from "./ISelect";
import {Tag} from "../Tag/Tag";
import "./Select.scss";
import {useClickOutside} from "../../hooks/useClickOutside";
import {ESelectMode} from "../../types/ESelectMode";
import {Option} from "./Option/Option";
import {EAreas} from "../../types/EAreas";
import {EDrugNames} from "../../types/EDrugNames";
import {EDoses} from "../../types/EDoses";

export const Select: FC<ISelect> = ({mode}) => {
    const [show, setShow] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);
    const [activeOptions, setActiveOptions] = useState<string[]>([]);
    const areaRef = useRef();
    const areas: string[] = Object.values(EAreas);
    const names: string[] = Object.values(EDrugNames);
    const doses: string[] = Object.values(EDoses);

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
        if (!activeOptions.includes(element) && !tags.includes(element)) {
            setActiveOptions([...activeOptions, element]);
            setTags([...tags, element]);
        } else {
            setActiveOptions(activeOptions.filter((item) => item !== element));
            if (tags.includes(element)) {
                setTags(tags.filter((tag) => tag !== element))
            }
        }
    }

    const removeTag = (index) => {
        const poppedTag: string = tags[index];
        setTags(tags.filter((tag, i) => i !== index));
        if (activeOptions.includes(poppedTag)) {
            setActiveOptions(activeOptions.filter((item) => item !== poppedTag));
        }
    }

    return <form ref={areaRef}>
        <div className="Select">
            <span className="TagContainer">
                <Tag onClickCross={removeTag} tags={tags}/>
                <input className="Input"
                       type="text"
                       onKeyDown={dataInput}
                />
            </span>
            <div className={show ? "Search" : "Icon"} onClick={showOptions}></div>
        </div>
        {show &&
            <div className="ListOfOptions">
                <Option activeOptions={activeOptions}
                        onClick={addTag}
                        options={
                            mode === ESelectMode.Area && areas ||
                            mode === ESelectMode.Name && names ||
                            mode === ESelectMode.Dose && doses
                        }/>
            </div>
        }
    </form>;
}