"use server";
import { NextResponse } from "next/server";
// import user from "../../connectedModels/users";
import user from "../../../connectedModels/users";

export async function GET(request, { params }) {
  const { id } = params;

  const foundusers = await user.findOne(id);
  return NextResponse.json(foundusers, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const usersData = body.formData;

    await user.findByIdAndUpdate(id, {
      ...usersData,
    });

    return NextResponse.json({ message: "users updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await user.findByIdAndDelete(id);
    return NextResponse.json({ message: "users Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
