import prisma from "../../lib/prisma";
import { getSession } from "auth-astro/server";

export async function getThoughts(request: Request) {
  const session = await getSession(request);
  return await prisma.thought.findMany({
    where: {
      name: session?.user?.name!,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function addThought(formData: FormData, request: Request) {
  const content = formData.get("content") as string;
  const session = await getSession(request);

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

export async function deleteThought(id: string, request: Request) {
  await prisma.thought.delete({
    where: { id },
  });

  return { success: true };
}

export async function clearAllThoughts(request: Request) {
  await prisma.thought.deleteMany({});

  return { success: true };
}
