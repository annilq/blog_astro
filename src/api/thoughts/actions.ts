import prisma from "../../lib/prisma";

export async function getThoughts(session: Request) {
  return await prisma.thought.findMany({
    where: {
      name: session?.user?.name!,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function addThought(formData: FormData, session: Request) {
  const content = formData.get("content") as string;

  if (!content || content.trim() === "") {
    return { error: "Thought content cannot be empty" };
  }

  try {
    await prisma.thought.create({
      data: {
        content: content.trim(),
        name: session?.user?.name!,
      },
    });

    return { success: true };
  } catch (error) {
    return { error: "Failed to add thought" };
  }
}

export async function deleteThought(id: string) {
  await prisma.thought.delete({
    where: { id },
  });

  return { success: true };
}

export async function clearAllThoughts() {
  await prisma.thought.deleteMany({});

  return { success: true };
}
