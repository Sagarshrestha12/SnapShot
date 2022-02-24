import React from "react";
const uploadContext = React.createContext({
    x: false,
});
export const uploadProvider = (props) => {
    return <uploadContext.Provider > { props.children } < /uploadContext.Provider>;
};
export default uploadContext;