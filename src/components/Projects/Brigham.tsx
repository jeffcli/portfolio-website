const Brigham: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Kiosk Application for Brigham and Women's Hospital</h1>

            <h1 className="text-2xl font-bold text-center mb-8">March 2024 - May 2024</h1>
            <div className="flex flex-col md:flex-row items-center gap-8">

                <div className="flex-1">
                    <p className="text-lg mb-4">
                      During Spring of 2024, I served as an assistant lead software engineer and scrum master on
                        a team of 10 other students for the term project as a part of WPI's CS3733 - Software
                        Engineering course. We applied Agile development methodologies and software design
                        patterns to create a web application running on the cloud for Brigham and Women's Hospital.
                        The final software application prototype included a 3D hospital pathfinder, a map editor,
                        multiple integrated service request modules, email alerts, and voice navigation throughout the website.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Brigham;