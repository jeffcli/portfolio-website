const Brigham: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Application for Brigham and Women's Hospital</h1>

            <h1 className="text-2xl font-bold text-center mb-8">March 2024 - May 2024</h1>
            <h1 className="text-2xl font-bold text-left mb-8">Overview</h1>
            <div className="flex flex-col md:flex-row items-center gap-8">

                <div className="flex-1">
                    <p className="text-lg mb-4">
                        During Spring of 2024, I served as an assistant lead software engineer and scrum master on
                        a team of 10 other students for the term project as a part of WPI's CS3733 - Software
                        Engineering course. We applied Agile development methodologies and software design
                        patterns to create a web application running on the cloud for Brigham and Women's Hospital.
                        The final software application prototype included a 3D hospital pathfinder, a map editor,
                        multiple integrated service request modules, email alerts, and voice navigation throughout the
                        website.
                    </p>

                    <p className="text-lg mb-4">
                        Our application was built using Node.js and Vite as our JavaScript frameworks.
                        We utilized TypeScript rather than JavaScript for the purposes of ensuring type-safety
                        throughout the application. The frontend of the application was built using React.js and MaterialUI
                        for the UI Design and building custom components. The application's back-end was developed
                        using ExpressJS, PrismaORM, and a PostgreSQL database. The express.js REST APIs were responsible
                        for providing database CRUD operations, while the database itself stored information regarding
                        the hospital map, users, and service requests. Throughout the application, we utilized Auth0
                        to provide user authentication, role-based access control, API protection, and auto-account
                        creation and deletion upon employee creation and deletion by an administrator. Finally, our
                        application utilized AWS EC2 to host our application in the cloud.
                    </p>

                    <h1 className="text-2xl font-bold text-left mb-8">My Contributions and Reflections</h1>

                    <p className="text-lg mb-4">
                        Our application was built using Node.js and Vite as our JavaScript frameworks.
                        We utilized TypeScript rather than JavaScript for the purposes of ensuring type-safety
                        throughout the application. The user experience of the application was built using React.js.
                        Over the course of the project, we leveraged React.js to design 65 custom components,
                        which allowed us to take advantage of code reuse and gave our website a consistent theme
                        even though we had a team of 10 students. The application's back-end was developed using
                        ExpressJS, PrismaORM, and a PostgreSQL database. The express.js REST APIs were responsible
                        for providing database CRUD operations, while the database itself stored information regarding
                        the hospital map, users, and service requests. Throughout the application, we utilized Auth0
                        to provide user authentication, role-based access control, API protection, and auto-account
                        creation and deletion upon employee creation and deletion by an administrator. Finally, our
                        application utilized AWS EC2 to host our application in the cloud.
                    </p>


                </div>
            </div>
        </div>
    );
};

export default Brigham;