import React, {useState} from "react";
import './style.css'
import {PopupProgram} from "../../components/Program/Popup";


// Card design by id
const theme = [
    {
        summaryHeight: "577px",
        borderWidth: "450px",
        borderHeight: "560px",
        borderColor: "#E7EAEF",
        backgroundWidth: "455px",
        backgroundHeight: "560px",
        backgroundColor: "#952D31",
        fontColor: "#FFFFFF"
    },
    {
        summaryHeight: "577px",
        cardMarginLeftRight: "60px",
        borderWidth: "450px",
        borderHeight: "560px",
        borderColor: "#952D31",
        backgroundWidth: "455px",
        backgroundHeight: "560px",
        backgroundColor: "#E7EAEF",
        fontColor: "#952D31"
    },
    {
        summaryHeight: "577px",
        borderWidth: "450px",
        borderHeight: "560px",
        borderColor: "#952D31",
        backgroundWidth: "455px",
        backgroundHeight: "560px",
        backgroundColor: "#FFFFFF",
        fontColor: "#952D31"
    }
]

export const Card = (props) => {

    const [popupProgramToggle, setPopupProgramToggle] = useState(false)

    const popupProgramClose = () => {
        setPopupProgramToggle(false)
    }

    return (
        <div className="Card" style={{
            height: theme[props.themeNumber].summaryHeight,
            margin: `0px ${theme[props.themeNumber].cardMarginLeftRight} 0px ${theme[props.themeNumber].cardMarginLeftRight}`
        }}
        >
            {
                (popupProgramToggle) ? <PopupProgram
                    close={popupProgramClose}
                    cardTitle={props.cardTitle}
                    cardType={props.cardType}
                    list={props.list}
                    timeStudy={props.timeStudy}
                    price={props.price}
                    themeNumber={props.themeNumber}
                /> : null
            }

            <div className="CardBorder" style={{
                width: theme[props.themeNumber].borderWidth,
                height: theme[props.themeNumber].borderHeight,
                border: `2px ${theme[props.themeNumber].borderColor} solid`,
            }}>

                <div className="CardTitle" style={{
                    color: theme[props.themeNumber].fontColor,
                }}>{props.cardTitle}</div>

                <div className="CardType" style={{
                    color: theme[props.themeNumber].fontColor,
                }}>{props.cardType}</div>

                <div className="CardContent">
                    <ul>
                        {
                            props.list.map(i => <li style={{color: theme[props.themeNumber].fontColor}}>{i}</li>)
                        }
                    </ul>
                </div>

                <div className="ButtonMore" onClick={() => {setPopupProgramToggle(true)}}
                     style={{
                    border: `${theme[props.themeNumber].fontColor} 2px solid`,
                    color: theme[props.themeNumber].fontColor
                }}>??????????????????
                </div>

                <div className="CardInformation">
                    <div className="TimeStudy">
                        {/*<p className="Title" style={{color: theme[props.themeNumber].fontColor}}>?????????? ????????????????:</p>*/}
                        {/*<p className="Description"*/}
                        {/*   // style={{color: theme[props.themeNumber].fontColor,}}>{props.timeStudy}</p>*/}
                    </div>
                    <div className="Price">
                        <p className="Title" style={{color: theme[props.themeNumber].fontColor}}>?????????????????? ??????????:</p>
                        <p className="Description" style={{color: theme[props.themeNumber].fontColor}}>{props.price} ???</p>
                    </div>
                </div>
            </div>
            <div className="CardBackground" style={{
                width: theme[props.themeNumber].backgroundWidth,
                height: theme[props.themeNumber].backgroundHeight,
                backgroundColor: theme[props.themeNumber].backgroundColor,
            }}/>
        </div>
    )
}