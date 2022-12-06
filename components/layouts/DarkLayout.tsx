import { ScriptProps } from "next/script";
import { FC, PropsWithChildren } from "react";

type Props={};

export const DarkLayout : React.FC<PropsWithChildren<ScriptProps>> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px',
            borderRadius: '5px',
        }}>
            <h3>Dark-layout</h3>
            <div>
                {children}
            </div>
        </div>
    );
}
