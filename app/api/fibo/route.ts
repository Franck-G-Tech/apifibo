export async function POST(request: Request) {
  const body = await request.json();
  const n = body.n ?? 0;
 
  function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
 
  const result = fibonacci(n);
 
  return new Response(JSON.stringify({ n, result }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}