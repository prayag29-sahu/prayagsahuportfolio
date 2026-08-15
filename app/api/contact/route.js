import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        // Read purely private server-side variables (No NEXT_PUBLIC_ needed)
        const serviceId = process.env.EMAILJS_SERVICE_ID;
        const templateId = process.env.EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS configuration missing on server.");
            return NextResponse.json({ success: false, error: "Server configuration error." }, { status: 500 });
        }

        const payload = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: body
        };

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const text = await response.text();
            console.error('EmailJS API Error:', text);
            return NextResponse.json({ success: false, error: 'Failed to send message.' }, { status: 500 });
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error.' }, { status: 500 });
    }
}
