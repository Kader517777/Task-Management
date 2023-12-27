import axios from "axios";

const CreateTask = () => {

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadlines = form.deadlines.value;
        const priority = form.priority.value;
        const CreateTask = { title, description, deadlines, priority };

        axios.post('http://localhost:3000/createTask', CreateTask)
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 shadow-2xl bg-base-100">
                    <form onSubmit={handleAddTask} className="card-body">
                        <h1 className="text-3xl px-5 text-center">Create Task</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Title" name="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" rows="4" cols="50" name="description" placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadlines</span>
                            </label>
                            <input type="date" placeholder="Deadlines" name="deadlines" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <select name="priority" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Priority</option>
                                <option>Low</option>
                                <option>Moderate</option>
                                <option>High</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            ugi
        </div>
    );
};

export default CreateTask;