'use client';
import { Provider } from "jotai";

export const ProviderJotai = ({children}:{children: React.ReactNode}) => {
    return (
        <Provider>
            {children}
        </Provider>
    )
}