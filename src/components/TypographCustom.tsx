import { Typography } from "@mui/material";
import type { CSSProperties } from "@mui/styled-engine-sc";

interface ITypographyCustom {
    // variant?: any;
    color: string;
    fontWeight?: string;
    children: React.ReactNode | string;
    fontSize?: string;
    textAlign?: string;
}

export default function TypographyCustom({
    // variant,
    color,
    children,
    fontWeight,
    fontSize,
    // textAlign,
}: ITypographyCustom) {
    const stylesCustom: CSSProperties = {
        fontFamily: "QuickSand, sans-serif",
        fontSize: `${fontSize}`,
        // // @ts-ignore
        // textAlign: `${textAlign}`,
    };
    return (
        <Typography
            // variant={variant}
            color={color}
            fontWeight={fontWeight}
            sx={stylesCustom}
            style={{
                lineHeight: "1.2",
            }}
        >
            {children}
        </Typography>
    );
}
