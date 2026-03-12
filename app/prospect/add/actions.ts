"use server";

import clientPromise from "@/lib/mongodb";
import { revalidatePath } from "next/cache";
import { exit } from "process";

export async function saveProspects(region: string, blockName: string, prospects: any[]) {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    // Prepare the data by merging the global context with each prospect card
    const dataToSave = prospects.map(p => ({
      region,
      block_name: blockName,
      country: "Malaysia",
      play_name: p.play,
      name: p.name,
      short_name: p.shortName,
      submission_year: p.year,
      status: "pending",
      exits_kind: "Prospect",
    //   registered_by: "John Doe",
      registered_at: new Date(),
    }));

    // Save multiple documents at once!
    await db.collection("prospect").insertMany(dataToSave);

    // This clears the cache so the 'List' page shows the new data immediately
    revalidatePath("/prospect/list");
    
    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: "Failed to save to MongoDB" };
  }
}