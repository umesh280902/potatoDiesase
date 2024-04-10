import React, { createContext, useState } from "react";

export const ImageContext = createContext();

const ImageProvider = ({ children }) => {
    const [uri, setUri] = useState(null);

    return (
        <ImageContext.Provider value={{ uri, setUri }}>
            {children}
        </ImageContext.Provider>
    );
};

export default ImageProvider;
