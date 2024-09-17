"use server";
import { NextResponse } from "next/server";
// import Task from "../../connectedModels/tasks";
import Task from "../../../connectedModels/tasks";

export async function GET(request, { params }) {
  const { id } = params;

  const foundTasks = await Task.findOne({ creator: id });
  return NextResponse.json(foundTasks, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const TasksData = body.formData;

    await Task.findByIdAndUpdate(id, {
      ...TasksData,
    });

    return NextResponse.json({ message: "Tasks updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: "Tasks Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
