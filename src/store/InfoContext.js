import React, { useReducer} from "react";
import { createContext } from "react";

export const InfoContext = createContext({
    info: '',
    hasChanged: 0,
    onChangeInfo: () => {}
})

const InfoReducer = (state, action) => {
    if(action.type === 'CHANGE_INFO'){
        return {info: action.val, hasChanged: 1}
    }
}
export const InfoContextProvider = (props) => {

    const [infoState, dispatch] = useReducer(InfoReducer, {
        info: 'Info Inicial',
        hasChanged: 0,
    });

    const onSetNewInfo = (info) => {
        dispatch({type: 'CHANGE_INFO', val: info})
    }

    return <InfoContext.Provider value={{
        info: infoState.info,
        hasChanged: infoState.hasChanged,
        onChangeInfo: onSetNewInfo
    }}>
        {props.children}
    </InfoContext.Provider>
}