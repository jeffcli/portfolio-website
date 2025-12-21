const Lemurs: React.FC = () => {

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Suicide Risk Alerting application for School
                Administrators and Clinicians</h1>
            <h1 className="text-2xl font-bold text-center mb-8">August 2025 - April 2026</h1>
            <h1 className="text-2xl font-bold text-left mb-8">Overview</h1>
            <div className="flex flex-col md:flex-row items-center gap-8">

                <div className="flex-1">
                    <p className="text-lg mb-4">
                        Mental health is a pressing issue among college students, with approximately 1,100 dying by
                        suicide per year. Particularly, both the high school and college I attend have both experienced
                        severe
                        mental health crises, making this issue hit even more close to home. Thus, for my senior
                        capstone project, I
                        chose to work on a project that would help combat these issues. LEMURS (Leveraging Early Mental
                        Health Uncovering Risk for Suicide) is a multiyear NIH funded project between WPI and
                        UMass Amherst with the goal to streamline suicide risk monitoring on college campuses. Our goal
                        was to develop a dashboard for clinicans that would allow them to monitor students who were
                        identified to be at risk for suicidal ideation and act accordingly.
                    </p>
                    <h1 className="text-2xl font-bold text-left mb-8">My Contributions and Reflections</h1>
                </div>
            </div>
        </div>
    );
};

export default Lemurs;