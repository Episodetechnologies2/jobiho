import crypto from 'crypto';
import { cookies } from 'next/headers';

const SECRET = process.env.JWT_SECRET || 'jobiho-fallback-secret-key-12345';

export interface SessionPayload {
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}

export function signToken(payload: Omit<SessionPayload, 'iat' | 'exp'>, expiresInDays = 1): string {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + (expiresInDays * 24 * 60 * 60);
  const fullPayload: SessionPayload = { ...payload, iat, exp };

  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const data = Buffer.from(JSON.stringify(fullPayload)).toString('base64url');
  const signature = crypto.createHmac('sha256', SECRET).update(`${header}.${data}`).digest('base64url');

  return `${header}.${data}.${signature}`;
}

export function verifyToken(token: string): SessionPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [header, data, signature] = parts;
    const expectedSignature = crypto.createHmac('sha256', SECRET).update(`${header}.${data}`).digest('base64url');

    if (signature !== expectedSignature) return null;

    const payload: SessionPayload = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
    
    // Check expiration
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return payload;
  } catch (err) {
    return null;
  }
}

export async function getSession(cookieStore?: any): Promise<SessionPayload | null> {
  try {
    // Next.js 15 cookies() is an async function
    const resolvedCookies = await (cookieStore || cookies());
    const token = resolvedCookies.get('admin_session')?.value;
    if (!token) return null;
    return verifyToken(token);
  } catch (err) {
    return null;
  }
}
