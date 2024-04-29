type ContainerProps = {
    children: React.ReactNode;
}

export default function Container({children}: ContainerProps){
    return (
        <div className="flex items-center justify-center">
            {children}
        </div>
    )
}
