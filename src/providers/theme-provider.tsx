"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// @ts-ignore
export function ThemeProvider({ children, ...props }) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <>{children}</>;

    return <NextThemesProvider attribute="class" {...props}>
        {children}
    </NextThemesProvider>;
}
