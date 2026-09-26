import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth/token'

export function middleware(request: NextRequest) {
  const isAdminApiRoute = request.nextUrl.pathname.startsWith('/api/admin') &&
    !request.nextUrl.pathname.startsWith('/api/admin/login')

  const isAdminPageRoute = request.nextUrl.pathname.startsWith('/admin') &&
    request.nextUrl.pathname !== '/admin/login'

  if (isAdminApiRoute || isAdminPageRoute) {
    const token = request.cookies.get('admin_token')?.value

    const verified = token ? verifyToken(token) : null
    console.log('DEBUG - Token exists:', !!token)
    console.log('DEBUG - Token verified:', verified)

    if (!token || !verified) {
      if (isAdminApiRoute) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
} 

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
  runtime: 'nodejs',
}