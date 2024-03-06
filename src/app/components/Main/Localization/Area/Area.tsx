import React, {FC, ReactNode, useCallback, useState} from "react";
import {IArea} from "./IArea";
import {EAreas} from "../../../../types/EAreas";
import './Area.scss';
import {Tag} from "../../../Tag/Tag";

export const Area: FC<IArea> = () => {
    const areas: string[] = Object.values(EAreas);
    const [show, setShow] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);

    const showAreas = useCallback(() => {
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

    const addTag = (area: string) => {
        setTags([...tags, area])
    }

    const removeTag = (index) => {
        setTags(tags.filter((tag, i) => i !== index))
    }

    const areaElements: ReactNode[] = areas.map((area, index) => {
        return <div key={index} className="Area" onClick={() => addTag(area)}>{area}</div>;
    })

    return <form>
        <div className="Select">
            <Tag onClickCross={(index) => removeTag(index)} tags={tags}/>
            <input className="Input" type="text" onKeyDown={dataInput}/>
            <div className="Icon" onClick={showAreas}></div>
        </div>
        {show && <div className="ListOfLocalizations">{areaElements}</div>}
    </form>;
}