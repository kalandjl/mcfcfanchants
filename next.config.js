/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    env: {
        "NEXT_PUBLIC_API_KEY":"AIzaSyByrcUgER6GSSg-fdnrTwZgYhXKk9LNpt4",
        "NEXT_PUBLIC_AUTH_DOMAIN":"mcfcfanchants-2fece.firebaseapp.com",
        "NEXT_PUBLIC_PROJECT_ID":"mcfcfanchants-2fece",
        "NEXT_PUBLIC_STORAGE_BUCKET":"mcfcfanchants-2fece.appspot.com",
        "NEXT_PUBLIC_MESSAGING_SENDER_ID":"1043257526255",
        "NEXT_PUBLIC_APP_ID":"1:1043257526255:web:a3277c769c7165298c981a",
        "NEXT_PUBLIC_MEASUREMENT_ID":"G-7EKHDTGQYB"
    }
}

module.exports = nextConfig
