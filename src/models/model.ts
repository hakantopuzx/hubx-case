export interface Tab {
    id: number;
    image: string;
    subTitle: string;
    title: string;
    text: string;
    menuIcon: string;
    buttonText: string;
    animImage1?: string;
    animImage2?: string;
    animImage3?: string;
    animImage4?: string;
    animImageMobile1?: string;
    animImageMobile2?: string;
    animImageMobile3?: string;
    animImageMobile4?: string;
    animProps1?: AnimProps;
    animProps2?: AnimProps;
    animProps3?: AnimProps;
    animProps4?: AnimProps;
}

interface AnimProps {
    x: number;
    y: number;
    opacity: number;
    delay: number;
    duration: number;
}
