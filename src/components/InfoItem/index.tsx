
type Props= {
    label: string;
    value: string;
}

export const InfoItem = ({label, value}: Props) => {
    return (
        <div className="my-5">
            <div className="text-base text-beigeValo">{label}</div>
            <div className="text-4xl font-bold text-redValo">{value}</div>
        </div>
    );
}