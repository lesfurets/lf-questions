import * as React from "react";
import {useLayoutEffect, useRef, useState} from "react";

export const LazyIframe = (props: React.ComponentPropsWithRef<'iframe'>) => {
    const [shouldSuspend, setShouldSuspend] = useState(false);
    const loaded = useRef<(value:void) => void>(null);

    if(shouldSuspend && !loaded.current) {
        throw new Promise<void>((resolve) => {
            loaded.current = resolve;
        });
    }

    useLayoutEffect(() => {
        setShouldSuspend(true);
    },[]);

    return (
        <iframe
            {...props}
            onLoad={() => loaded.current()}
            onError={(err) => {throw err}}
        />
    )
}
