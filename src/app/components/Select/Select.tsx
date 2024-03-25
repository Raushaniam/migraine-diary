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
    const [isShowInput, setShowInput] = useState<boolean>(true);
    const areaRef = useRef();

    useClickOutside(areaRef, () => {
        setShow(false);
    })

    const showOptions = useCallback(() => {
        setShow(!show);
    }, [show])

    useEffect(() => {
        if (mode === ESelectMode.SingleInput && tags.length >= 1) {
            setShowInput(false);
        } else {
            setShowInput(true);
        }
    }, [tags, mode])

    const dataInput = (event) => {
        if (event.key === 'Backspace') {
            removeTag(tags.length - 1);
        }
        if (event.key !== 'Enter') return;
        const value = event.target.value;
        if (!value.trim()) return;
        setTimeout(() => {
            setTags([...tags, value.trim()]);
        }, 0)
        event.target.value = '';
        event.preventDefault();
    }

    const addOption = (element) => {
        setActiveOptions([...activeOptions, element]);
        setTags([...tags, element]);
    }

    const removeOption = (element) => {
        setActiveOptions(activeOptions.filter((item) => item !== element));
        setTags(tags.filter((tag) => tag !== element))
    }

    const addRemoveTag = (element) => {
        if (mode === ESelectMode.SingleInput) {
            setTimeout(() => {
                if (tags.length < 1) addOption(element)
            }, 0)
            if (tags.length === 1) removeOption(element);
        }
        if (mode === ESelectMode.MultipleInput) {
            if (!tags.includes(element)) addOption(element);
            if (tags.includes(element)) removeOption(element);
        }
    }

    const removeTag = (index) => {
        setTags(tags.filter((tag, i) => i !== index));
        setActiveOptions(activeOptions.filter((item, i) => i !== index));
    }

    return <form ref={areaRef}>
        <div className="Select">
            <div className="TagContainer">
                <Tag onClickCross={removeTag} tags={tags}/>
                <input className="Input"
                       style={{width: !isShowInput ? 0 : '50%'}}
                       type="text"
                       disabled={!isShowInput}
                       onKeyDown={dataInput}
                />
            </div>
            <div className={show ? "Search" : "Icon"} onClick={showOptions}></div>
        </div>
        {show &&
            <div className="ListOfOptions">
                <Option activeOptions={activeOptions}
                        onClick={addRemoveTag}
                        options={options}
                />
            </div>
        }
    </form>;
}