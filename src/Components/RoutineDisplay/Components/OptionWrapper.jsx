import React from "react";
import '../../../Styles/RoutineDisplay/Components/OptionWrapper.css'
import RoutineMap from "./RoutineMap";

const OptionWrapper = (props) => {

    const getTitle = () => {
        switch (props.selection) {
            case 0:
                return "Routine Map";
            case 1:
                return "Statistics";
            case 2:
                return "Observations";
            case 3:
                return "Create Subroutine";
            default:
                break;
        }
    }

    const getView = () => {
        switch (props.selection){
            case 0:
                return (<RoutineMap/>)
            default:
                return (<></>);
        }
    }

    return (
        <div className="OptionWrapper">
            <div className="title">
                <p>{getTitle()}</p>
            </div>
            <div className="view">
                {getView()}
            </div>
        </div>
    )
}

export default OptionWrapper;