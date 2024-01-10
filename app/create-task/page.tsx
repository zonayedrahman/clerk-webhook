import CreateTaskForm from "@/components/shared/CreateTaskForm";

import { currentUser } from "@clerk/nextjs";

const CreateTask = async () => {
    const user = await currentUser();
    return (
        <div className="flex flex-col w-full h-screen items-center py-16">
            <h1 className="mb-16 text-lg font-bold">Create Task</h1>
            <CreateTaskForm userId={user?.id || "None"} />
        </div>
    );
};

export default CreateTask;
