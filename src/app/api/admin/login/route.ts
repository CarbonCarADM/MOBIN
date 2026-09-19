import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ error: 'Painel admin desabilitado' }, { status: 503 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Painel admin desabilitado' }, { status: 503 });
}
