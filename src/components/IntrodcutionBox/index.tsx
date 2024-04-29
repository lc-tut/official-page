type IntroductionBoxProps = {
    title: string;
}

export default function IntroductionBox({title}: IntroductionBoxProps) {
    return (
        <div>
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white lg:text-6xl py-6">{title}</h1>
            <div className="flex flex-col lg:flex-row">
                
            </div>
        </div>
    )
}
