const Section = ({children, id}) => {

    return (
        <div id={id} className="px-6 md:px-10 md:pb-0 pb-10 lg:px-20 bg-indigo-950 md:h-screen h-fit text-amber-50">
            {children}
        </div>
    )
};

export default Section;
