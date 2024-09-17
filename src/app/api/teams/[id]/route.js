"use server";
import { NextResponse } from "next/server";
// import Team from "../../connectedModels/Teams";
import Team from "../../../connectedModels/teams";

export async function GET(request, { params }) {
  const { id } = params;

  const foundTeams = await Team.findOne({ creator: id });
  return NextResponse.json(foundTeams, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const TeamsData = body.formData;

    await Team.findByIdAndUpdate(id, {
      ...TeamsData,
    });

    return NextResponse.json({ message: "Teams updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Team.findByIdAndDelete(id);
    return NextResponse.json({ message: "Team Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
