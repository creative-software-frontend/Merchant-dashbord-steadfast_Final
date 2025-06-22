

import { NextResponse } from 'next/server';

export async function GET(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const res = await fetch('https://system.packnexa.com/api/user-info', {
            headers: {
                Authorization: authHeader,
                Accept: 'application/json',
            },
        });

        const data = await res.json();

        if (!res.ok) {
            return NextResponse.json({ error: data.error || 'API error' }, { status: res.status });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
