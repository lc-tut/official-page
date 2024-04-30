type TitleBoxProps = {
    title: string;
};

export default function TitleBox({ title }: TitleBoxProps) {
    return (
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl py-8">
            <span className="border-b-4 border-gray-800 dark:border-white">
                {title}
            </span>
        </h2>
    )
}
