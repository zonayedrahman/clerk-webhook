import { connectToDatabase } from "@/lib/database";
import Task from "@/lib/database/models/task.model";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { title, description, userId } = await req.json();

    try {
        await connectToDatabase();
        await Task.create({ title, description, byUser: userId });
        return NextResponse.json({message: 'Task Created'}, {status: 201})

    }

    catch (error) {
        console.log(error);
    }

}


export const GET = async () => {
    try {
        await connectToDatabase();

        const res = await Task.find();
        let tasks = JSON.parse(JSON.stringify(res));

        return NextResponse.json(tasks, { status: 200 });


    } catch (error) {
        console.log(error);
    }
}