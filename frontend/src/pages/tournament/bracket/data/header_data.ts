export type THeaderFonts = "small" | "medium" | "large"

export type THeader = {
    font: THeaderFonts,
    title: string,
}

export const header_titles: THeader[] = [

    {
        "font": "large",
        "title": "1/16"
    },
    {
        "font": "large",
        "title": "1/8"
    },
    {
        "font": "small",
        "title": "Четвертьфинал"
    },
    {
        "font": "medium",
        "title": "Полуфинал"
    },
    {
        "font": "medium",
        "title": "Финал"
    }
]

