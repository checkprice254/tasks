/*
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    tags: String,
    assignments: String,
  },
  { timestamps: true }
);

mongoose.connect(process.env.MONGODB_URI);

const myTask = mongoose.models.myTask || mongoose.model("myTask", taskSchema);

export default myTask;

















export async function POST(req) {
  try {
    const { title, description, priority } = await req.json();

    await Tasks.create({ title, description, priority });

    return NextResponse.json({ message: "Task Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const myTaskData = body.formData;

    await Tasks.findByIdAndUpdate(id, {
      ...myTaskData,
    });
    return NextResponse.json({ message: "myTask updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Tasks.findByIdAndDelete(id);
    return NextResponse.json({ message: "myTask Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
*/
