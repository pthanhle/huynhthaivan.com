import { NextRequest } from 'next/server';
import {
  handleCreateLeadController,
  handleListLeadsController,
} from '@/server/modules/leads/controllers/leads.controller';

export async function POST(request: NextRequest) {
  return handleCreateLeadController(request);
}

export async function GET(request: NextRequest) {
  return handleListLeadsController(request);
}
