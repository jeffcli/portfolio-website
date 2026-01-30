const Speedcubing: React.FC = () => {
    const cubingAccomplishments = [
        "Peaked at 18th in the world for 7x7 and 26th in the world for 6x6 on the WCA rankings.",
        "Placed 4th in 7x7 at the 2025 US national championships.",
        "9 time New England Record Holder, 3 time New England Champion. "
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Speedcubing</h1>

            <div className="flex flex-col md:flex-row items-center gap-8">

                <div className="flex-1">
                    <p className="text-lg mb-4">
                        Speedcubing is the competitive sport of solving a Rubik's Cube and other
                        twisty puzzles as fast as possible, involving pattern recognition, algorithms,
                        and finger tricks to achieve low solve times. Participants, called speedcubers,
                        compete in various events, from the standard 3x3x3 cube to one-handed,
                        blindfolded, or larger-sized cubes, all regulated by the World Cube Association
                        (WCA), the sport's governing body.
                    </p>
                    <p className="text-lg mb-4">
                        I have been speedcubing since 2015 and have participated in 13 of the 17
                        official WCA events You can find my official results{" "}
                        <a
                            href="https://www.worldcubeassociation.org/persons/2016LIJE01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition underline"
                        >
                         here
                        </a>
                        . More importantly, speedcubing has taught me perseverance and problem-solving skills
                        and has brought me some of my closest friends.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Accolades</h3>
                        <ul className="list-disc list-inside">
                            {cubingAccomplishments.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speedcubing;