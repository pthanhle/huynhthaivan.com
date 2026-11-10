import fs from 'fs';
import path from 'path';
import type { StoredLeadRecord } from '@/shared/types/lead.types';

const memoryLeadsStore: StoredLeadRecord[] = [];

function resolveLeadsFilePath(): string {
  return path.join(process.cwd(), 'data', 'leads.json');
}

export function readStoredLeads(): StoredLeadRecord[] {
  try {
    const filePath = resolveLeadsFilePath();
    if (!fs.existsSync(filePath)) {
      return [...memoryLeadsStore];
    }
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return parsed as StoredLeadRecord[];
    }
    return [...memoryLeadsStore];
  } catch {
    return [...memoryLeadsStore];
  }
}

export function appendLeadRecord(record: StoredLeadRecord): void {
  memoryLeadsStore.unshift(record);
  try {
    const filePath = resolveLeadsFilePath();
    const current = readStoredLeads();
    const deduped = [
      record,
      ...current.filter((item) => item.id !== record.id),
    ].slice(0, 500);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(deduped, null, 2), 'utf-8');
  } catch {
    return;
  }
}
