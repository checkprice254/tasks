"use server";
import { NextResponse } from "next/server";
import User from "../../connectedModels/users";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();
    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) {
      return NextResponse.json(
        { message: "username or Username already exists" },
        { status: 500 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    return NextResponse.json({ message: "Account Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await User.find();
    //console.log(users);

    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
