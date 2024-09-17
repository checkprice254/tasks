"use server";
import { NextResponse } from "next/server";
import Task from "../../connectedModels/tasks";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export async function GET() {
  try {
    const task = await Task.find();
    //console.log(tasks);

    return NextResponse.json(task, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    const { title, address, description, priority } = await req.json();

    await Task.create({
      title,
      address,
      description,
      priority,
      creator: session.user.id,
    });

    return NextResponse.json({ message: "Task Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
