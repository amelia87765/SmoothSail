export type Edition = {
    id: string;
    title: string;
    yearLabel: string;
    logo: string;
    artistIndexes: string[];
};

export const editions: Edition[] = [
    {
        id: "zima-2025",
        title: "Koniec października, zmiana czasu na zimowy",
        yearLabel: "2025 (-1)",
        logo: "/logostrefy.svg",
        artistIndexes: ["inner", "hatti", "moriko", "emerai", "siekirka"]
    },
    {
        id: "lato-2026",
        title: "Koniec marca, zmiana czasu na letni",
        yearLabel: "2026 (+1)",
        logo: "/logostrefy.svg",
        artistIndexes: ["wh0wh0", "ksawery", "nene", "glowacka"]
    },
    {
        id: "zima-2026",
        title: "Koniec października, zmiana czasu na zimowy",
        yearLabel: "2026 (-1)",
        logo: "/logostrefy.svg",
        artistIndexes: ["lins"]
    }
];