"use server";
import { NextResponse } from "next/server";
import Team from "../../connectedModels/teams";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export async function GET() {
  try {
    const team = await Team.find();
    //console.log(teams);

    return NextResponse.json(team, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    const { name, notes, members } = await req.json();

    await Team.create({
      name,
      notes,
      members,
      createdBy: session.user.id,
    });

    return NextResponse.json({ message: "Team Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
