"use client";

import Iridescence from "./Iridescence";

export const IridescenceBackground = () => {
    return (
        <div className="fixed inset-0 -z-10">
            <Iridescence
                color={[0.788235294117647,0.6588235294117647,0.9176470588235294]}
                mouseReact
                amplitude={0.1}
                speed={1}
            />
        </div>
    );
};