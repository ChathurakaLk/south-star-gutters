import { prisma } from "@/lib/prisma";
import { projectSchema } from "@/lib/zodSchemas";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json({ ok: true, projects, status: 200 });
    } catch (error) {
        console.error("Database error fetching projects:", error);
        return NextResponse.json({
            ok: false,
            error: "Failed to fetch projects",
            status: 500
        });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const parsed = projectSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json({
                ok: false,
                error: parsed.error.flatten(),  // Flatten Zod errors
            }, { status: 400 });  // Ensure status code is set
        }

        const project = await prisma.project.create({
            data: {
                 ...parsed.data,
                whatsapp: parsed.data.whatsapp ?? "",
                roofType: parsed.data.roofType ?? "",
                downspouts: parsed.data.downspouts ?? "",
                notes: parsed.data.notes ?? "",
            }
        });

        return NextResponse.json({ ok: true, project }, { status: 201 });

    } catch (error) {
        console.error("Database error creating project:", error);
        return NextResponse.json({
            ok: false,
            error: error,
        }, { status: 500 });
    }
}
