import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type')
    const next = searchParams.get('next') ?? '/dashboard'

    if (token_hash && type) {
        try {
            const supabase = await createClient()
            const { error } = await supabase.auth.verifyOtp({
                token_hash,
                type: 'email',
            })

            if (!error) {
                return NextResponse.redirect(new URL(next, request.url))
            }
        } catch (error) {
            console.error('Auth confirm error:', error)
        }
    }

    // Return the user to an error page with some instructions
    return NextResponse.redirect(new URL('/auth/auth-error', request.url))
}