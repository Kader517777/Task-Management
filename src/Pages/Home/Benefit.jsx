
const Benefit = () => {
    return (
        <div className="my-10 p-5">
            <h1 className="text-3xl font-bold ">Your Benefit</h1>
            <p className="mt-7 text-xl font-bold">
                When a person uses a task management website,
                they can benefit from various features to streamline their
                daily workflow and keep their tasks organized in the right
                place. Here are some potential advantages:
            </p>
            <ol className=" list-disc mt-5">
                <li className="ml-5">
                    <h1>Task Organization:</h1>
                    <p>Firstly, individuals can store all their tasks in one place,
                        allowing them to view them from a unified perspective.</p>
                </li>
                <li className="ml-5 my-5">
                    <h1>Contextual Details:</h1>
                    <p>Task management systems enable users to add essential information
                        for each task, such as titles, deadlines, status, etc.</p>
                </li>
                <li className="ml-5 my-5">
                    <h1>Calendar Integration:</h1>
                    <p>Using a calendar feature, users can visualize all their tasks
                        and deadlines, ensuring effective planning and management.</p>
                </li>
            </ol>
        </div>
    );
};

export default Benefit;