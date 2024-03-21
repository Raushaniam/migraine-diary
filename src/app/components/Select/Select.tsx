import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import {ISelect} from "./ISelect";
import {Tag} from "../Tag/Tag";
import "./Select.scss";
import {useClickOutside} from "../../hooks/useClickOutside";
import {ESelectMode} from "../../types/ESelectMode";
import {Option} from "./Option/Option";

export const Select: FC<ISelect> = ({mode, options}) => {
    const [show, setShow] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);
    const [activeOptions, setActiveOptions] = useState<string[]>([]);
    const [isHiddenInput, setHiddenInput] = useState<boolean>(true);
    const areaRef = useRef();

    useClickOutside(areaRef, () => {
        setShow(false);
    })

    const showOptions = useCallback(() => {
        setShow(!show);
    }, [show])

    useEffect(() => {
        if (mode === ESelectMode.SingleInput && tags.length === 1) {
            setHiddenInput(!isHiddenInput);
        }
    }, [tags])

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

    const addTagToArea = (element) => {
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

    const addTag = (element) => {
        if (mode === ESelectMode.SingleInput && tags.length < 1) {
            setActiveOptions([...activeOptions, element]);
            setTags([...tags, element]);
        }
        if (mode === ESelectMode.MultipleInput) {
            addTagToArea(element);
        }
    }

    const removeTag = (index) => {
        const poppedTag: string = tags[index];
        if (mode === ESelectMode.SingleInput && tags.length === 1) {
            setHiddenInput(true);
        }
        setTags(tags.filter((tag, i) => i !== index));
        if (activeOptions.includes(poppedTag)) {
            setActiveOptions(activeOptions.filter((item) => item !== poppedTag));
        }
    }

    return <form ref={areaRef}>
        <div className="Select">
            <span className="TagContainer">
                <Tag onClickCross={removeTag} tags={tags}/>
                {isHiddenInput && <input className="Input"
                                         type="text"
                                         onKeyDown={dataInput}
                />}
            </span>
            <div className={show ? "Search" : "Icon"} onClick={showOptions}></div>
        </div>
        {show &&
            <div className="ListOfOptions">
                <Option activeOptions={activeOptions}
                        onClick={addTag}
                        options={
                            options
                        }/>
            </div>
        }
    </form>;
}