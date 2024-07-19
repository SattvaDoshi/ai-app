// getHistoryData.ts
import { db } from '@/utlis/DB';
import { AIOutput } from '@/utlis/Schema';
import { currentUser } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm';

export interface HISTORY {
    id: number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string,
}

export async function getHistoryData() {
    const user = await currentUser();
    
    if (!user?.primaryEmailAddress?.emailAddress) {
        return [];
    }
    {/*@ts-ignore */}
    const HistoryList: HISTORY[] = await db.select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
        .orderBy(desc(AIOutput.id));
    
    return HistoryList;
}